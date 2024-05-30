import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadUser } from './store/actions/authActions';
import PrivateRoute from './components/routes/PrivateRoute';
import Login from './components/login/login';
import Dashboard from './components/home/dashboard';
import './index.css';

const App: React.FC = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/protected"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;
