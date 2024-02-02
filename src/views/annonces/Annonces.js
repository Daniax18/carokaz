import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import annoncesData from './annoncesData'
import Filter from '../../components/forms/filter/Filter';
import ListeAnnonces from '../../components/listeAnnonces/ListeAnnonces';
import Footer from '../../components/footer/Footer';
import Loader from '../../components/loader/Loader';

function Annonces(){

    const { annonces, marques } = annoncesData;
    
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
                            <h1 className="font-weight-semi-bold text-uppercase mb-3">Liste des annonces</h1>
                            <div className="d-inline-flex">
                                <p className="m-0"><a href>Home</a></p>
                                <p className="m-0 px-2">-</p>
                                <p className="m-0">Annonces</p>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}

                    <div className="container-fluid pt-5">
                        <div className="row px-xl-5">
                            <div className="col-lg-3 col-md-12">
                                <Filter title = "Recherche par marque" data = {marques} />
                            </div>
                            <ListeAnnonces annonces = {annonces}  />
                        </div>
                    </div>
                    <Footer />
                    </>
            )}
        </div>
        
    )
}

export default Annonces