import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { User } from '../../models/User.class';

const UserRegister = () => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate()

    const addUser = async(e) => {
        e.preventDefault()
        const newUser = new User(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            passwordRef.current.value
        )
        await axios.post("https://puzzled-lapel-wasp.cyclic.app/user/", newUser)
            .then(({data}) => {
                Swal.fire({
                    icon:'success',
                    title:'Successful registration!'
                })
                navigate('/')            
            })
            .catch(({response}) => {
                Swal.fire({
                    icon:'error',
                    title:'Ups... Something went wrong'
                })
                console.log(response);
            })
    }

    const login = () => {
        navigate('/')
    }
    
    return (
        <div className="container-fluid">
            <div className='row register-container'>
                <div className='col-md-6 text-bg-success' id='left-section'>
                </div>
                <div className='col-md-6 text-bg-light d-flex align-items-center justify-content-center'>
                    <form action="" className='form-signin'>
                        <div className='text-center mb-1'>
                            <img src={require('../../images/Vertical-Logo-Saint-Patrick.png')} style={{ height:100, margin:10 }} alt="" />
                        </div>
                        <div className='text-center'>
                            <p>Ingrese sus datos</p>
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder='Nombre' ref={nombreRef}/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder='Apellido' ref={apellidoRef}/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control" placeholder='E-mail' ref={emailRef}/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" className="form-control" placeholder='Contraseña' ref={passwordRef}/>
                        </div>
                        <div className='d-grid gap-2'>
                            <button className="btn btn-md btn-primary" type="submit" onClick={addUser}>Registrarse</button>
                            <button className="btn btn-md btn-success" onClick={login}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserRegister;
