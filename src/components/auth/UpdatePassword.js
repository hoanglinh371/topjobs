import React from 'react';

import Section from './Section';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import axiosClient from '../../api/axios.client';

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('');

  const handleClick = async () => {
    const data = await axiosClient.patch('/auth/update-password', {
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
  };

  return (
    <Section>
      <div>
        <h1 className='text-4xl font-bold my-5 text-white'>Update Password</h1>
        <div className='pt-1'>
          <Input
            onChange={(e) => setCurrentPassword(e.target.value)}
            type='password'
            placeholder='current password'
            isFormField
          />
          <Input
            onChange={(e) => setNewPassword(e.target.value)}
            type='password'
            isFormField
            placeholder='Password'
          />
          <Input
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            type='password'
            placeholder='ComfirmPassword'
            isFormField
          />
        </div>
        <Button onClick={handleClick}>Update password</Button>
      </div>
    </Section>
  );
};

export default UpdatePassword;
