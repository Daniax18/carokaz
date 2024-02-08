import React from 'react';

function Footer(){
    
    return(
        <div className="container-fluid bg-secondary">
            <div className="row px-xl-5 pt-5 justify-content-between">
                <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5" style={{color: 'white' }}>
                    <h1 className="mb-4 display-5 font-weight-bold">
                        <i className="fa fa-car text-primary me-3" />
                        <span className = "font-weight-bold" style={{fontWeight: 'bolder', color: 'white'}}> CAR'OKAZ  </span>
                    </h1>
                    <p>Explorez notre sélection soigneusement choisie et profitez d'une expérience d'achat automobile sans tracas</p>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mx-3" />4826 White Avenue, Madagascar</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary mx-3" />carokaz@gmail.com</p>
                    <p className="mb-0"><i className="fa fa-phone-alt text-primary mx-3" />361-688-5824</p>
                </div>
                <div className="col-md-4 mb-5">
                    <h5 className="font-weight-bold text-dark mb-4">Envoyer nous votre message ici</h5>
                    <form action = "#">
                        <div className="form-group mb-3">
                            <input type="text" className="form-control border-0 py-4" placeholder="Nom" required="required" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control border-0 py-4" placeholder="Email" required="required" />
                        </div>
                        <div>
                            <button className="btn btn-primary btn-block border-0 py-3" type="submit">S'enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer