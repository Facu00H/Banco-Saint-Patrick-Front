import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const SideBar = () => {

    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    return (
        <div className='sidebar' id='sideBar'>
            <div>
                <img src={require('../images/Banco-Saint-Patrick-Logo.png')} style={{ height:70, margin:10 }} alt="" />
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="home" className={(navData) => navData.isActive ? "active" : "text-dark" }><FaIcons.FaHome className='me-3'/> Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="cards" className={(navData) => navData.isActive ? "active" : "text-dark" }><FaIcons.FaCreditCard className='me-3'/>Tarjetas</NavLink>
                    </li>
                    <li>
                        <NavLink to="transactions" className={(navData) => navData.isActive ? "active" : "text-dark" }><FaIcons.FaExchangeAlt className='me-3'/>Transacciones</NavLink>
                    </li>
                </ul>
            </div>
            <i type='button' className='toggle-sidebar' onClick={ToggleSidebar}><FaIcons.FaAngleRight/></i>
        </div>
    );
}

export default SideBar;
