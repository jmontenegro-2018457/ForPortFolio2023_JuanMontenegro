import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ _id, name, description, availability }) => {
    return (
        <div className="card">
            <figure>

            </figure>
            <div className="contenido-card">
                <h3 className='tituloC'>{name}</h3>
                <p>{description}</p>
                <h2>Disponibilidad: {availability}</h2>
                {availability == 'si' ? (
                    <Link to={`/ArrendarBo/${_id}`}>
                        Arrendar
                    </Link>) : <></>
                }
            </div>

        </div>
    )
}