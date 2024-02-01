import React from 'react'
import { BirjaYenilikElan } from '../BirjaYenilikElan/BirjaYenilikElan'
import { Herraclar } from '../Herraclar/Herraclar'

export const Sidebar = () => {
  return (
    <>
        <Herraclar/>
        <BirjaYenilikElan/>
    </>
  )
}
