import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';

import axiosClient from '../../api/axios.client';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

const UserInfo = () => {
  const [user, setUser] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      const { _id } = jwtDecode(localStorage.getItem('token'));

      setId(_id);

      const fetchData = async () => {
        const data = await axiosClient.get(`/users/${_id}`);
        setUser(data.data.metadata.user);

        setName(data.data.metadata.user.name);
        setEmail(data.data.metadata.user.email);
      };

      fetchData();
    }
  }, []);

  const handleUpdate = async () => {
    const data = await axiosClient.patch(`/users/${id}`, {
      name,
      email,
    });
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='flex mt-40 gap-10'>
        <div>
          <img src='https://picsum.photos/200' alt='user' />
          <h2>{name}</h2>
        </div>
        <div>
          <div>
            <h4>Name</h4>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <h4>Email</h4>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <button onClick={handleUpdate}>Update me</button>
          </div>

          <div>
            <Link to='/auth/update-password'>Update Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
