import React, { createContext, useState, useEffect } from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { LoginPage } from './Pages/LoginPage'
import { RegisterPage } from './Pages/RegisterPage' 
import { NotFoundPage } from './Pages/NotFoundPage'
import { Reservation } from './Pages/CLIENT/Reservation';
import jwt_decode from 'jwt-decode';




export const AuthContext = createContext();

//ESTE COMPONTE SIRVE PARA CREAR EL ENRUTADOR Y AL MISMO PASARLE UN CONTEXTO (SERIE DE DATOS, OBJETOS, STRINGS, ARRAYS)

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    const [dataUser, setDataUser] = useState({
        sub: '',
        name: '',
        username: '',
        role: ''
    })

    const getUserDataFromToken = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwt_decode(token);
            setLoggedIn(true);
            setDataUser(decodedToken);
        }
    };

    useEffect(() => {
        getUserDataFromToken();
    }, []);

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFoundPage />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/Register',
                    element: <RegisterPage />
                },
                {
                    path: '/Login',
                    element: <LoginPage />
                },
                {
                    path: '/reser',
                    element: <Reservation />
                }
            ]
        }
    ])


    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
            <RouterProvider router={routes} />
        </AuthContext.Provider>
    )

}