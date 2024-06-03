/* eslint-disable prettier/prettier */
import React, { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { RootState } from '../../store/reducers';
import { useNavigate } from 'react-router-dom';
import { Google, Facebook, Instagram } from '../../assets/icons/socialIcons';

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
        <form onSubmit={handleSubmit} className='flex flex-col p-8 shadow-xl border rounded-md w-96'>
            <h3 className='mb-1'>Sign in to account</h3>
            <p className='text-slate-500 mb-4'>Enter your email & password to login</p><br />
            <div className='flex flex-col mb-3'>
                <label htmlFor="username" className='block uppercase  text-gray-700 mb-2'>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="form-control" id="grid-first-name"
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="password" className='block uppercase text-gray-700 mb-2'>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="form-control" id="grid-first-name"
                />
            </div>
            
            <div className='flex items-center justify-between mb-5'>
              <div className='flex'>
                <input type='checkbox' className='accent-slate-500 my-auto' id='rememberPwd' />
                <label htmlFor="rememberPwd" className='ml-2'>Remember password</label>
              </div>   
              <a href='#' >Forgot password ?</a>   
            </div>
            <button type="submit" className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'>Sign in</button>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <div className='flex flex-col items-center justify-between w-full mb-4'>
              <div className='flex items-center justify-between w-full'>
                <h6>Or Sign in with</h6><hr className='w-56 h-px my-7 bg-gray-200 border-0 dark:bg-gray-700' />
              </div>
              <div className='flex flex-row justify-around w-full'>
                <a href='#' className='flex items-center btn btn-primary'>
                  <Google height={30} width={30} />
                  <p className='ml-1'>Google</p>
                </a>
                <a href='#' className='flex items-center btn btn-primary mx-2'>
                  <Facebook height={30} width={30} />
                  <p className='ml-1'>Facebook</p>
                </a>
                <a href='#' className='flex items-center btn btn-primary'>
                  <Instagram height={30} width={30} />
                  <p className='ml-1'>Facebook</p>
                </a>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <p className='text-gray-600'>Do not have account? </p><a href='#' className='ml-2' >Create Account</a>   
            </div>
        </form>
        
    </div>
  );
};

export default Login;
