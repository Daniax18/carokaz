import React from 'react';
import { Link } from 'react-router-dom';

function MyCard(props){

    const {annonce} = props
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 shadow mb-4" style={{padding: '2% 2% 2% 2%'}}>
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    
                    <img
                        src={annonce.photo ? annonce.photo[0].photo : ''}
                        alt={annonce.voiture.modele.nomModele}
                        className="img-fluid w-100"
                    />                         
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{annonce.voiture.modele.nomModele}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>Ar {annonce.prix}</h6>
                    </div>
                    <div className="text-end text-sm text-muted mx-3">
                        {annonce.dateAnnonce}
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to={`/MyDetailAnnonce/${annonce.idAnnonce}`} className="btn btn-sm text-dark p-0">
                        <i className="fas fa-eye text-primary mr-1" />
                        Voir detail
                    </Link>
                    <div className="btn btn-sm text-dark p-0">
                        Vendue
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCard