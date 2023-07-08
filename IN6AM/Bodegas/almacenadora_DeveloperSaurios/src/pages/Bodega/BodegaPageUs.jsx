import React from 'react'
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import './buscar.css'
import { Card } from '../../components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { SearchBar } from '../../components/SearchBar'

export const BodegaPageUs = () => {
	const [cellars, setCellars] = useState([{}])
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': localStorage.getItem('token')
	}

	/*función para obtener las bodegas */
	const getCellars = async () => {
		try {
			const { data } = await axios.post('http://localhost:3200/cellars/availability', { status: 'si' }, { headers: headers })
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
				<h1>Servicios que Ofrecemos</h1>
			</div>
			<SearchBar></SearchBar>

			<div className="container-card row g-0 justify-content-center">
				{
					cellars.map(({ _id, name, description, availability }, i) => {
						return (
							<Card
								key={i}
								name={name}
								description={description}
								availability={availability}
								_id={_id}
							>
							</Card>
						)
					})
				}

			</div >

			<Footer></Footer>
		</>
	)
}