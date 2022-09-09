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
                <li><a href="/">Home</a></li>
                <Link to={"/category/nike"}><li id="links">Nike</li></Link>
                <Link to={"/category/adidas"}><li id="links">Adidas</li></Link>
                <Link to={"/category/fila"}><li id="links">Fila</li></Link>
                <li><a href="/">Contact</a></li>
                
                <li>
                    <a href="/"><CartWidget /></a>
                </li>
                
            </ul>
        </div>
        </header>
    )
}