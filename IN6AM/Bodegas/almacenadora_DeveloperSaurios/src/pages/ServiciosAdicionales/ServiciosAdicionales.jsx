import React, { useState } from "react";
import axios from 'axios'
import { useEffect } from "react"
import { NavBar } from '../../components/NavBar'
import { Benefit } from '../../components/Benefit'
import { Footer } from '../../components/Footer'
import { Link } from 'react-router-dom';


export const ServiciosAdicionales = () => {
	const [benefits, setBenefits] = useState([{}])
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': localStorage.getItem('token')
	}



	/*función para obtener las bodegas */
	const getBenefit = async () => {
		try {
			const { data } = await axios('http://localhost:3200/benefit/get', { headers: headers })
			if (data.benefits) {
				setBenefits(data.benefits)
			}
            
		} catch (err) {
			console.log(err)
			throw new Error('Error getting benefits')
		}
	}

	useEffect(() => getBenefit, [])


	return (
		<>
			<NavBar />

			<div className="section text-center">

				<div className="title-cards">
					<h1>Nuestros Servicios Adicionales</h1>
				</div>



				<div className="container-card row g-0 justify-content-center">

					<div className="card">

						<div className="contenido-card">
							<h3>Agregar Servicio </h3>

							<Link to='/AddBenefit'>
								Agregar
							</Link>
							

						</div>
					</div>

					{
						benefits.map(({ _id, name, description, price }, i) => {
							return (
								<Benefit
									key={i}
									name={name}
									description={description}
									_id={_id}
									price={price}
								/>
							)
						})
					}

				</div>
			</div>

			<Footer></Footer>
		</>
	)
}