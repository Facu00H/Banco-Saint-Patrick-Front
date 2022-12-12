import React, { useEffect, useState } from 'react';

const CardList = () => {

    let userString = localStorage.getItem('user');
    let user = JSON.parse(userString);

    const [cards, setCards] = useState([])

    const generateCard = (data, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.cardNumber}</td>
                <td>{data.founds}</td>
                <td>
                    <button className='btn btn-success'>Edit</button>
                </td>
            </tr>
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
        <p> No Tienes tarjetas aun </p> :
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Card Number</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {cards.map((card, index) => generateCard(card, index))}
            </tbody>
        </table>
        
    );
}

export default CardList;
