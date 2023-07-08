import React from 'react'
import { Link } from 'react-router-dom'
import './nof.css'

export const NotFoundPage = () => {
  return (

    <>
      <div className='notfound'>
        <center>
          <h1>404</h1>
          <p>Aqui no hay nada que ver.</p>
          <Link to='/Home'>
            <button> Que te parece si regresamos a una mejor busqueda.</button>
          </Link>
        </center>
      </div>
    </>
  )
}

