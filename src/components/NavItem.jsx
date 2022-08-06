import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItem = ({title, direction}) => {
  return (
    <li className='nav-item'>
        <NavLink to={ direction }>
            { title }
        </NavLink>       
    </li>
  )
}
