import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Navbar () {

    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.clear();
    
        window.location.href = '/';
      };
    return (
       <div>
            <div className="container-fluid bg-light p-0 mb-2">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center border-start border-end px-3">
                            <small className="fa fa-phone-alt me-2" />
                            <small>+012 345 6789</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center border-end px-3">
                            <small className="far fa-envelope-open me-2" />
                            <small>carokaz@gmail.com</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center border-end px-3">
                            <small className="far fa-clock me-2" />
                            <small>Mon - Fri : 09 AM - 09 PM</small>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}

            {/* Navbar Start */}
            <div className="row align-items-center py-3 px-xl-5 justify-content-between">
                <div className="col-lg-2 col-xs-12 col-md-12">
                    
                    <Link to="/" className="navbar-brand d-flex align-items-center"> 
                        <h1 className="m-0">
                            <i className="fa fa-car text-primary me-3" />CAR'OKAZ
                        </h1>
                    </Link>
                </div>
                <div className="col-lg-4 col-xs-12 col-md-12 text-left">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for cars..." />
                            <div className="input-group-append">
                                <span className="btn btn-outline bg-transparent text-primary">
                                    <i className="fa fa-search" />
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                {!token ? (
                    <div className="col-lg-4 col-xs-12 d-flex flex-row">
                        <Link 
                            to="/Login" 
                            className="nav-item nav-link"
                        >
                        Se connecter
                        </Link>
                    
                    </div>
                ) : (
                    <div className="col-lg-5 col-xs-12 d-flex flex-row">
                        <Link 
                             to={"/Messages/${null}"}
                            className="nav-item nav-link"
                        >
                            Message
                        </Link>
                        <Link 
                            to="/MesAnnonces" 
                            className="nav-item nav-link"
                        >
                            Mes annonces
                        </Link>
                        <Link 
                            to="/Favoris" 
                            className="nav-item nav-link"
                        >
                            Mes favoris
                        </Link>
                        <Link 
                            to="#" 
                            className="nav-item nav-link"
                            onClick={handleLogout}
                        >
                            Deconnexion
                        </Link>
                    </div>
                )}
            </div>

            {/* Navbar End */}
        </div>

    )
}
export default React.memo(Navbar)