import React from 'react';

import './App.css';

import LoginForm from './login';
import BookManager from './BookManager';

import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [rol, setRol] = useState('');

  const authenticate = (rol) => {
    setLoggedIn(true);
    setRol(rol);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLogin={authenticate} />
      ) : (
        <BookManager rol={rol} />
      )}
    </div>
  );
}

export default App;