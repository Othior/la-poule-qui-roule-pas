import React from 'react';
import "./A_Propos.css";
import poulaillersMobile from "../../assets/poulaillers_mobiles.jpg";
import poulaillers from "../../assets/poulaillers_grand_angle.jpg"
import coucous from "../../assets/coucous_malines.jpg"

function A_Propos() {
    return (
        <div className="container_a_propos">
            <div className="block_propos_quoi_mobile_image">
                <div className="block_propos_quoi">
                    <h2 className="title_propos_quoi">La poule qui Roule c'est quoi ?</h2>
                    <div className="block_paragraphe_propos_quoi">
                        <p className="paragraphe_propos_quoi">
                            La Poule Qui Roule est un projet innovant d’élevage de Coucous de Malines bio en
                        </p>
                        <p className="paragraphe_propos_quoi">
                            poulaillers mobiles, au sein de la Ferme de Froidefontaine à Barsy.
                        </p>
                    </div>

                </div>
                <div className="block_poulaillers_mobiles_image">

                    <div className="block_poulaillers_mobiles">
                        <h3 className="title_poulaillers_mobiles">Des poulaillers mobiles ? </h3>
                        <p className="explication_poulaillers_mobiles">
                            L’élevage en poulaillers mobiles offre aux
                            volailles un parcours plein air toujours
                            enherbé et de grande qualité nutritive.
                        </p>
                        <p className="explication_poulaillers_mobiles">
                            La mobilité des poulaillers a également
                            un impact positif sur le couvert végétal
                            puisqu’elle permet d’éviter la dégradation
                            des sols et de préserver les écosystèmes.
                        </p>
                    </div>
                    <img src={poulaillersMobile} alt="image_poulaillers_mobiles" className="image_poulaillers_mobiles" />
                </div>
            </div>
            <div className="grille_image_poulaillers_grand_angle">
                <img className="image_poulaillers_grand_angle" src={poulaillers} alt={poulaillers} />
            </div>

            <div className="container_elevage">
                <div className="block_elevage">
                    <h2 className="title_elevage">Un élevage Bio, respectueux du vivant</h2>
                    <p className="raison_bio">
                        La Poule Qui Roule a choisi de faire du bio <br /> pour plusieurs raisons :
                    </p>
                    <p className="premier_raison">
                        - Le bien-être animal
                    </p>
                    <p className="explication_premiere_raison">
                        Nos poulets sont élevés avec soin dès leurs
                        premiers jours et grandissent au coeur de
                        parcours et d’infrastructures aménagées
                        pour favoriser leur instinct naturel. Abattus
                        à minimum 84 jours, ils bénéficient d’une
                        croissance lente.
                    </p>
                    <p className="deuxieme_raison">
                        - La préservation de la biodiversité
                        et les synergies écologiques
                    </p>
                    <p className="explication_deuxieme_raison">
                        Les parcours arborés - entourés de plus de
                        250 plantes aromatiques, surplombés de
                        150 noisetiers et d’une centaine de fruitiers -
                        offrent aux poulets une alimentation
                        diversifiée et une protection contre les
                        maladies, tout en favorisant la biodiversité.
                    </p>
                    <p className="explication_deuxieme_raison">
                        Des synergies sont également
                        créées avec l’espace maraîcher et
                        les vergers voisins nettoyés grâce
                        à la présence des poulets, qui se
                        régalent des insectes ravageurs !
                    </p>
                </div>
                <div className="block_coucous">
                    <h3 className="title_coucous">Le Coucou de MalineS ,<br></br> Poulet de race rustique</h3>
                    <p className="explication_coucous">
                        D’origine 100% belge, le Coucou
                        de Malines est une race rustique
                        appréciée pour sa chair tendre,
                        juteuse, fine et peu grasse qui ravira
                        les papilles et vous fera (re)découvrir
                        le bon goût du poulet fermier !
                    </p>
                    <img src={coucous} alt="" className="image_coucous" />
                </div>
            </div>

        </div>
    )
}

export default A_Propos
