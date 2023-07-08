import React from 'react'
import './bodegaStyle.css'
import './buscar.css'
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom'
import { Card2 } from '../../components/Card2'
import { useEffect, useState } from 'react'
import { SearchBar } from '../../components/SearchBar';
import axios from 'axios'


export const BodegaPageAd = () => {
	const [cellars, setCellars] = useState([{}])
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': localStorage.getItem('token')
	}



	/*función para obtener las bodegas */
	const getCellars = async () => {
		try {
			const { data } = await axios('http://localhost:3200/cellars/get', { headers: headers })
			if (data.cellars) {
				setCellars(data.cellars)
			}
		} catch (err) {
			console.log(err)
			throw new Error('Error getting cellars')
		}
	}

	useEffect(() => getCellars, [])


	return (
		<>
			<NavBar />

			<div className="title-cards">
				<h1>Nuestros Servicios</h1>
			</div>
			<SearchBar ></SearchBar>

			<div className="container-card row g-0 justify-content-center">

				<div className="card">
					<figure className='figure1'>
						<img src="https://www.bienesonline.com/guatemala/photos/ofibodega-pequena-en-zona-12-BOR164261652907241-977.jpg" />
					</figure>
					<div className="contenido-card">
						<h3>Agregar Bodegas</h3>

						<Link to='/AgregarBo'>
							Agregar
						</Link>

					</div>
				</div>

				{
					cellars.map(({ _id, name, description, availability }, i) => {
						return (
							<Card2
								key={i}
								name={name}
								description={description}
								_id={_id}
								availability={availability}
							/>
						)
					})
				}

			</div>

			<Footer></Footer>
		</>
	)
}