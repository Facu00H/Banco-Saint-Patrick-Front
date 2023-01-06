import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const TransactionForm = () => {

    let userString = localStorage.getItem('user');
    let user = JSON.parse(userString);

    const [cards, setCards] = useState([])
    const [cardNumberTo, setCardNumberTo] = useState('');
    const [ammount, setAmmount] = useState('');
    const [pin, setPin] = useState('');
    const [cardSelected, setCardSelected] = useState('')

    const navigate = useNavigate()

    const makeTransfer = async (e) => {
        e.preventDefault()
        console.log({cardSelected, cardNumberTo, ammount, pin});

        let localTransactions = localStorage.getItem('listTransactions')
        const transaction = {cardSelected, cardNumberTo, ammount, pin}
        let listTransactions = []

        if(!localTransactions){
            listTransactions.push(transaction)
            localStorage.setItem('listTransactions', JSON.stringify(listTransactions));
        } else {
            const arrayTransacctions = JSON.parse(localTransactions)
            arrayTransacctions.push(transaction)
            localStorage.setItem('listTransactions', JSON.stringify(arrayTransacctions));
        }

        const from = cardSelected
        const to = cardNumberTo
        const PIN = pin
        await axios.post('http://localhost:5000/user/transaction',{from, to, ammount, PIN})
        .then(({data}) => {
            Swal.fire({
                icon:'success',
                title:`${data.response}`
            })
            navigate('/admin/transactions')
        })
        .catch(({response}) => {
            Swal.fire({
                icon:'error',
                title:'Ups... Something went wrong'
            })
            console.log(response);
        })
    }

    const generateCardOption = (card, index) => {
        return (
            <option key={index} value={card.cardNumber}>{card.cardNumber}</option>
        )
    }

    useEffect(() => {
        setCards(user.creditCards)
    }, []);

    return (
        <div className="container-fluid p-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="card border-secondary mb-3">
                        <div className="card-header">Formulario de transferencias</div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-outline mb-4">
                                    <input 
                                    type="text" 
                                    id="inputCardNnumber"
                                    value={cardNumberTo}
                                    onChange={(event) => {setCardNumberTo(event.target.value)}}
                                    className="form-control" 
                                    placeholder='Número de tarjeta del destinatario'/>
                                </div>
                                <div className="form-outline mb-4">
                                    <select onChange={event => {setCardSelected(event.target.value)}} className="form-select" id="selectTarjeta">
                                        <option value="">Seleccione una tarjeta</option>
                                        {cards.map((card, index) => generateCardOption(card, index))}
                                    </select>
                                </div>
                                <div className="form-outline mb-4">
                                    <input 
                                    type="number" 
                                    id="inputFounds"
                                    value={ammount}
                                    onChange={(event) => {setAmmount(event.target.value)}}
                                    className="form-control" 
                                    placeholder='Ingrese Monto'/>
                                </div>
                                <div className="form-outline mb-4">
                                    <input 
                                    type="number" 
                                    id="inputPin"
                                    value={pin}
                                    onChange={(event) => {setPin(event.target.value)}}
                                    className="form-control" 
                                    placeholder='Ingrese PIN'/>
                                </div>
                                <div className='d-grid gap-2'>
                                    <button className="btn btn-md btn-success" onClick={makeTransfer}>Transferir</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionForm;
