import React from 'react'
import axios from 'axios'
import './LoginPage.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage = () => {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

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

    const handleChange1 = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })

    }

    const login = async (e) => {
        try {
            const { data } = await axios.post('http://localhost:3200/user/login', credentials)
            alert(data.message)
            navigate('/Home')
            localStorage.setItem("userLogged", true)
        } catch (err) {
            alert(err.response.data.message)
        }
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
            <div className="section">

                <div className="container">

                    <div className="row full-height justify-content-center">

                        <div className="col-12 text-center align-self-center py-5">

                            <div className="section pb-5 pt-5 pt-sm-2 text-center">

                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>

                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />

                                <label htmlFor="reg-log"></label>

                                <div className="card-3d-wrap mx-auto">

                                    <div className="card-3d-wrapper">

                                        <div className="card-front">

                                            <div className="center-wrap">

                                                <div className="section text-center">

                                                    <h4 className="mb-4 pb-3">Log In</h4>

                                                    <div className="form-group">

                                                        <input name='username' onChange={handleChange1} type="text" id="username" className="form-style" />
                                                        <label className="form-label" htmlFor="username">Username</label>

                                                        <i className="input-icon uil uil-lock-alt"></i>

                                                    </div>

                                                    <div className="form-group mt-2">

                                                        <input name='password' onChange={handleChange1} type="password" id="password" className="form-style" />
                                                        <label className="form-label" htmlFor="password">Password</label>

                                                        <i className="input-icon uil uil-lock-alt"></i>

                                                    </div>

                                                    <Link to='/HomePage'>
                                                        <button onClick={(e) => { e.preventDefault(); login() }} className="btn mt-4" type='submit'>Login</button>
                                                    </Link>

                                                </div>

                                            </div>

                                        </div>
                                        <div className="card-back">

                                            <div className="center-wrap">

                                                <div className="section text-center">

                                                    <h4 className="mb-4 pb-3">Sign Up</h4>

                                                    <div className="form-group">

                                                        <input onChange={handleChange} name='name' placeholder="Your Name" className='form-style' type="text" />

                                                        <i className="input-icon uil uil-user"></i>

                                                    </div>

                                                    <div className="form-group mt-2">
                                            
                                                        <input onChange={handleChange} name='surname' placeholder="Your Surname" className='form-style' type="text" />

                                                        <i className="input-icon uil uil-at"></i>

                                                    </div>

                                                    <div className="form-group mt-2">

                                                        <input onChange={handleChange} name='username' placeholder="Your Username" className='form-style' type="text" />

                                                        <i className="input-icon uil uil-at"></i>

                                                    </div>

                                                    <div className="form-group mt-2">
                                                        
                                                        <input onChange={handleChange} name='password' placeholder="Your Password" className='form-style' type="text" />

                                                        <i className="input-icon uil uil-user"></i>

                                                    </div>

                                                    <div className="form-group mt-2">

                                                        <input onChange={handleChange} name='email' placeholder="Your Email" className='form-style' type="text" />

                                                        <i className="input-icon uil uil-at"></i>

                                                    </div>

                                                    <div className="form-group mt-2">

                                                        <input onChange={handleChange} name='phone' placeholder="Your Phone" className='form-style' type="text" />  

                                                        <i className="input-icon uil uil-user"></i>

                                                    </div>
                                                    
                                                    <button onClick={(e) => { e.preventDefault(); register() }} className="btn mt-4" type='submit'>Register</button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}