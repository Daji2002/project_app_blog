import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className='registerForm'>
            <label>Username</label>
            <input type="text" className='registerInput' placeholder='Enter your username...' />
            <label>E-mail</label>
            <input type="email" className='registerInput' placeholder='Enter your email...' />
            <label>Password</label>
            <input type="password" className='registerInput' placeholder='Enter your password...' />
            <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'><Link className='link' to='/login'>Login</Link></button>
    </div>
  )
}

export default Register