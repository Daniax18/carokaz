import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar () {

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
            <div className="d-flex flex-row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 col-xs-12 col-md-12">
                    <a href="index.html" className="navbar-brand d-flex align-items-center">
                        <h1 className="m-0">
                            <i className="fa fa-car text-primary me-3" />CAR'OKAZ
                        </h1>
                    </a>
                </div>
                <div className="col-lg-6 col-xs-12 col-md-12 text-left">
                    <form action>
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
                <div className="d-flex flex-row">
                    <a href className="nav-item nav-link">Login</a>
                    <a href className="nav-item nav-link">Register</a>
                </div>

            </div>

            {/* Navbar End */}
        </div>

    )
}
export default React.memo(Navbar)