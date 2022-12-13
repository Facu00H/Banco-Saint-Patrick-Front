import React, { useEffect, useState } from 'react';

const CardList = () => {

    let userString = localStorage.getItem('user');
    let user = JSON.parse(userString);

    const [cards, setCards] = useState([])

    const generateCard = (data, index) => {
        return (
            <div key={index} className="card credit-card">
                <div className="card-body">
                    <div className="card-title">
                        {data.cardNumber}
                    </div>
                        <p className="card-text">Founds: $ {data.founds}</p>
                        <a href="#" className="card-link">Editar</a>
                        <a href="#" className="card-link">Eliminar</a>
                </div>
            </div>
        )
    }

    useEffect(() => {
        setCards(user.creditCards)
    }, []);

    {/*const card_1 = new Card('5459 1565 2563 8458', 5642, '100.50')
    const card_2 = new Card('5459 1654 7548 8458', 5995, '1550.80')
    const card_3 = new Card('5459 1956 1526 8458', 5652, '2501.30')

    const [cards, setCards] = useState([
        card_1,
        card_2,
        card_3
    ]);*/}

    return (
        cards.length === 0 ? 
        <p> No tiene tarjetas aun.</p> :
        <div className="row">
            {cards.map((card, index) => generateCard(card, index))}
        </div> 
    );
}

export default CardList;
