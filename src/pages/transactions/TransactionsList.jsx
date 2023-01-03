import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TransactionsList = () => {
    let userString = localStorage.getItem('user');
    let user = JSON.parse(userString);

    const [transactions, setTransactions] = useState([])
    const [email, setEmail] = useState(user.email);

    const getUser = async () => {
            
            const params = {
                email: email
            }

            await axios.get("http://localhost:5000/user/", { params })
            .then(({data}) => {
                console.log(data);         
            })
            .catch(({response}) => {
                console.log(response);
            })
    }

    const generateTransacction = (data, index) => {
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

    useEffect(() => {
        console.log(email);
        setTransactions(user.transactions)
        getUser()
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
