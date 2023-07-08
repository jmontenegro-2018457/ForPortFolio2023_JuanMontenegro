import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../index';
import { useState } from 'react';
import { useEffect } from 'react';

export const Navbar = () => {
    const { dataUser } = useContext(AuthContext)
    const [loggedIn, setLoggedIn] = useState(false)

    const _id = dataUser.sub

    const logOut = () => {
        localStorage.clear()
        window.location.reload()
    }

    const getUserLogged = () => {
        const token = localStorage.getItem("token");
        if (token) {
            setLoggedIn(true);
        }
    };

    useEffect(() => {
        getUserLogged();
    }, []);

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Hoteleria</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                                Home
                            </Link>
                        </li>
                       {
                        dataUser.role == 'CLIENT' ?(
                            <li className="nav-item">
                                <Link to='/reser' className="nav-link">
                                    Reservation
                                </Link>
                            </li>
                        ):<></>
                       }
                       {
                        loggedIn?(
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => logOut()}>
                                        LogOut
                                </Link>
                             </li>
                             ):<> <li className="nav-item">
                             <Link to='/Login' className="nav-link" >
                                     LogIn
                             </Link>
                          </li></>
                       }
                        

                    </ul>
  
                </div>
            </div>
        </nav>

    )
}

export default Navbar;