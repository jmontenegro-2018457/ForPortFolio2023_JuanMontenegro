import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { AuthContext } from '../../index';
import { useContext } from "react";
import NavBar from '../../components/NavBar';
import { Footer } from '../../components/Footer'

export const UpdateUser = () => {
  const [user, setUser] = useState({})
  const { id } = useParams();
  const { dataUser } = useContext(AuthContext)

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getUser = async () => {
    try {
      const { data } = await axios(`http://localhost:3200/user/get/${id}`)
      setUser(data.user)
    } catch (err) {
      console.error(err)
    }
  }

  const updateUser = async () => {
    try {
      let updatedUser = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSurname').value,
        username: document.getElementById('inputUsername').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputPhone').value,
        role: document.getElementById('inputRole').value
      }
      const { data } = await axios.put(`http://localhost:3200/user/update/${id}`, updatedUser, { headers: headers })
      alert(`${data.message}`)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getUser, [])

  return (
    <>
      <NavBar></NavBar>
      <div className="section">

        <div className="container">

          <div className="row full-height justify-content-center">

            <div className="section pb-5 pt-5 pt-sm-2 text-center">

              <div className="card-3d-wrap mx-auto">

                <div className="card-3d-wrapper">

                  <div className="card-front">

                    <div className="center-wrap">

                      <div className="section text-center">

                        <h2 className="mb-4 pb-3">Update User</h2>

                        <div className="form-group">

                          <input defaultValue={user.name} name='name' placeholder="Your Name" className='form-style' type="text" id='inputName' required />

                          <i className="input-icon uil uil-user"></i>

                        </div>

                        <div className="form-group mt-2">

                          <input defaultValue={user.surname} name='surname' placeholder="Your Surname" className='form-style' type="text" id='inputSurname' required />

                          <i className="input-icon uil uil-at"></i>

                        </div>

                        <div className="form-group mt-2">

                          <input defaultValue={user.username} name='username' placeholder="Your Username" className='form-style' type="text" id='inputUsername' required />

                          <i className="input-icon uil uil-at"></i>

                        </div>

                        <div className="form-group mt-2">

                          <input defaultValue={user.email} name='email' placeholder="Your Email" className='form-style' type="text" id='inputEmail' required />

                          <i className="input-icon uil uil-user"></i>

                        </div>

                        <div className="form-group mt-2">

                          <input defaultValue={user.phone} name='phone' placeholder="Your Phone" className='form-style' type="number" id='inputPhone' required />

                          <i className="input-icon uil uil-at"></i>

                        </div>


                        <div className="form-group mt-2">

                          <input defaultValue={user.role} name='role' placeholder="Your Role" className='form-style' type="text" id='inputRole' required />

                          <i className="input-icon uil uil-user"></i>

                        </div>

                        <Link to='/Users'>
                          <button onClick={() => updateUser()} className="btn mt-4 btn-primary" type='submit'>Update</button>
                        </Link>

                        <Link to='/Users'>
                          <button className="btn mt-4 btn-warning" type='submit'>Cancel</button>
                        </Link>

                      </div>

                    </div>

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