import React from 'react'
import { NavItem } from './NavItem'

export const Navbar = () => {
  return (
    <nav className='primary-navigation'>
        <h2 className='nav-logo titulo'>Reito</h2>
        <div>
            <ul className='nav-list text-highlight'>
                <NavItem title='Buscar' direction='/' />
                <NavItem title='Crear' direction='/' />
                <NavItem title='Mis reitos' direction='/' />
                <NavItem title='Perfil' direction='/' />
            </ul>
        </div>
    </nav>
  )
}
