import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import annoncesData from './annoncesData'
import Footer from '../../components/footer/Footer';
import Annonce from '../../components/listeAnnonces/Annonce';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import MyAnnonce from '../../components/listeAnnonces/MyAnnonce';

function DetailAnnonce(){ 
    const { id_annonce } = useParams();
    const annonce = annoncesData.annonces[id_annonce];


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
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Detail d'une annonce</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><a href>Home</a></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Detail</p>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            {/* <Annonce annonce = {annonce} /> */}
            <MyAnnonce annonce = {annonce} />
            <Footer />
            </>
        )}
        </div>
    )
}

export default DetailAnnonce