import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionsList from './TransactionsList';

const Transactions = () => {

    const navigate = useNavigate()

    const transactionForm = () => {
        navigate('form')
    }

    return (
        <div>
            <h4>Tus transacciones</h4>
            <button className="btn btn-success" onClick={transactionForm}>Realizar Transacción</button>
            <div className="mt-3">
                <TransactionsList />
            </div>
        </div>
    );
}

export default Transactions;
