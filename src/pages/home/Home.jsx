import React, { useEffect, useState } from 'react';

const Home = () => {

    let userString = localStorage.getItem('user');
    let user = JSON.parse(userString);

    const [cards, setCards] = useState([])
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        setCards(user.creditCards)
        setTransactions(user.transactions)
    }, []);

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

    const generateTransacction = (data, index) => {
        var dateTrasaction = new Date(data.date);
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>${data.ammount}</td>
                <td>{data.date}</td>
                <td>{data.from.email}</td>
                <td>{data.to.email}</td>
                <td>
                    <button className='btn btn-success'>View</button>
                </td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Bienvenido {user.name} a tu plataforma.</h3>
            <hr className='border border-success border-2'/>
            <h4>Tus tarjetas</h4>
            {
                cards.length === 0 ? 
                <p> No tiene tarjetas aun.</p> :
                <div className="row">
                    {cards.map((card, index) => generateCard(card, index))}
                </div> 
            }
            <hr className='border border-success border-2'/>
            <h4>Tus transacciones</h4>
            {
                transactions.length === 0 ? 
                <p>No tiene transacciones.</p> :
                <div className="table-responsive">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Ammount</th>
                                <th scope="col">Date</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transacction, index) => generateTransacction(transacction, index))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default Home;
