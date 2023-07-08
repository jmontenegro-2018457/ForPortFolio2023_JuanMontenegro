import React from 'react'
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../index';

export const GestionArrendamiento = () => {
  const { dataUser } = useContext(AuthContext);
  const { id } = useParams();
  const [lease, setLease] = useState({});
  const [cellars, setCellars] = useState([]);
  const [uId, setUid] = useState(lease.user);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  };

  const getLease = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3200/lease/get/${id}`, { headers: headers });
      setLease(data.lease)
      setLoading(false);

    } catch (err) {
      console.log(err);
      throw new Error('Error getting leases');
    }
  };

  const updateLease = async () => {
    try {
      let updatedLease = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        total: document.getElementById('total').value,
        user: document.getElementById('user').value,
        cellar: document.getElementById('cellar').value,
      }

      const { data } = await axios.put(`http://localhost:3200/lease/update/${id}`, updatedLease, { headers: headers })
      alert(`${data.message}`)
    } catch (err) {
      console.error(err)
    }
  }

  const getCellars = async () => {
    try {
      const { data } = await axios.get('http://localhost:3200/cellars/get', { headers: headers })
      if (data.cellars) {
        setCellars(data.cellars)
      }
    } catch (err) {
      console.log(err)
      throw new Error('Error getting cellars')
    }
  }

  const getUser = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3200/user/get/${uId}`)
      setUser(data.user)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getLease();
    getCellars();

  }, []);

  useEffect(() => {
    if (lease && lease.user) {
      setUid(lease.user)
      if (uId == lease.user) {
        getUser()
      }
    }
  }, [lease]);


  return (
    <>
      <NavBar />
      <div className="section">

        <div className="container">

          <div className="row full-height justify-content-center">

            <div className="col-12 text-center align-self-center py-5">

              <div className="card-front">

                <div className="center-wrap">

                  <div className="section text-center">

                    <h4 className="mb-4 pb-3">Actualizar Arrendamiento</h4>

                    <div className="form-group mt-2">

                      <input defaultValue={lease.name} id='name' placeholder="Name" className='form-style' type="text" />

                      <i className="input-icon uil uil-user"></i>

                    </div>

                    <div className="form-group mt-2">

                      <input defaultValue={lease.description} id='description' placeholder="Description" className='form-style' type="text" />

                      <i className="input-icon uil uil-user"></i>

                    </div>

                    <div className="form-group mt-2">

                      <input defaultValue={lease.total} id='total' placeholder="Size" className='form-style' type="text" />

                      <i className="input-icon uil uil-at"></i>

                    </div>


                    <div className="form-group mt-2">

                      <select id='user' className="form-select bg-dark text-white" aria-label="Default select example">
                        <option value={lease.user}>{user.name}</option>
                      </select>

                      <i className="input-icon uil uil-at"></i>

                    </div>

                    <div className="form-group mt-2">

                      <select id='cellar' className="form-select bg-dark text-white" aria-label="Default select example">
                        {
                          cellars.map(({ _id, name }, i) => {
                            return (
                              <option key={i} value={_id}>{name}</option>
                            )
                          })
                        }
                      </select>

                      <i className="input-icon uil uil-at"></i>

                    </div>

                    <Link to='/leases'>
                      <button onClick={() => updateLease()} className="btn mt-4" type='submit'>Actualizar</button>
                    </Link>
                    <br />
                    <Link to='/leases'>
                      <button className="btn mt-4" type='submit'>Cancelar</button>
                    </Link>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </>
  )
}