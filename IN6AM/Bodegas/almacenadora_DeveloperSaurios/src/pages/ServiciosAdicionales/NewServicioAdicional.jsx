import React from 'react'
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../index';
import { useContext } from "react";

export const NewServicioAdicional = () => {
    const navigate = useNavigate()

    const headers = {
		'Content-Type': 'application/json',
		'Authorization': localStorage.getItem('token')
	}


    const [form, setForm] = useState({
        name: '',
        description: '',
        price: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const AddService = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post('http://localhost:3200/benefit/create', form, {headers: headers})
            if (data.message) {
                alert(data.message)
            }
            navigate('/Benefits')
        } catch (err) {
            alert(err.response.data.message)
            throw new Error('Error Add Service user')
        }
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="container center">
                <h1 className="h1">Add Services</h1>
                <form className='m-5 text-center'>
                    <div className='mb-3'>
                        <label className='form-label'>Name Service</label>
                        <input onChange={handleChange} name='name' className='form-control' type="text" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">Description</label>
                        <input onChange={handleChange} name='description' className='form-control' type="text" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="">Price</label>
                        <input onChange={handleChange} name='price' className='form-control' type="text" />
                    </div>
                    <button onClick={(e) => AddService(e)} className='btn btn-primary'>
                        Add Service
                    </button>
                    <br /><br />
                    <Link to="/Benefits">
                        <button className='btn btn-primary'>
                            Cancel
                        </button>
                    </Link>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}
