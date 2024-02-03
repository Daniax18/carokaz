import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../card/Card';


function ListFavoris(props) {
    const { favoris } = props;
    return (
        <div className="row pb-3">
            {favoris.map(favori => (
                    <Card key={favori.idFavoris} annonce={favori.annonce} />
                ))}
        </div>
    )
}
export default ListFavoris