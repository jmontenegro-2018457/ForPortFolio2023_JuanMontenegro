import React from 'react'
import { TableA } from '../../components/TableA'
import { Outlet } from 'react-router-dom'

export const Arrendamientos = () => {
  return (
    <>
      <TableA />
      <Outlet></Outlet>
    </>
  )
}
