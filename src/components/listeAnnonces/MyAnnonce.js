import React from 'react';
import MyCarroussel from './MyCarroussel';


function MyAnnonce(props){

    const {annonce} = props
    return(
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col-lg-5 pb-5">
                    <MyCarroussel annonce = {annonce} />
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 pb-5">
                    <div className="d-flex flex-row flex-sm-column justify-content-between">
                        <div className='font-weight-semi-bold'>
                            <h1>{annonce.voiture.nomModele}</h1>
                            <h3 className="text-muted mb-4">Ar {annonce.price} </h3>
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

                    <div className="d-flex flex-row justify-content-end mt-2 mb-2">
                            <button className='btn btn-primary'>
                                Modifier
                            </button>
                            <button className='btn btn-outline-danger mx-5'>
                                Supprimer
                            </button>
                        </div> 
                </div>
            </div>
        </div>
    )
}

export default MyAnnonce