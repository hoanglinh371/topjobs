import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Logo from './Logo';
import Toggle from './Toggle';
import './HeaderBG.css';
import './Header.css';
import axiosClient from '../../api/axios.client';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState();

  const changeThemeHandler = () => {
    setTheme((prevActiveTheme) => {
      return prevActiveTheme === 'light' ? 'dark' : 'light';
    });
  };

  useEffect(() => {
    document.getElementById('root').dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const { _id } = jwtDecode(localStorage.getItem('token'));

      const fetchData = async () => {
        const data = await axiosClient.get(`/users/${_id}`);
        setUser(data.data.metadata.user);
      };

      fetchData();
    }
  }, []);

  return (
    <div>
      <div className='backSVGContainer'></div>
      <div className='header'>
        <Logo />
        <div>
          <Toggle activeTheme={theme} onChangeTheme={changeThemeHandler} />
          {user ? (
            <Link className='text-white' to='/me'>
              {user.name}
            </Link>
          ) : (
            <Link className='text-white' to='/auth/login'>
              Login / Resgister
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
