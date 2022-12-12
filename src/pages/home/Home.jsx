import React from 'react';

const Home = () => {

    let userString = localStorage.getItem('user');
    let user = JSON.parse(userString);

    return (
        <div>
            <h4>Bienvenido {user.name} a tu plataforma.</h4>
        </div>
    );
}

export default Home;
