import React from "react";
import CartWidget from '../CartWidget/CartWidget'; 
import "./NavBar.css"
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <header>
        <div className="nav">
            <Link to={"/"}> 
                <h1> SNKRS </h1>
            </Link> 
            <ul>
                <Link to={"/"}><li id="links">Inicio</li></Link>
                <Link to={"/productos/nike"}><li id="links">Nike</li></Link>
                <Link to={"/productos/adidas"}><li id="links">Adidas</li></Link>
                <Link to={"/productos/fila"}><li id="links">Fila</li></Link>
                <Link to={"/cart"} id="links"><CartWidget /></Link>
            </ul>
        </div>
        </header>
    )
}