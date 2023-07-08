import React, { createContext, useState, useEffect } from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './pages/PaginasPrincipales/LoginPage'
import { HomePage } from './pages/PaginasPrincipales/HomePage'
import { ServiciosAdicionales } from './pages/ServiciosAdicionales/ServiciosAdicionales'
import { NotFoundPage} from './pages/PaginasPrincipales/NotFoundPage'
import  {BodegaPageAd} from './pages/Bodega/BodegaPageAd'
import { BodegaPageUs } from './pages/Bodega/BodegaPageUs'
import { Agregarbodega } from './pages/Bodega/AgregarBodegas'
import { ArrendarBodega } from './pages/Bodega/ArrendarBodega'
import { GestionBodegas } from './pages/Gestion_Bodegas/GestionBodegas'
import { UsuariosPage } from './pages/PaginasPrincipales/UsuariosPage'
import imgLoading from './assets/loading.png'
import { BuscarBodega } from './pages/Bodega/BuscarBodega'
import jwt_decode from 'jwt-decode';
import { UpdateUser } from './pages/PaginasPrincipales/UpdateUser'
import { UpdateProfile } from './pages/PaginasPrincipales/UpdateProfile'
import { Arrendamientos } from './pages/Gestion_Arrendamiento/Arrendamientos';
import { GestionArrendamiento } from './pages/Gestion_Arrendamiento/GestionArrendamiento';
import { UpdateService } from './pages/ServiciosAdicionales/UpdateService'
import { NewServicioAdicional } from './pages/ServiciosAdicionales/NewServicioAdicional'

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
          element: <LoginPage/>
        },
        {
          path: '/Home',
          element: loggedIn? <HomePage/>: <LoginPage/>
        },
        {
          path: '/Bodegas',
          element:
            loggedIn? (
              dataUser.role == 'ADMIN'? <BodegaPageAd/> : <BodegaPageUs/>
            ): <LoginPage/>
        },
        {
          path: '/AgregarBo',
          element: 
          loggedIn?(
            dataUser.role == 'ADMIN'? <Agregarbodega/> : <BodegaPageUs/>
          ):<LoginPage/>
        },
        {
          path: '/ArrendarBo/:id',
          element: loggedIn?<ArrendarBodega/>:<LoginPage/>
        },
        {
          path: '/ActualizarBo/:id',
          element:
          loggedIn?(
            dataUser.role == 'ADMIN'? <GestionBodegas/> : <BodegaPageUs/>
          ) : <LoginPage/>
        },
        {
          path: '/Users',
          element: 
          loggedIn?(
            dataUser.role == 'ADMIN'? <UsuariosPage/> : <BodegaPageUs/>
          ): <LoginPage/>
        }, 
        {
          path: '/Leases',
          element: 
          loggedIn?(
            dataUser.role == 'ADMIN'? <Arrendamientos/> : <HomePage/>
          ): <LoginPage/>
        },
        {
          path: '/BuscarBo/:cellarName',
          element: loggedIn?<BuscarBodega/>:<LoginPage/>
        },
        {
          path:'/UpdateU/:id',
          element: loggedIn?<UpdateUser/>:<LoginPage/>
        },
        {
          path:'/UpdateP/:id',
          element: loggedIn?<UpdateProfile/>:<LoginPage/>
        },
        {
          path:'/AAC/:id',
          element: loggedIn?(
            dataUser.role == 'ADMIN'? <GestionArrendamiento/> : <HomePage/>
          ): <LoginPage/>
        },
        {
          path:'/UpdateBenefit/:id',
          element: loggedIn?(
            dataUser.role == 'ADMIN'? <UpdateService /> : <HomePage/>
          ): <LoginPage/>
        },
        {
          path:'/Benefits',
          element: loggedIn?(
            dataUser.role == 'ADMIN'? <ServiciosAdicionales/> : <HomePage/>
          ): <LoginPage/>
        },
        {
          path:'/AddBenefit',
          element: loggedIn?(
            dataUser.role == 'ADMIN'? <NewServicioAdicional/> : <HomePage/>
          ): <LoginPage/>
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