import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import annoncesData from './annoncesData'
import ListeAnnonces from '../../components/listeAnnonces/ListeAnnonces';
import Footer from '../../components/footer/Footer';
import Loader from '../../components/loader/Loader';

function Favoris(){

    const { annonces } = annoncesData;
    console.log(annonces)
    
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        // EN ATTENTE DATA ETO
        return () => clearTimeout(loaderTimeout);
        }, []
    );

    
    return(
        <div>
         {showLoader ? (
                // Loader component or message while loading
                <Loader />
            ) : (
                <>
                    <Navbar />
                    {/* Page Header Start */}
                    <div className="container-fluid mb-5" style={{ backgroundImage: "url(/img/banniere.jpg)" }}>
                        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 300, color: 'white'}}>
                            <h1 className="font-weight-semi-bold text-uppercase mb-3">Liste de mes favoris</h1>
                            <div className="d-inline-flex">
                                <p className="m-0"><a href>Home</a></p>
                                <p className="m-0 px-2">-</p>
                                <p className="m-0">Mes Favoris</p>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}

                    <div className="col-lg-10 col-md-10 mx-auto">
                        <ListeAnnonces annonces = {annonces}  />
                    </div>
                    <Footer />
                    </>
                )
            }
        </div>
        
    )
}

export default Favoris