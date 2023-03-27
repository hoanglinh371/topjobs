import React, { useState } from 'react';
import Section from './Section';
import axiosClient from '../../api/axios.client';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import './auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    const data = await axiosClient.post('/auth/registration', {
      name,
      email,
      password,
      confirmPassword,
    });

    if (data.data.status === 'success') {
      localStorage.setItem('token', data.data.token);
      alert('Register successful!');
      navigate('/');
    }
  };

  const handleChangeUserName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPw = (e) => {
    setconfirmPassword(e.target.value);
  };

  return (
    <Section>
      <div>
        <h1 className='text-4xl font-bold my-5 text-white'>New Account</h1>
        <div className='pt-1'>
          <Input
            onChange={handleChangeUserName}
            type='text'
            placeholder='UserName'
            isFormField
          />
          <Input
            onChange={handleChangeEmail}
            type='email'
            placeholder='Email'
            isFormField
          />
          <Input
            onChange={handleChangePassword}
            type='password'
            isFormField
            placeholder='Password'
          />
          <Input
            onChange={handleChangeConfirmPw}
            type='password'
            placeholder='ComfirmPassword'
            isFormField
          />
        </div>
        <Button onClick={handleClick}>Sign Up</Button>
        <p className='group'>
          Already have an account?{' '}
          <Link className='link' to='/auth/login'>
            Login
          </Link>
        </p>
      </div>
    </Section>
  );
};

export default Register;
