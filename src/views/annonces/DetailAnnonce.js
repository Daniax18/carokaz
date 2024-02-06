import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import Annonce from '../../components/listeAnnonces/Annonce';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';


function DetailAnnonce(){ 
    const { id_annonce } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData]=useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        // Simulating an asynchronous data fetch
        setLoading(true);
        setTimeout(() => {
            let url = token ? process.env.REACT_APP_API_URL + 'annonces/' + id_annonce : process.env.REACT_APP_API_URL + 'annonces/front/' + id_annonce
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
              if( this.readyState === 4 ){
                if( this.status === 200 ){
                  let response = JSON.parse(this.responseText);
                //   setItems(response);
                  console.log(response);
                  setLoading(false);
                  setData(response.data);
                }
              }
            };
            // console.log(url);
            xhttp.open( "GET" , url, true );
            if(token){
              xhttp.setRequestHeader('Authorization', `Bearer ${token}`)
            } 
            xhttp.send(null);
        }, 1000); // Simulating a 1-second delay
    }, []); 



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
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Detail d'une annonce</h1>
                    <div className="d-inline-flex">
                        <p className="m-0">Home</p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Detail</p>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            <Annonce annonce = {data} />
            {/* <MyAnnonce annonce = {annonce} /> */}
            <Footer />
            </>
        )}
        </div>
    )
}

export default DetailAnnonce