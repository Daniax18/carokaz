import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../card/Card';


function ListAnnonces(props) {
    const { annonces } = props;
    return (
        <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
                {annonces.map(annonce => (
                        <Card key={annonce.idAnnonce} annonce={annonce} />
                    ))}
            </div>
        </div>
    )
}
export default ListAnnonces