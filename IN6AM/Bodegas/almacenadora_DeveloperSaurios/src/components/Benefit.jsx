import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Benefit = ({ _id, name, description, price }) => {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const deleteBenefit = async (id) => {
    try {
      let confirmDelete = confirm('Are you sure to delete this cellar?')
      if (confirmDelete) {
        const { data } = await axios.delete(`http://localhost:3200/benefit/delete/${id}`, { headers: headers })
        console.log(data)
        alert(`${data.message}`)
        window.location.reload();
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="card fondoycard">
      <figure>
      </figure>
      <div className="contenido-card ">
        <h3 className='tituloC'>{name}</h3>
        <p>{description}</p>
        <h2>Price: {price}</h2>
        <Link to={`/UpdateBenefit/${_id}`}>
          Actualizar
        </Link>
        <button onClick={() => deleteBenefit(_id)}>Eliminar</button>
      </div>
    </div>
  )
}