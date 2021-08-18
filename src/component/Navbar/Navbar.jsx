import React, { createRef } from 'react'
import "./Navbar.css";

function Navbar() {

    const arrayItem = 
        [
            { titre: "Accueil", lien:"" }, { titre: "À Propos", lien:"a_propos" }, { titre: "Contact", lien:"contact" }
        ]
    const navbarClick = createRef();
    const containerNavbar = createRef();

    const navbarOpenClosed = () => {
        console.log("navbar Click => ",navbarClick.current);

        
        if(!navbarClick.current.classList.contains("active_link")){
            navbarClick.current.classList.add("active_link");
            containerNavbar.current.classList.add("active_background")
        }else{
            navbarClick.current.classList.remove("active_link");
            containerNavbar.current.classList.remove("active_background")

        }

    }

    return (

        <div className="container_navbar" ref={containerNavbar}>
            <div className="burger" onClick={ navbarOpenClosed }>
                <i class="fas fa-align-justify"></i>
            </div>
            <h1 className="title_navbar">La Poule {/* <br /> */} Qui Roule</h1>
            <ul className="navbar" ref={navbarClick}>
                {arrayItem.map((item,index) => (
                    <li className="navbar_item" key={ "navItem_"+ index }>
                        <a className="navbar_item_link" href={ "/" + item.lien }> { item.titre } </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar
