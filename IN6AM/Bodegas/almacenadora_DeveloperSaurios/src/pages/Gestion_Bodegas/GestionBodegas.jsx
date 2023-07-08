import React from 'react'
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom'
import { useNavigate, Routes, Route, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import imgLoading from '../../assets/loading.png'

export const GestionBodegas = () => {
  const { id } = useParams();
  const [cellar, setCellar] = useState({});
  const [loading, setLoading] = useState(true);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  };

  const getCellar = async () => {
    try {
      const { data } = await axios(`http://localhost:3200/cellars/get/${id}`, { headers: headers });
      setCellar(data.cellar)
      setLoading(false);
    } catch (err) {
      console.log(err);
      throw new Error('Error getting cellars');
    }
  };

  const updateCellar = async () => {
    try {
      let updatedCellar = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        location: document.getElementById('location').value,
        size: document.getElementById('size').value,
        price: document.getElementById('price').value,
        availability: document.getElementById('availability').value
      }
      const { data } = await axios.put(`http://localhost:3200/cellars/update/${id}`, updatedCellar, { headers: headers })
      alert(`${data.message}`)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getCellar, [])

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

                    <h4 className="mb-4 pb-3">Actualizar Bodega</h4>

                    <div className="form-group mt-2">

                      <input defaultValue={cellar.name} id='name' placeholder="Name" className='form-style' type="text" />

                      <i className="input-icon uil uil-user"></i>

                    </div>


                    <div className="form-group mt-2">

                      <input defaultValue={cellar.description} id='description' placeholder="Description" className='form-style' type="text" />

                      <i className="input-icon uil uil-user"></i>

                    </div>


                    <div className="form-group mt-2">

                      <input defaultValue={cellar.location} id='location' placeholder="Location" className='form-style' type="text" />

                      <i className="input-icon uil uil-user"></i>

                    </div>

                    <div className="form-group mt-2">

                      <input defaultValue={cellar.size} id='size' placeholder="Size" className='form-style' type="text" />

                      <i className="input-icon uil uil-at"></i>

                    </div>

                    <div className="form-group mt-2">

                      <input defaultValue={cellar.price} id='price' placeholder="Price" className='form-style' type="text" />

                      <i className="input-icon uil uil-user"></i>

                    </div>

                    <div className="form-group mt-2">

                      <select id='availability' className="form-select bg-dark text-white" aria-label="Default select example">
                        <option>Availability</option>
                        <option value="si">Disponible</option>
                        <option value="No">No Disponible</option>
                      </select>

                      <i className="input-icon uil uil-at"></i>

                    </div>

                    <Link to='/Bodegas'>
                      <button onClick={() => updateCellar()} className="btn mt-4" type='submit'>Actualizar</button>
                    </Link>
                    <br />
                    <Link to='/Bodegas'>
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
