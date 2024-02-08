import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import annoncesData from './annoncesData'
import Filter from '../../components/forms/filter/Filter';
import ListeAnnonces from '../../components/listeAnnonces/ListeAnnonces';
import Footer from '../../components/footer/Footer';
import Loader from '../../components/loader/Loader';



function Annonces(){

    const {marques, boites, categories, modeles, energie, couleurs } = annoncesData;

    const [loading, setLoading] = useState(true);
    const [data, setData]=useState([]);
    const [idMarque, setIdMarque] = useState('');
    const [idCategorie, setIdCategorie] = useState('');

    const handleCheckboxMarque = (id) => {
        setIdMarque(id === idMarque ? '' : id);
    };

    const handleCheckboxCategorie = (id) => {
        console.log('cate is ' + id)
        setIdCategorie(id === idCategorie ? '' : id);
      };


    useEffect(() => {
        // Simulating an asynchronous data fetch
        setLoading(false);
        setTimeout(() => {
            let url = process.env.REACT_APP_API_URL + 'annonces/valide';
            let url1 =  process.env.REACT_APP_API_URL + 'annonces/search?motCle=&prixMin=0&prixMax=20000000&idCategorie='+ idCategorie +'&idMarque='+ idMarque +'&idModel=&idBoite=&idEnergie=&idPlace=&idPorte=&idCouleur=&idVille=&kilometrageMin=0&kilometrageMax=15500000&consomationMin=6&consommationMax=20'
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
              if( this.readyState === 4 ){
                if( this.status === 200 ){
                  let response = JSON.parse(this.responseText);
                  //setItems(response);
                  console.log(response);
                  setLoading(false);
                  setData(response.data);
                }else{
                    setData(null)
                }
              } 
            };
            // console.log(url);
            xhttp.open( "GET" , url1, true );
            xhttp.send(null);
        }, 500); // Simulating a 1-second delay
    }, [idMarque, idCategorie]);
    

   

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
                            <h1 className="font-weight-semi-bold text-uppercase mb-3">Liste des annonces</h1>
                            <div className="d-inline-flex">
                                <p className="m-0">Home</p>
                                <p className="m-0 px-2">-</p>
                                <p className="m-0">Annonces</p>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}

                    <div className="container-fluid pt-5">
                        <div className="row px-xl-5">
                            <div className="col-lg-3 col-md-12">
                                <Filter title = "Categories" data = {categories} handleCheckboxChange={handleCheckboxCategorie} nameId = 'id' value = 'nom' />
                                <Filter title = "Marques" data = {marques} handleCheckboxChange={handleCheckboxMarque} nameId = 'id' value = 'nom' />
                                <Filter title = "Modeles" data = {modeles} value = 'nom' />
                                <Filter title = "Energie" data = {energie} value = 'nom' />
                                <Filter title = "Boites" data = {boites} value = 'nom' />
                                <Filter title = "Couleur" data = {couleurs} value = 'nom' />
                            </div>
                            <div className="col-lg-9 col-md-12">
                                {/* <ListeAnnonces annonces = {annonces}  /> */}
                                {data ? <ListeAnnonces annonces = {data}  /> : '' } 
                            </div>
                        </div>
                    </div>
                    <Footer />
                    </>
            )}
        </div>
        
    )
}

export default Annonces