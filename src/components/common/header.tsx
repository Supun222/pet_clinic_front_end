/* eslint-disable prettier/prettier */
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { AppDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';



const MainHeader = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return <div>
    MainHeader
    <button type='button' className='ml-2' onClick={handleLogout} >Logout</button>
  </div>;
}


export default MainHeader;
