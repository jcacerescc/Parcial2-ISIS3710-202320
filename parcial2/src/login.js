import React, { useState } from 'react';
import './login.css';
import descargar from './descargar.png';
function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {

    //comprobar que username sea formato email 
    if (!username.includes('@')) {
        alert('El nombre de usuario debe ser un correo electrónico');
        return;
    }
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return;
    }

    //consultar a la api, api devuelve un rol
    fetch('http://localhost:3000/login', {  

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(
            data => {
                if (data.role === 'Administrador') {
                    props.history.push('/books');
                }
                else{
                    props.history.push('/books');
                }
                
        })
        .catch(error => console.log(error));

        //

}

 
  return (
    // put  the image in  the left side
    <>
          <img src={descargar} 
                  style={{
                    // ledt
                  position: 'absolute', left: '4.5%', top: '20%',
                  transform: 'translate(-50%, -50%)',

              }} />
              <form className="login-form">

              <div className="form-group">
                  <label htmlFor="username">Correo electrónico o teléfono</label>
                  <input type="text" id="username" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
              </div>

              <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" id="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>


              <button type="submit" className="btn btn-primary btn-block " onClick={handleLogin}>Iniciar sesión </button>
              <div className="text-left">
                  <a href="#">¿Ha olvidado su contrasenia?</a>
              </div>

          </form></>
  );
}

export default LoginForm;
