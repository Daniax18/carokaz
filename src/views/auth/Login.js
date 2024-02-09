import React, { useState } from 'react';
import './login.css'; // Import your CSS styles

const Login = () => {
    const [email, setEmail] = useState("roger@gmail.com");
    const [password, setPassword] = useState("roger");

    const container = document.getElementById('container');

    const handleChangeSignUp = () => {
        container.classList.add("right-panel-active");
    };

    const handleChangeSignIn = () => {
        container.classList.remove("right-panel-active");
    };

    const login = async (e) => {
      try {
        e.preventDefault();
        const url = process.env.REACT_APP_API_URL + "auth/signin";
        const userData = {
          email: email,
          password: password,
        };
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          localStorage.setItem('token', data.token);
          window.location.href = "/";
        } else {
          console.error('Erreur lors de la requête :', response.status);
          showToast('Identifiant ou mot de passe incorrect.');
        }
      } catch (error) {
        console.error('Erreur inattendue :', error);
        showToast('Identifiant ou mot de passe incorrect.\n Vérifiez et réessayez.');
      }
    }
    const showToast = async (message) => {
      const toaster = document.getElementById('toaster');
    
      const toast = document.createElement('div');
      toast.textContent = message;
      toast.style.color = 'red';
      toast.style.padding = '5px';
      toast.style.margin = '10px';
    
      toaster.appendChild(toast);
      console.log("huhu");
      setTimeout(() => {
        toaster.removeChild(toast);
      }, 3000);
    };
    


    return (
      <div className='log' style={{ backgroundImage: "url(/img/banniere.jpg)", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form>
              <h1>Creer un compte</h1>
              <input type="text" placeholder="Nom..." />
              <input type="email" placeholder="Email..." />
              <input type="password" placeholder="Mot de passe" />
              <button> Enregistrer </button>
            </form>
          </div>
    
          <div className="form-container sign-in-container">
              <div id="toaster" className="toast-container"></div>
            <form onSubmit={login}>
              <h1>Se connecter</h1>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">Login</button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
};

export default Login;