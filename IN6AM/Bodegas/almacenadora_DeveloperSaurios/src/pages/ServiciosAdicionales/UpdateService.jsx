import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export const UpdateService = () => {

    const [service, setService] = useState({});
    const { id } = useParams();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    };

    const getService = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3200/benefit/get/${id}`, { headers: headers });
            setService(data.benefit);
            console.log(data.benefit);
        } catch (err) {
            console.log(err);
        }
    }

    const updateService = async () => {
        try {
            let updateService = {
                name: document.getElementById('inputName').value,
                price: document.getElementById('inputPrice').value,
                description: document.getElementById('inputDescription').value,
            }
            const { data } = await axios.put(`http://localhost:3200/benefit/update/${id}`, updateService, { headers: headers });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => getService, []);

    return (
        <>
            <section className="vh-100">

                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">
                            <h1 className="text-white mb-4">Update Service</h1>
                            <div className="card" />
                            <div className="card-body">
                                <div className="row align-items-center pt-4 pb-3">
                                    <div className="col-md- pe-5">
                                        <h6 className="mb-0">Name</h6>
                                        <input defaultValue={service.name} name='name' type="text" className="form-control form-control-lg" id='inputName' />
                                    </div>
                                </div>
                                <div className="row align-items-center pt-4 pb-3">
                                    <div className="col pe-5">
                                        <h6 className="mb-0">Price</h6>
                                        <input defaultValue={service.price} name='price' type="text" className="form-control form-control-lg" id='inputPrice' />
                                    </div>
                                </div>
                                <hr className="mx-n3" />
                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">
                                        <h6 className="mb-0">Description</h6>
                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <textarea defaultValue={service.description} name='description' className="form-control" rows="3" placeholder="Message sent to the employer" id='inputDescription'></textarea>
                                    </div>
                                </div>
                                <hr className="mx-n3" />
                            </div>
                            <div className='m-4 text-center'>
                                <Link to='/Benefits'>
                                    <button onClick={() => updateService()} type="submit" className="btn btn-primary">Update</button>
                                </Link>
                                <br /><br />
                                <Link to='/Benefits'>
                                    <button type="submit" className="btn btn-danger">Cancel</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}