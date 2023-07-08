import React from 'react'
import './HomeStyle.css'
import Table from '../../components/Table';
import { Outlet } from "react-router-dom"
import { Link } from 'react-router-dom'

export const UsuariosPage = () => {
  return (
    <>
      <Table />

      <Outlet></Outlet>

    </>
  )
}