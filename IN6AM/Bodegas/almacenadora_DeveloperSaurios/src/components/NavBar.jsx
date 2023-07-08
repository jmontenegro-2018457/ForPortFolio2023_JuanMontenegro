import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../index';

export const NavBar = () => {
    const { dataUser } = useContext(AuthContext)
    const _id = dataUser.sub

    const logOut = () => {
        localStorage.clear()

    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Almacenadora</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/Home' className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/Bodegas' className="nav-link">
                                Bodegas
                            </Link>
                        </li>

                        {
                            dataUser.role == 'ADMIN' ? (
                                <>
                                    <li>
                                        <Link to='/Users' className="nav-link">
                                            Users
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/Leases' className="nav-link">
                                            Leases
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/Benefits' className="nav-link">
                                            Benefits
                                        </Link>
                                    </li>
                                </>
                            ) : <></>
                        }

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Welcome {dataUser.name}, {dataUser.role}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {/* <li><Link to={`/UpdateP/${_id}`} className="dropdown-item">Actualizar</Link></li> */}
                                <Link to="/" className="nav-link text-dark" onClick={() => logOut()}>
                                    LogOut
                                </Link>
                            </ul>
                        </li>
                    </ul>
                    {/*  <ul className="navbar-nav">
                        <li className="nav-item">

                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>

    )
}

export default NavBar;
