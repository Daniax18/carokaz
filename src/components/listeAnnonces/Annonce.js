import React, { useState } from 'react';
import MyCarroussel from './MyCarroussel';
import { Dialog } from 'primereact/dialog';
import { Link } from 'react-router-dom';


function Annonce(props){

    const {annonce} = props
    const img = [];
    annonce.photo.forEach(temp => {      
        img.push(temp.photo);
      });

    const token = localStorage.getItem('token');
    //   console.log(annonce)
    const [visible, setVisible] = useState(false);
    return(
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col-lg-5 pb-5">
                    <MyCarroussel imgArray = {img} />
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 pb-5">
                    <div className="d-flex flex-row flex-sm-column justify-content-between">
                        <div className='font-weight-semi-bold'>
                            <h1>{annonce.voiture.modele.nomModele}</h1>
                            <h3 className="text-muted mb-4">Ar {annonce.prix} </h3>
                        </div>
                       
                    </div>
                    
                    <p className="mb-4">{annonce.description}</p>
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th> Detail </th>
                                <th> Valeur </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Marque </td>
                                <td> {annonce.voiture.marque.nomMarque} </td>
                            </tr>
                            <tr>
                                <td> Categorie </td>
                                <td> {annonce.voiture.categorie.nomCategorie} </td>
                            </tr>
                            <tr>
                                <td> Kilometrage </td>
                                <td>  {annonce.voiture.kilometrage} km </td>
                            </tr>
                            <tr>
                                <td> Boite </td>
                                <td> {annonce.voiture.boite.nomBoite} </td>
                            </tr>
                            <tr>
                                <td> Energie </td>
                                <td> {annonce.voiture.energie.nomEnergie} </td>
                            </tr>
                            <tr>
                                <td> Porte </td>
                                <td> {annonce.voiture.porte.nomPorte} </td>
                            </tr>
                            <tr>
                                <td> Consommation </td>
                                <td> {annonce.voiture.consommation} litres / 100 km </td>
                            </tr>
                            <tr>
                                <td> Place </td>
                                <td> {annonce.voiture.place.nomPlace} </td>
                            </tr>
                        </tbody>
                    </table>

                    {token ? <div className="d-flex flex-row justify-content-end mt-2 mb-2">
                        <Link
                            to={`/Messages/${annonce.utilisateur.idUtilisateur}`}
                        >
                            <button className='btn btn-primary'>
                                Envoyer un message
                            </button>
                        </Link>
                        
                        <button 
                            label="Show" 
                            className='btn btn-outline-primary ml-2' 
                            onClick={() => setVisible(true)}> 
                            Voir vendeur 
                        </button>
                        <Dialog 
                            visible={visible} 
                            style={{ width: '50vw', backgroundColor : 'white' }} 
                            className='p-3 shadow-lg rounded'
                            onHide={() => setVisible(false)} 
                        >
                            <div>
                                <h1 className='text-center'> Detail du vendeur </h1>
                            </div>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <th> Detail </th>
                                        <th> Information </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Vendeur </td>
                                        <td> {annonce.utilisateur.prenom + ' ' + annonce.utilisateur.nom} </td>
                                    </tr>
                                    <tr>
                                        <td> Email </td>
                                        <td> {annonce.utilisateur.username} </td>
                                    </tr>
                                    <tr>
                                        <td> Contact </td>
                                        <td>  {annonce.utilisateur.contact} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Dialog>
                    </div> :  
                    
                        <Link
                            to={`/Login`}
                        >
                            <button className='btn btn-primary'>
                                Se connecter pour voir vendeur
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Annonce