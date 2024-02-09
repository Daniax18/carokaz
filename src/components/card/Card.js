import React,{useEffect , useState} from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    const { annonce } = props;
    const token = localStorage.getItem('token');
    const [user, setUser] = useState([]);
    const [fav, setFav] = useState(false);
    const [idFav, setIdFav] = useState("");

    const ajoutFavoris = async () => {
        try {
            const url = process.env.REACT_APP_API_URL + "favoris";
            const details = {
            utilisateur: {
                idUtilisateur: user.idUtilisateur
            },
            annonce: {
                idAnnonce: annonce.idAnnonce
            }
          };
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        });
        console.log(JSON.stringify(details))
          if (response.ok) {
            const data = await response.json();
          } else {
            console.error('Erreur lors de la requête :', response.status);
          }
        } catch (error) {
          console.error('Erreur inattendue :', error);
        }
      }

      const deleteFavoris = async () => {
        try {
            const url = process.env.REACT_APP_API_URL + "favoris/" + idFav;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (response.ok) {
                const data = await response.json();
                setFav(false);
            } else {
                console.error('Erreur lors de la requête :', response.status);
            }
        } catch (error) {
            console.error('Erreur inattendue :', error);
        }
    };

      const checkFavoris = async () => {
        try {
          const url = process.env.REACT_APP_API_URL + "favoris/favoris/"+user.idUtilisateur;
    
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data.data);
            data.data.forEach(item => {
                console.log(item.annonce.idAnnonce+" "+annonce.idAnnonce)
                if (item.annonce.idAnnonce === annonce.idAnnonce) {
                    console.log("huhu");
                    setFav(true);
                    setIdFav(item.idFavoris);
                }
            });
            
          } else {
            console.error('Erreur lors de la requête :', response.status);
          }
        } catch (error) {
          console.error('Erreur inattendue :', error);
        }
      };


      const connected = async () => {
        try {
          const url = process.env.REACT_APP_API_URL + "utilisateurs/connecte";
    
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            setUser(data.data);
            checkFavoris();
            
          } else {
            console.error('Erreur lors de la requête :', response.status);
          }
        } catch (error) {
          console.error('Erreur inattendue :', error);
        }
      };

      useEffect(() => {
        const fetchData = async () => {
            await connected();
            console.log("user : " + JSON.stringify(user));
        };

        fetchData();
    }, [user]);
    

    return(
        <div className="col-lg-4 col-md-6 col-sm-12 shadow mb-4" style={{padding: '2% 2% 2% 2%'}}>
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    
                    <img
                        src={annonce.photo ? annonce.photo[0]?.photo : ''}
                        alt={annonce.voiture.modele.nomModele}
                        className="img-fluid w-100"
                    />                         
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{annonce.voiture.modele.nomModele}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>Ariary {annonce.prix}</h6>
                    </div>
                    <div className="text-end text-sm text-muted mx-3">
                        {annonce.dateAnnonce}
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to={`/DetailAnnonce/${annonce.idAnnonce}`} className="btn btn-sm text-dark p-0">
                        <i className="fas fa-eye text-primary mr-1" />
                        Voir detail
                    </Link>
                    <div className="btn btn-sm text-dark p-0">
                        {fav ? (
                            <i className="fas fa-heart text-primary mr-1" onClick={deleteFavoris}></i>
                        ) : (
                            <i className="far fa-heart text-primary mr-1" onClick={ajoutFavoris}></i>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card