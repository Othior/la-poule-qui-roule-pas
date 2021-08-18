import React from 'react';
import "./Accueil.css";
import image from "../../assets/accueilImage.jpg"
import DrapeauBelge from "../../assets/drapeauBelge.png"


function Accueil() {
    return (
        <div className="container_accueil">
            <img className="image_accueil" src={image} alt="test" />
            <div className="block_explication_accueil">
                <h2 className="title_block">LA POULE <br></br>QUI ROULE</h2>
                <p className="explication_poulet_accueil">
                    Poulets Rustiques Bio <br />
                    Élevés Avec Soin Dans <br />
                    Des Poulaillers Mobiles
                </p>
                <div className="adresse_ferme">
                    <img className="image_drapeau_belgique" src={ DrapeauBelge } alt="" />
                    <p className="explication_ferme">
                        Ferme de Froidefontaine <br />
                        Condroz - Belgique  
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Accueil
