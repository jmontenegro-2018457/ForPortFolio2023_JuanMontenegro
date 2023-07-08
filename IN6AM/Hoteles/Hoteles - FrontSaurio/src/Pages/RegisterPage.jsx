import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Footer } from '../components/Footer.jsx'
import imagen from '../assets/hotel.png'


export const RegisterPage = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    surname: '',
    username: '',
    password: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const register = async (e) => {
    try {
      const { data } = await axios.post('http://localhost:3200/user/register', form)
      alert(data.message)
      navigate('/Login')
    } catch (err) {
      throw new Error('Error registering user')
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2>Sign Up</h2>
              </div>
              <div className="row">
                <form control="" className="form-group">
                  <div className="row">
                    <input type="text" onChange={handleChange} name="name" id="name" className="form__input" placeholder="Name" />
                  </div>
                  <div className="row">
                    <input type="text" onChange={handleChange} name="surname" id="surname" className="form__input" placeholder="Surname" />
                  </div>
                  <div className="row">
                    <input type="text" onChange={handleChange} name="username" id="username" className="form__input" placeholder="Username" />
                  </div>
                  <div className="row">
                    <span className="fa fa-lock"></span>
                    <input type="password" onChange={handleChange} name="password" id="password" className="form__input" placeholder="Password" />
                  </div>
                  <div className="row">
                    <input type="text" onChange={handleChange} name="email" id="email" className="form__input" placeholder="Email" />
                  </div>
                  <div className="row">
                    <input type="number" onChange={handleChange} name="phone" id="phone" className="form__input" placeholder="Phone" />
                  </div>
                  <div className="">
                    <input onClick={(e) => { e.preventDefault(); register() }} type="submit" value="Register" className="btn" />
                  </div>
                  <div className="">
                    <Link to='/Login'><input type="submit" value="Cancel" className="btn" /></Link>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
