import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



const headers = {
  'Content-Type': 'application/json',
  'Authorization': localStorage.getItem('token')
}

export const Card2 = ({ _id, name, description, availability }) => {
  const deleteCellar = async (id) => {
    try {
      let confirmDelete = confirm('Are you sure to delete this cellar?')
      if (confirmDelete) {
        const { data } = await axios.delete(`http://localhost:3200/cellars/delete/${id}`, { headers: headers })
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
        <h2>Disponibilidad: {availability}</h2>
        <Link to={`/ActualizarBo/${_id}`}>
          Actualizar
        </Link>
        <button onClick={() => deleteCellar(_id)}>Eliminar</button>
      </div>
    </div>
  )
}