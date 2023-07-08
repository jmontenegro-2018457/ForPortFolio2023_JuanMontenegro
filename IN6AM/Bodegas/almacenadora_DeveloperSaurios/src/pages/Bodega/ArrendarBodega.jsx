import React from 'react'
import './bodegaStyle.css'
import './check.css'
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../index';
import { useContext } from "react";

export const ArrendarBodega = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [benefits, setBenefits] = useState([]);
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const [cellar, setCellar] = useState({});
  const [loading, setLoading] = useState(true);
  const { dataUser } = useContext(AuthContext)

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  };

  const addLease = async () => {
    try {
      let form = {
        name: `Lease of ${dataUser.name}`,
        description: `Has a lease of ${cellar.name}`,
        total: tprice,
        user: dataUser.sub,
        cellar: id
      }

      const { data } = await axios.post(`http://localhost:3200/lease/save`, form, { headers: headers })
      alert(data.message)
      navigate('/Bodegas')
    } catch (err) {
      throw new Error('Error creating lease')
    }
  }

  const getCellar = async () => {
    try {
      const { data } = await axios(`http://localhost:3200/cellars/get/${id}`, { headers: headers });
      setCellar(data.cellar);
      setLoading(false);
    } catch (err) {
      console.log(err);
      throw new Error('Error getting cellars');
    }
  };

  useEffect(() => getCellar, []);

  const [tprice, setTPrice] = useState(cellar.price);

  const handleBenefitChange = (e) => {
    const id = e.target.value;
    const benefit = benefits.find(b => b._id === id);
  
    if (e.target.checked) {
      setSelectedBenefits([...selectedBenefits, benefit]);
      setTPrice(prevPrice => prevPrice + benefit.price);
    } else {
      setSelectedBenefits(selectedBenefits.filter(b => b._id !== id));
      setTPrice(prevPrice => prevPrice - benefit.price);
    }
  };

  useEffect(() => {
    if (cellar) {
      setTPrice(cellar.price);
    }
  }, [cellar]);

  useEffect(() => {
    const getBenefits = async () => {
      try {
        const { data } = await axios('http://localhost:3200/benefit/get', { headers: headers });
        setBenefits(data.benefits);
      } catch (err) {
        console.log(err);
        throw new Error('Error getting benefits');
      }
    };
    getBenefits();
  }, []);

  return (
    <>
      <NavBar />
      <div className="title-cards">
        <h1>Desea Arrendar?</h1>
      </div>
      <div className="container-card">
        <div className="card">
          <figure>
            <img src="https://www.bienesonline.com/guatemala/photos/bodega-en-renta-z10-ciudad-de-guatemala-BOR88121626192958-501.jpg" />
          </figure>
          <div className="contenido-card">
            <h3>{cellar.name}</h3>
            <p>{cellar.description}</p>
            <p>{cellar.location}</p>
            <p>{cellar.size}</p>
            <h2>Q. {tprice}</h2>
          </div>
        </div>
      </div>
      <h1 className="yuyu">Servicios Adicionales</h1>
      <div className="checkbox-container">
        <div>
          {benefits.map((benefit, index) => (
            <>
            <div key={benefit._id}>
              
                <input
                  id={`checkbox${index}`}
                  type="checkbox"
                  value={benefit._id}
                  onChange={handleBenefitChange}
                  checked={selectedBenefits.find(b => b._id === benefit._id)}
                />
              <label htmlFor={`checkbox${index}`}>
                {benefit.name}
              </label>
            </div>
            </>
          ))}
        </div>
        <div>
        <button onClick={(e) => { e.preventDefault(); addLease() }} className="btn mt-4 huhu" type='submit'>Arrendar </button>
        <Link to='/Bodegas'>
          <button className="btn mt-4 huhu" type='submit'>Cancelar</button>
        </Link>
        </div>
      </div>
      <br /><br />

      <Footer></Footer>
    </>
  )
}