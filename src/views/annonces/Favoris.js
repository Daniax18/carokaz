import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import Loader from '../../components/loader/Loader';
import ListFavoris from '../../components/listeAnnonces/ListeFavoris';
import { connected } from '../../my_util';

function Favoris(){

    const [loading, setLoading] = useState(true);
    const [data, setData]=useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const fetchedUser = await connected(token);
            // setUser(fetchedUser);
            let url = process.env.REACT_APP_API_URL + 'favoris/favoris/' + fetchedUser.idUtilisateur;
            console.log(url)
            let response = await fetch(url, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            });
    
            if (response.ok) {
              let data = await response.json();
              setData(data.data);
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
                            <h1 className="font-weight-semi-bold text-uppercase mb-3">Liste de mes favoris</h1>
                            <div className="d-inline-flex">
                                <p className="m-0">Home</p>
                                <p className="m-0 px-2">-</p>
                                <p className="m-0">Mes Favoris</p>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}

                    <div className="col-lg-10 col-md-10 mx-auto">
                        <ListFavoris favoris = {data}  />
                    </div>
                    <Footer />
                    </>
                )
            }
        </div>
        
    )
}

export default Favoris