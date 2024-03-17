import React, { useState } from "react";
import './Registration.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import LandingNav from "../LandingPage/LandingNav";

export default function Registration() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/register', values);
            console.log(response.data); // Handle successful registration response
            // Redirect to login page or any other desired action
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error.response.data);
            // Handle error, display error messages, etc.
        }
    };

    return (
        <>
        {/* Nav bar common for register and login */}
            <LandingNav/>
            <div className="heading">
                <h1>Registration</h1>
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="item">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={values.firstName} onChange={handleChange} autoComplete="off" required />
                </div>
                <div className="item">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={values.lastName} onChange={handleChange} autoComplete="off" required />
                </div>
                <div className="item">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={values.email} onChange={handleChange} autoComplete="off" required />
                </div>
                <div className="item">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={values.phone} onChange={handleChange} autoComplete="off" required />
                </div>
                <div className="item">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={values.password} onChange={handleChange} autoComplete="off" required />
                </div>
                <div className="item">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} autoComplete="off" required />
                </div>
                    <input type="submit" value="Submit" id="login" />
                    <input type="button" value="Cancel" id="login" onClick={handleCancel} />
            </form>
        </>
    );
}
