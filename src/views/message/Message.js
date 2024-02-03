import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import messageData from './messageData'
import Footer from '../../components/footer/Footer';
import Loader from '../../components/loader/Loader';
import Inbox from '../../components/message/Inbox';
import Dialogue from '../../components/message/Dialogue';
import './message.css';

function Message(){

    const { inboxes } = messageData;
    console.log(inboxes)
    
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
                            <h1 className="font-weight-semi-bold text-uppercase mb-3">Messagerie</h1>
                            <div className="d-inline-flex">
                                <p className="m-0"><a href>Home</a></p>
                                <p className="m-0 px-2">-</p>
                                <p className="m-0">Boite de reception</p>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}

                    <div className="row mb-5 col-10 mx-auto">

                        <div className="col-lg-5 col-xl-3 border-right">
                            <Inbox messages = {inboxes}  />
                        </div>
                        <div className="col-lg-7 col-xl-9">
                            <Dialogue />
                        </div>

                    </div>
                 
                    <Footer />
                    </>
                )
            }
        </div>
        
    )
}

export default Message