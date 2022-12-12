import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Usuario: {user.name + " " +  user.lastName}</a>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        
                    </ul>
                <div className="d-flex">
                    <button className="btn btn-primary my-2 my-sm-0" onClick={handleLogOut}>Log Out</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
