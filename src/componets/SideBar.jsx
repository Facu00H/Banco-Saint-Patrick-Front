import React from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div>
                <img src={require('../images/Banco-Saint-Patrick-Logo.png')} style={{ height:70, margin:10 }} alt="" />
            </div>
            <ul>
                <li>
                    <NavLink to="home" className={(navData) => navData.isActive ? "active" : "text-dark" }><FaIcons.FaHome className='me-2'/> Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="cards" className={(navData) => navData.isActive ? "active" : "text-dark" }><FaIcons.FaCreditCard className='me-2'/>Tarjetas</NavLink>
                </li>
                <li>
                    <NavLink to="transactions" className={(navData) => navData.isActive ? "active" : "text-dark" }><FaIcons.FaExchangeAlt className='me-2'/>Transacciones</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;
