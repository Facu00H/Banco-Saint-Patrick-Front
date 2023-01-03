import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    let userString = localStorage.getItem('user');
    let user = JSON.parse(userString);

    const navigate = useNavigate()

    const handleLogOut = () => {
        console.log('clicked');
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={require('../images/logo_spb_white.png')} style={{ height:50 }} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    
                    <li className='nav-item'>
                        <NavLink to="home" className={(navData) => navData.isActive ? "active nav-link" : "text-light nav-link" }>Inicio</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="cards" className={(navData) => navData.isActive ? "active nav-link" : "text-light nav-link" }>Tarjetas</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="transactions" className={(navData) => navData.isActive ? "active nav-link" : "text-light nav-link" }>Transacciones</NavLink>
                    </li>
                    
                </ul>
                <div className="d-flex">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{user.name + ' ' + user.lastName}</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#"><button className="dropdown-item btn btn-success my-2 my-sm-0" onClick={handleLogOut}>Log Out</button></a>
                        </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
