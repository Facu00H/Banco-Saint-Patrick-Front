    import axios from 'axios';
    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import Swal from 'sweetalert2';

    const Login = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const navigate = useNavigate()

        const loginUser = async(e) => {
            e.preventDefault()
            await axios.post("http://localhost:5000/user/login/", {email, password})
                .then(({data}) => {
                    Swal.fire({
                        icon:'success',
                        title:'Welcome!'
                    })
                    let loguedUser = JSON.stringify(data.response);
                    localStorage.setItem('user', loguedUser);
                    navigate('/admin/home')            
                })
                .catch(({response}) => {
                    Swal.fire({
                        icon:'error',
                        title:'Ups... Something went wrong'
                    })
                    console.log(response);
                })
        }

        const registrarse = () => {
            navigate('/register')
        }

        return (
            <div className="container-fluid">
                <div className='row login-container'>
                    <div className='col-md-6 text-bg-success'>
                        <img src="" alt="" />
                    </div>
                    <div className='col-md-6 text-bg-light d-flex align-items-center justify-content-center'>
                        <form className='form-login'>
                            <div className='text-center'>
                                <p>Bienvenido al la Banca por Internet</p>
                            </div>
                            <div className="form-outline mb-4">
                                <input 
                                type="email" 
                                id="inputEmail" 
                                value={email} 
                                onChange={(event)=>{setEmail(event.target.value)}} 
                                className="form-control" 
                                placeholder='Email'/>
                            </div>
                            <div className="form-outline mb-4">
                                <input 
                                type="password" 
                                id="inputPassword" 
                                value={password} 
                                onChange={(event)=>{setPassword(event.target.value)}} 
                                className="form-control" 
                                placeholder='Password'/>
                            </div>
                            <div className='d-grid gap-2'>
                                <button className="btn btn-md btn-primary" type="submit" onClick={event => loginUser(event)}>Ingresar</button>
                                <button className="btn btn-md btn-success" onClick={registrarse}>Registrarse</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    export default Login;

