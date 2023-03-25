import React, { useState } from 'react';
import Input from '../shared/Input';
import Section from './Section';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import './auth.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    const data = await axios.post(
      'https://topjob-api.onrender.com/api/v1/auth/login',
      {
        email,
        password,
      },
    );
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
          <h1 className='text-2xl font-bold my-5 text-white'>Login Account</h1>
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
          Forget Password?{' '}
          <Link className='link' to='/auth/forgot-password'>
            Click Here
          </Link>
        </p>
        <p className='group'>
          Don't Have An Account{' '}
          <Link className='link' to='/auth/registration'>
            Click Here
          </Link>
        </p>
      </div>
    </Section>
  );
};

export default Login;
