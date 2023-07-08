import React, { useContext } from 'react'
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import './bodegaStyle.css'
import { Card } from '../../components/Card'
import { Card2 } from '../../components/Card2'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../index'
import { useParams } from 'react-router-dom'
import { SearchBar } from '../../components/SearchBar'

export const BuscarBodega = () => {
	const { dataUser } = useContext(AuthContext);
	const { cellarName } = useParams();

	const [cellars, setCellars] = useState([{}])
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': localStorage.getItem('token')
	}

	/*función para obtener las bodegas */
	const getCellars = async () => {
		try {
			const { data } = await axios.post(`http://localhost:3200/cellars/search`, { name: cellarName }, { headers: headers });
			setCellars(data.cellars);
		} catch (err) {
			console.log(err);
			throw new Error('Error getting cellars');
		}
	};

	useEffect(() => {
		getCellars();
	}, [cellarName]);

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
							dataUser.role == 'CLIENT' ? (
								<Card
									key={i}
									name={name}
									description={description}
									availability={availability}
								>
								</Card>
							) : <Card2
								key={i}
								name={name}
								description={description}
								_id={_id}
								availability={availability}
							/>
						)
					})
				}

			</div >

			<Footer></Footer>
		</>
	)
}