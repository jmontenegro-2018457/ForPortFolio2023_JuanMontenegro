import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../index';

export const Footer = () => {
    const { dataUser } = useContext(AuthContext)
    const _id = dataUser.sub

    const logOut = () => {
        localStorage.clear()

    }
    return (

        <footer className="bg-dark text-center text-white align-items-start">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i></a>
                </section>
            </div>

            <div className="text-center p-3">
                © 2023 Copyright: Almacenadora DeveloperSaurios
            </div>
        </footer>
    )
}
