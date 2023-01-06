import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CardForm = () => {

    let userString = localStorage.getItem('user');
    let user = JSON.parse(userString);
    let email = user.email;

    const navigate = useNavigate()

    const [creditCard, setCreditCard] = useState('');
    const [PINNumber, setPINNumber] = useState('');
    const [founds, setFounds] = useState('');

    const addCard = async (e) => {
        e.preventDefault()
        await axios.post("https://puzzled-lapel-wasp.cyclic.app/cards/", {email, creditCard, PINNumber, founds})
            .then(({data}) => {
                Swal.fire({
                    icon:'success',
                    title:'Card Saved!'
                })
                user.creditCards = data.response.creditCards
                let updatedLocalUser = JSON.stringify(user)
                localStorage.setItem('user', updatedLocalUser);
                navigate('/admin/cards')            
            })
            .catch(({response}) => {
                Swal.fire({
                    icon:'error',
                    title:'Ups... Something went wrong'
                })
                console.log(response);
            })
    }

    return (
        <div className="container-fluid p-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="card border-secondary mb-3">
                        <div className="card-header">Formulario de tarjetas de crédito o débito</div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-outline mb-4">
                                    <input 
                                    type="text" 
                                    id="inputCardNnumber" 
                                    value={creditCard} 
                                    onChange={(event)=>{setCreditCard(event.target.value)}} 
                                    className="form-control" 
                                    placeholder='Card number'/>
                                </div>
                                <div className="form-outline mb-4">
                                    <input 
                                    type="text" 
                                    id="inputPin" 
                                    value={PINNumber} 
                                    onChange={(event)=>{setPINNumber(event.target.value)}} 
                                    className="form-control" 
                                    placeholder='Pin'/>
                                </div>
                                <div className="form-outline mb-4">
                                    <input 
                                    type="number" 
                                    id="inputFounds" 
                                    value={founds} 
                                    onChange={(event)=>{setFounds(event.target.value)}} 
                                    className="form-control" 
                                    placeholder='Founds'/>
                                </div>
                                <div className='d-grid gap-2'>
                                    <button className="btn btn-md btn-success" onClick={addCard}>Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardForm;
