import {React, useEffect, useState } from 'react';
// import './css/aos.css';
import './css/bootstrap.min.css';
import './css/custom.css';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader/Loader';


const Home = () => {

    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setShowLoader(false);
        }, 500);

        // EN ATTENTE DATA ETO
        return () => clearTimeout(loaderTimeout);
        }, []
    );

  return (
    <div>
     {showLoader ? (
        // Loader component or message while loading
        <Loader />
      ) : (
        <>
            <div style={{fontFamily: 'sans-serif'}}>
                <div className="jumbotron jumbotron-fluid" id="banner" style={{ backgroundImage: "url(/img/banner.png)" }}>
                    <div className="container text-center text-md-left">
                        <header>
                        <div className="row justify-content-between">
                            <div className="col-2">
                                <img src="img/logo.png" alt="logo" />
                            </div>

                        </div>
                        </header>
                            <h1 className="display-3 text-white font-weight-bold my-5">
                            Une nouvelle façon<br />
                            d'acheter votre voiture.
                        </h1>
                        <p className="lead text-white my-4"> 
                        Bienvenue sur CAR'OKAZ, votre destination en ligne pour des véhicules d'exception.
                        <br /> Explorez notre sélection soigneusement choisie et profitez d'une expérience d'achat automobile sans tracas.
                        </p>
                        <Link to="/Annonces" className='btn btn-primary'> Voir les annonces </Link>
                    </div>
                </div>

                <div className="container my-5 py-2">
                    <h2 className="text-center font-weight-bold my-5">
                        Les services que nous vous offrons
                    </h2>
                    <div className="row">
                        <div className="col-md-4 text-center" >
                            <img src={require('./img/voiture.png')} alt="logo" className="mx-auto"/>
                            <h4> Messagerie </h4>
                            <p>Parler en toute confiance avec votre acheteur/vendeur</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={require('./img/smart-protect-2.jpg')} alt="logo" className="mx-auto"/>
                            <h4> Annonces </h4>
                            <p>Insertion rapide de vos annonces avec quelques clics </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={require('./img/search.png')} alt="logo" className="mx-auto"/>
                            <h4> Recherche multicritere </h4>
                            <p>Chercher rapidement les voitures en fonction de vos criteres</p>
                        </div>
                    </div>
                </div>


                <div className="jumbotron jumbotron-fluid feature" id="feature-first">
                    <div className="container my-5">
                        <div className="row justify-content-between text-center text-md-left">
                            <div className="col-md-6">
                                <h2 className="font-weight-bold">Vos annonces favoris</h2>
                                <p className="my-4">Explorez vos annonces préférées, 
                                <br />personnalisées selon vos préférences et vos intérêts.</p>
                            
                            </div>
                            <div className="col-md-6 align-self-center">
                                <img src={require('./img/v.webp')} alt="logo" className="mx-auto"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="jumbotron jumbotron-fluid feature text-right" id="feature-last">
                    <div className="container">
                        <div className="row justify-content-between text-center text-md-left">
                            <div className="col-md-6 flex-md-last">
                                <h2 className="font-weight-bold">Sélection de véhicules</h2>
                                <p className="my-4">
                                Une diversité de véhicules, garantissant des solutions adaptées à chaque client
                                <br /> avec un service professionnel à chaque étape de votre vente ou achat.
                                </p>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <img src={require('./img/R.jpg')} alt="logo" className="mx-auto"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="jumbotron jumbotron-fluid" id="contact" style={{ backgroundImage: "url(/img/contact-bk.jpg)" }}>
                    <div className="container my-5">
                        <div className="row justify-content-between">
                            <div className="col-md-6 text-white">
                                <h2 className="font-weight-bold">Contact Us</h2>
                                <p className="my-4">
                                Nous sommes là pour vous aider ! 
                                <br /> Contactez-nous dès aujourd'hui pour obtenir du soutien ou des informations supplémentaires.
                                </p>
                                <ul className="list-unstyled">
                                    <li>Email : carokaz@gmail.com</li>
                                    <li>Phone : 361-688-5824</li>
                                    <li>Address : 4826 White Avenue, Madagascar </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Votre nom</label>
                                        <input type="name" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Email">Your prenom</label>
                                        <input type="email" className="form-control" id="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" rows={3} defaultValue={""} />
                                </div>
                                <button className="btn font-weight-bold atlas-cta atlas-cta-wide cta-green my-3">Envoyer</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jumbotron jumbotron-fluid" id="copyright">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
                                Copyright © Promotion 15
                            </div>
                            <div className="col-md-6 align-self-center text-center text-md-right my-2" id="social-media">
                            
                                <i className="fa fa-facebook" aria-hidden="true" />
                            
                            
                                <i className="fa fa-twitter" aria-hidden="true" />
                            
                            
                                <i className="fa fa-medium" aria-hidden="true" />
                            
                            
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}
    </div>  
  )
}

export default Home;
