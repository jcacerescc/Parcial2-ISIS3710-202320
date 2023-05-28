import React from 'react';

import './App.css';

import LoginForm from './login';
import BookManager from './BookManager';

import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const autenticate = () => {
    setLoggedIn(true);      
    console.log("Autenticado")
  };

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
  }, [isLoggedIn]);
  
  return (
    <div className="App">
      {!isLoggedIn ? (
        // para que funcione el login, se debe cambiar el componente BookManager por el componente LoginForm
        // se debe declarar props.onLogin en el componente LoginForm
        
        <BookManager />
      ) : (
        // no se debe devobe devolver al login
        <LoginForm onLogin={autenticate} /> 


      )}
    </div>
  );
}

export default App;
