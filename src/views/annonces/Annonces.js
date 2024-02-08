import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';
// import annoncesData from './annoncesData'
import Filter from '../../components/forms/filter/Filter';
import ListeAnnonces from '../../components/listeAnnonces/ListeAnnonces';
import Footer from '../../components/footer/Footer';
import Loader from '../../components/loader/Loader';
import TwoInput from '../../components/forms/TwoInput';
import { getBoites, getCategories, getCouleurs, getEnergies, getMarques } from '../../my_util';



function Annonces(){

    // let {boites, categories, modeles, energie, couleurs } = annoncesData;

    const [loading, setLoading] = useState(true);
    const [data, setData]=useState([]);
    const [idMarque, setIdMarque] = useState('');
    const [idCategorie, setIdCategorie] = useState('');
    const [idEnergie, setIdEnergie] = useState('');
    const [idBoite, setIdBoite] = useState('');
    const [idCouleur, setIdCouleur] = useState('');
    const [min, setMinimum] = useState('0');
    const [max, setMaximum] = useState('2000000');
    const [minPrice, setMinimumPrix] = useState('0');
    const [maxPrice, setMaximumPrix] = useState('200000000');
    const [minConsommation, setMinimumConso] = useState('0');
    const [maxConsommation, setMaximumConso] = useState('50');
    const [marques, setMarques] = useState([]);
    const [boites, setBoites] = useState([]);
    const [categories, setCategories] = useState([]);
    const [energies, setEnergies] = useState([]);
    const [couleurs, setCouleurs] = useState([]);
    const [keyWord, setKeyWord] = useState('');

    const handleInputChange = (e) => {
        setKeyWord(e.target.value);
    };

    const handleMinimumConsoChange = (value) => {
        setMinimumConso(value);
    };

    const handleMaximumConsoChange = (value) => {
        setMaximumConso(value);
    };

    const handleMinimumPrixChange = (value) => {
        setMinimumPrix(value);
    };

    const handleMaximumPrixChange = (value) => {
        setMaximumPrix(value);
    };

    const handleMinimumChange = (value) => {
        setMinimum(value);
    };

    const handleMaximumChange = (value) => {
        setMaximum(value);
    };

    const handleCheckboxMarque = (id) => {
        setIdMarque(id === idMarque ? '' : id);
    };

    const handleCheckboxCategorie = (id) => {
        setIdCategorie(id === idCategorie ? '' : id);
      };

    const handleCheckboxEnegie = (id) => {
        setIdEnergie(id === idEnergie ? '' : id);
    }

    const handleCheckboxBoite = (id) => {
        setIdBoite(id === idBoite ? '' : id);
    }

    const handleCheckboxCouleur = (id) => {
        setIdCouleur(id === idCouleur ? '' : id);
    }

    useEffect(() => {
        // Simulating an asynchronous data fetch
        setLoading(true);
        setTimeout(async () => {

            const [
                marquesData,
                boitesData,
                categoriesData,
                energiesData,
                couleursData
            ] = await Promise.all([
                getMarques(),
                getBoites(),
                getCategories(),
                getEnergies(),
                getCouleurs()
            ]);
            console.log(categoriesData)
            setMarques(marquesData);
            setBoites(boitesData);
            setCategories(categoriesData);
            setEnergies(energiesData);
            setCouleurs(couleursData);

            let url = process.env.REACT_APP_API_URL + 'annonces/valide';
            let url1 =  process.env.REACT_APP_API_URL + 'annonces/search?motCle='+ keyWord +'&prixMin='+ minPrice +'&prixMax='+ maxPrice +'&idCategorie='+ idCategorie +'&idMarque='+ idMarque +'&idModel=&idBoite='+ idBoite +'&idEnergie='+ idEnergie +'&idCouleur=&kilometrageMin='+ min +'&kilometrageMax='+ max +'&consomationMin='+ minConsommation +'&consommationMax='+ maxConsommation +''
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
    }, [idMarque, idCategorie, idEnergie, minPrice, maxPrice, idBoite, min, max, minConsommation, maxConsommation, keyWord]);
    

   

    return(
        <div>
        
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
                    <div className="col-lg-8 col-xs-12 col-md-12 text-center mx-auto">
                        <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Cherchez votre voiture par mots cles ... "
                            value={keyWord}
                            onChange={handleInputChange} // Add this line
                        />
                            <div className="input-group-append">
                                <span className="btn btn-outline bg-transparent text-primary">
                                    <i className="fa fa-search" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid pt-5">
                        <div className="row px-xl-5">
                            <div className="col-lg-3 col-md-12">
                                <Filter title = "Categories" data = {categories} handleCheckboxChange={handleCheckboxCategorie} nameId = 'idCategorie' value = 'nomCategorie' />
                                <Filter title = "Marques" data = {marques} handleCheckboxChange={handleCheckboxMarque} nameId = 'idMarque' value = 'nomMarque' />
                                {/* <Filter title = "Modeles" data = {modeles}  nameId = 'id' value = 'nom' /> */}
                                <Filter title = "Energies" data = {energies} handleCheckboxChange={handleCheckboxEnegie} nameId = 'idEnergie' value = 'nomEnergie' />
                                <Filter title = "Boites" data = {boites} handleCheckboxChange={handleCheckboxBoite} nameId = 'idBoite' value = 'nomBoite' />
                                <Filter title = "Couleur" data = {couleurs} handleCheckboxChange={handleCheckboxCouleur} nameId = 'idCouleur' value = 'nomCouleur' />
                                <TwoInput 
                                    title = "Prix entre" 
                                    minimum = {minPrice} 
                                    maximum = {maxPrice} 
                                    handleMinimumChange={handleMinimumPrixChange}
                                    handleMaximumChange={handleMaximumPrixChange}
                                />
                                <TwoInput 
                                    title = "Kilometrage" 
                                    minimum = {min} 
                                    maximum = {max} 
                                    handleMinimumChange={handleMinimumChange}
                                    handleMaximumChange={handleMaximumChange}
                                />

                                <TwoInput 
                                    title = "Consommation" 
                                    minimum = {minConsommation} 
                                    maximum = {maxConsommation} 
                                    handleMinimumChange={handleMinimumConsoChange}
                                    handleMaximumChange={handleMaximumConsoChange}
                                />

                            </div>
                            <div className="col-lg-9 col-md-12 shadow p-5">
                                {loading ? (
                    // Loader component or message while loading
                                    <Loader />
                                        ) : (
                                            
                                            <>
                                            {data ? <ListeAnnonces annonces = {data}  /> : '' } </>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                    <Footer />
                    </>
           
        </div>
        
    )
}

export default Annonces