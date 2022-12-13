import React from 'react';

const TransactionForm = () => {
    return (
        <div className="container-fluid p-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="card border-light mb-3">
                        <div className="card-header">Formulario de transferencias</div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-outline mb-4">
                                    <input 
                                    type="text" 
                                    id="inputCardNnumber"
                                    className="form-control" 
                                    placeholder='Número de tarjeta del destinatario'/>
                                </div>
                                <div className="form-outline mb-4">
                                    <select className="form-select" id="selectTarjeta">
                                        <option>Selecciona una tarjeta</option>
                                        <option>Tarjeta 1</option>
                                        <option>Tarjeta 2</option>
                                        <option>Tarjeta 3</option>
                                        <option>Tarjeta 4</option>
                                    </select>
                                </div>
                                <div className="form-outline mb-4">
                                    <input 
                                    type="number" 
                                    id="inputFounds"
                                    className="form-control" 
                                    placeholder='Monto'/>
                                </div>
                                <div className='d-grid gap-2'>
                                    <button className="btn btn-md btn-success">Transferir</button>
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
