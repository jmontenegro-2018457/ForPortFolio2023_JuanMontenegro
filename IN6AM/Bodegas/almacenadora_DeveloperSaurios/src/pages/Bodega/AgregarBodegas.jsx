import React from 'react'
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

export const Agregarbodega = () => {
    const navigate = useNavigate();

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const [form, setForm] = useState({
        name: '',
        description: '',
        location: '',
        size: '',
        availability: '',
        price: ''


    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const add = async () => {
        try {
            const { data } = await axios.post('http://localhost:3200/cellars/add', form, { headers: headers })
            alert(data.message)
            navigate('/Bodegas')
        } catch (err) {
            alert(err.response.data.message)
        }
    }

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

                                        <h4 className="mb-4 pb-3">Agregar Bodega</h4>



                                        <div className="form-group mt-2">

                                            <input onChange={handleChange} name='name' placeholder="Name" className='form-style' type="text" />

                                            <i className="input-icon uil uil-user"></i>

                                        </div>


                                        <div className="form-group mt-2">

                                            <input onChange={handleChange} name='description' placeholder="Description" className='form-style' type="text" />

                                            <i className="input-icon uil uil-user"></i>

                                        </div>



                                        <div className="form-group mt-2">

                                            <input onChange={handleChange} name='location' placeholder="Location" className='form-style' type="text" />

                                            <i className="input-icon uil uil-user"></i>

                                        </div>




                                        <div className="form-group mt-2">

                                            <input onChange={handleChange} name='size' placeholder="Size" className='form-style' type="text" />

                                            <i className="input-icon uil uil-at"></i>

                                        </div>



                                        <div className="form-group mt-2">

                                            <select onChange={handleChange} name='availability' className="form-select bg-dark text-white" aria-label="Default select example">
                                                <option>Availability</option>
                                                <option value="si">Disponible</option>
                                                <option value="no">No Disponible</option>
                                            </select>

                                            <i className="input-icon uil uil-at"></i>

                                        </div>



                                        <div className="form-group mt-2">

                                            <input onChange={handleChange} name='price' placeholder="Price" className='form-style' type="text" />

                                            <i className="input-icon uil uil-user"></i>

                                        </div>


                                        <button onClick={(e) => { e.preventDefault(); add() }} className="btn mt-4" type='submit'>Register</button>
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