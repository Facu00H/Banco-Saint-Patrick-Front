import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from './CardList';

const Cards = () => {

    const navigate = useNavigate()

    const cardForm = () => {
        navigate('form')
    }

    return (
        <div>
            <h4>Tus tarjetas</h4>
            <button className="btn btn-success" onClick={cardForm}>Agregar Nueva</button>
            <div className="mt-3">
                <CardList />
            </div>
        </div>
    );
}

export default Cards;
