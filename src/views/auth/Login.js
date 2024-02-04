import React, { useState } from 'react';
import './login.css'; // Import your CSS styles

const Login = () => {

    const container = document.getElementById('container');

    const handleChangeSignUp = () => {
        container.classList.add("right-panel-active");
    };

    const handleChangeSignIn = () => {
        container.classList.remove("right-panel-active");
    };

    const login = () => {
        const userData = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqZWFuQGdtYWlsLmNvbSIsImlhdCI6MTcwNjQyOTE2OSwiZXhwIjoxNzA5MDIxMTY5fQ.GxvVooqHp2HzPjfJv0pmuBt552NJGuINCBV7wIcvEUM'


        localStorage.setItem('token', userData);
        window.location.href = "/";
    }


  return (
    <div className='log' style={{ backgroundImage: "url(/img/banniere.jpg)", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Creer un compte</h1>
            
            <input type="text" placeholder="Nom..." />
            <input type="email" placeholder="Email..." />
            <input type="password" placeholder="Mot de passe" />
            <button> Enregistrer </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Se connecter</h1>
           
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button onClick={login}>Login</button>
          </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Bienvenue chez Car'Okaz!</h1>
                    <p>Votre site de vente voitures d'occasion dans tout Madagascar</p>
                    <button className="ghost" id="signIn" onClick={handleChangeSignIn}>J'ai un compte</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Bienvenue chez Car'Okaz!</h1>
                    <p>Votre site de vente voitures d'occasion dans tout Madagascar</p>
                    <button className="ghost" id="signUp" onClick={handleChangeSignUp}>Je n'ai pas de compte</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;