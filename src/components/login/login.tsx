/* eslint-disable prettier/prettier */
import React, { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { RootState } from '../../store/reducers';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch<any>();
  const error = useSelector((state: RootState) => state.auth.error);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({username, password}));
  };

  return (
    <div className='container mx-auto flex items-center justify-center h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='flex flex-col'>
                <label htmlFor="username" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                />
            </div>
            <button type="submit" className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'>Login</button>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </form>
    </div>
  );
};

export default Login;
