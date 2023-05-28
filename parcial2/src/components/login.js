import React, { useState } from 'react';
import './login.css';
import descargar from '../descargar.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
function LoginForm(props) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    // Check that the email is in email format
    if (!email.includes('@')) {
      alert('El nombre de usuario debe ser un correo electrónico');
      console.log('El nombre de usuario debe ser un correo electrónico');
      return;
    }
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    const URL = 'http://localhost:8080/login';
    const data = {
      email: email,
      password: password,
    };
    axios.post(URL, data).then((response) => {
      console.log(response.data);
      
        props.onLogin();

    });
  }
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={descargar} alt="Imagen" />
      </div>
      <div className="form-container">
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="text"
              id="email"
              className="form-control"
              value={email}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
          <div className="text-left">
            <a href="#">¿Ha olvidado su contraseña?</a>
          </div>
        </form>
      </div>
    </div>
  );
}



export default LoginForm;
