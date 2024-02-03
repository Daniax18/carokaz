import React from 'react';
import MyCarroussel from './MyCarroussel';


function Annonce(props){

    const {annonce} = props
    const img = [];
    annonce.photo.forEach(temp => {      
        img.push(temp.photo);
      });
    //   console.log(img)
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
                                <td> {annonce.voiture.energie.nomPorte} </td>
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

                    <div className="d-flex flex-row justify-content-end mt-2 mb-2">
                            <button className='btn btn-primary'>
                                Envoyer un message
                            </button>
                            <button className='btn btn-outline-primary mx-5'>
                                Appeler le vendeur
                            </button>
                        </div> 
                </div>
            </div>
        </div>
    )
}

export default Annonce