import React, {useState} from 'react'
import {Link} from 'react-router-dom'


export const SearchBar = () => {
    const [cellarName, setCellarName] = useState('');

    const handleChange = (event) => {
        setCellarName(event.target.value);
      };

  return (
    <section className="webdesigntuts-workshop yuyu">
				<form action="" method="">
					<input onChange={handleChange} type="search" className='tocar' id="name" placeholder="Que almacen buscas"/>
					<Link to={`/BuscarBo/${cellarName}`}>
					<button className= 'btn btn-success'>Buscar</button>
					</Link>
				</form>
			</section>
  )
}
