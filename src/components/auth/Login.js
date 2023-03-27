import React, { useState } from 'react';
import axiosClient from '../../api/axios.client';
import { useNavigate } from 'react-router-dom';

import Input from '../shared/Input';
import Section from './Section';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import './auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    const data = await axiosClient.post('/auth/login', {
      email,
      password,
    });

    if (data.data.status === 'success') {
      localStorage.setItem('token', data.data.token);
      alert('Login successful!');
      navigate('/');
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePw = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Section>
      <div>
        <div>
          <h1 className='text-6xl font-bold my-5 text-white'>Login Account</h1>
          <div className='pt-1'>
            <Input
              onChange={handleChangeEmail}
              type='email'
              placeholder='Email'
              isFormField
            />
            <Input
              onChange={handleChangePw}
              type='password'
              placeholder='Password'
              isFormField
            />
          </div>
          <Button onClick={handleClick}>SIGN IN</Button>
        </div>
        <p className='group'>
          Forget Password?
          <Link className='link' to='/auth/forgot-password'>
            Click Here
          </Link>
        </p>
        <p className='group'>
          Don't Have An Account
          <Link className='link' to='/auth/registration'>
            Click Here
          </Link>
        </p>
      </div>
    </Section>
  );
};

export default Login;
