import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../componets/Dashboard';
import CardForm from '../pages/cards/CardForm';
import Cards from '../pages/cards/Cards';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import UserRegister from '../pages/login/UserRegister';
import Transactions from '../pages/transactions/Transactions';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={ <Login /> }/>
            <Route path='/register' element={ <UserRegister /> }/>
            <Route path='/admin' element={ <Dashboard /> }>
                <Route index path='home' element={ <Home /> }/>
                <Route path='cards' element={ <Cards /> }/>
                <Route path='cards/form' element={ <CardForm /> }/>
                <Route path='transactions' element={ <Transactions /> }/>
                <Route path='logout'/>
            </Route>
        </Routes>
    );
}

export default Router;
