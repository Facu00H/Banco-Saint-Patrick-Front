import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TransactionsList = () => {
    let userString = localStorage.getItem('user');
    let user = JSON.parse(userString);

    const [transactions, setTransactions] = useState([])

    const formatearFecha = (fecha) => {
        const fechaFormateada = new Date(fecha)
        return fechaFormateada.toLocaleDateString()
    }

    const generateTransacction = (data, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>${data.ammount}</td>
                <td>{formatearFecha(data.date)}</td>
                <td>{data.from.email}</td>
                <td>{data.to.email}</td>
                <td>
                    <button className='btn btn-success'>View</button>
                </td>
            </tr>
        )
    }

    const getTransacctions = () => {
        setTransactions(user.transactions)
    }

    useEffect(() => {
        getTransacctions()
        console.log(transactions);
    }, []);

    return (
        <div>
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

export default TransactionsList;
