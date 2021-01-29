import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ForgotPassword from './pages/forgot-password/forgot-password.component';


function App() {
  return (
    <Router>
        <ForgotPassword />
    </Router>
  );
}

export default App;
