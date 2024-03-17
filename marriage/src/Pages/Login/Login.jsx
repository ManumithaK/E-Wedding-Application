import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import LandingNav from '../LandingPage/LandingNav';

export default function Login() {
    const navigate = useNavigate();
    const [errors, setError] = useState({});
    const [values, setValues] = useState({
        Username: '',
        Password: ''
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleOnClick = async () => {
        try {
            const response = await axios.post('http://localhost:8081/login', values);
            console.log(response.data); // Handle successful login response
            if (values.Username === 'admin' && values.Password === 'admin') {
                navigate('/AdminDashboard');
            } else {
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Login error:', error.response.data);
            alert("Invalid Credentials");
            setError(error.response.data);
        }
    };


    return (
        <>
        <LandingNav/>
            <div className="login-main d-flex justify-content-center">
                <div className="header"><br></br>
                    <div>
                        <h1 className='main-heading'>Welcome to your Wedding Portal</h1>
                    </div>
                    <div>
                        <h3 className='sub-heading'>Plan your dream wedding with ease. Everything you need, all in one place</h3>
                    </div>
                </div>
                <div className="login-details">

                    <div className="d-flex flex-column g-1 px-2 login-inputs">
                        <div>Email Id</div>
                        <input type="text" name='Username' value={values.Username} onChange={handleChange} autoComplete="off" required />
                        {errors.Username && <div className="error-message">{errors.Username}</div>}
                    </div>
                    <div className="d-flex flex-column g-1 px-2 mb-3 login-inputs">
                        <div>Password</div>
                        <input type="password" name='Password' value={values.Password} onChange={handleChange} autoComplete="off" required />
                        {errors.Password && <div className="error-message">{errors.Password}</div>}
                    </div>
                    {errors.errorMessage && <div className="error-message">{errors.errorMessage}</div>}

                    <button onClick={handleOnClick}  id="login">Login</button>
                    <div>
                        Not a member? <Link to={"/register"}>Register</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
