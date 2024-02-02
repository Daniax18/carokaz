import React from 'react';
import { Carousel } from 'primereact/carousel';
import MyCarroussel from './MyCarroussel';


function Annonce(props){

    const {annonce} = props
    return(
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <MyCarroussel annonce = {annonce} />
                <div className="col-lg-7 col-md-12 col-sm-12 pb-5">
                    <div className="d-flex flex-row justify-content-between">
                        <div className='font-weight-semi-bold'>
                            <h1>{annonce.voiture.nomModele}</h1>
                            <h3 className="text-muted mb-4">Ar {annonce.price} </h3>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <button className='btn btn-sm btn-primary mx-5' style={{height: '30%'}}>
                                Envoyer un message
                            </button>
                            <button className='btn btn-sm btn-outline-primary mx-5' style={{height: '30%'}}>
                                Appeler le vendeur
                            </button>
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
                                <td> BMW </td>
                            </tr>
                            <tr>
                                <td> Categorie </td>
                                <td> SUV </td>
                            </tr>
                            <tr>
                                <td> Kilometrage </td>
                                <td> 1500 km </td>
                            </tr>
                            <tr>
                                <td> Boite </td>
                                <td> Manuelle </td>
                            </tr>
                            <tr>
                                <td> Energie </td>
                                <td> Diesel </td>
                            </tr>
                            <tr>
                                <td> Porte </td>
                                <td> 3 </td>
                            </tr>
                            <tr>
                                <td> Consommation </td>
                                <td> 10 litres / 100 km </td>
                            </tr>
                            <tr>
                                <td> Place </td>
                                <td> 5 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Annonce