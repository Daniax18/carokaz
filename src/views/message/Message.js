import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import Loader from '../../components/loader/Loader';
import Inbox from '../../components/message/Inbox';
import Dialogue from '../../components/message/Dialogue';
import './message.css';
import { useParams } from 'react-router-dom';
import { getMyInbox } from './utilMessage';
import { connected } from '../../my_util';

function Message(){
    const { idUtilisateur } = useParams();
    const [idOther, setIdOther] = useState(idUtilisateur);
    // console.log('otehr here is ' + idOther)
    const [loading, setLoading] = useState(true);
    const [inboxes, setInboxes]=useState([]);
    const [user, setUser]=useState([]);
    const token = localStorage.getItem('token');

    const handleInboxMessageClick = (clickedId) => {
        // Update the idOther state when a message is clicked
        setIdOther(clickedId);
      };
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          // const user = await connected(token)
  
          setLoading(true);
          const fetchedUser = await connected(token);
          setUser(fetchedUser)
          let url = process.env.REACT_APP_API_URL + 'inbox/' + fetchedUser.idUtilisateur;
          let response = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
  
          if (response.ok) {
            let data = await response.json();
            setInboxes(await getMyInbox(fetchedUser.idUtilisateur, data.data, token))

          } else {
            console.error('Erreur de la requête:', response);
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
  }, [token]);

      // console.log('Other id is ' + idOther)
   
    return(
        <div>
         {loading ? (
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
                                <p className="m-0">Home</p>
                                <p className="m-0 px-2">-</p>
                                <p className="m-0">Boite de reception</p>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}

                    <div className="row mb-5 col-10 mx-auto">

                        <div className="col-lg-5 col-xl-3 border-right">
                            <Inbox messages = {inboxes} onMessageClick={handleInboxMessageClick}  />
                        </div>
                        <div className="col-lg-7 col-xl-9">
                            <Dialogue idUtilisateur1 = {user.idUtilisateur} idUtilisateur2 = {idOther} inboxes = {inboxes} />
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