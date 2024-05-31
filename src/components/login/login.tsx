/* eslint-disable prettier/prettier */
import React, { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { RootState } from '../../store/reducers';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const error = useSelector((state: RootState) => state.auth.error);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({username, password}));
    if (isAuthenticated) {
      navigate('/home');
    }
  };

  return (
    <div className='mx-auto flex flex-col items-center justify-center h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col p-8 shadow-sm border rounded-md w-1/4'>
            <h3>Sign in to account</h3>
            <p className='text-slate-500'>Enter your email & password to login</p><br />
            <div className='flex flex-col'>
                <label htmlFor="username" className='block uppercase  text-gray-700 mb-2'>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password" className='block uppercase text-gray-700 mb-2'>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                />
            </div>
            
            <div className='flex align-baseline justify-between mb-2'>
              <div className='flex'>
                <input type='checkbox' className='accent-slate-500' id='rememberPwd' />
                <label htmlFor="rememberPwd" className='ml-2'>Remember password</label>
              </div>   
              <a href='#' >Forgot password ?</a>   
            </div>
            <button type="submit" className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'>Sign in</button>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <div className='flex items-center justify-between'>
              <h4>Or Sign in with</h4><hr className='w-60 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
            </div>
            <div className='flex justify-center'>
              <p>Do not have account? </p><a href='#' className='ml-2' >Create Account</a>   
            </div>
        </form>
        
    </div>
  );
};

export default Login;
