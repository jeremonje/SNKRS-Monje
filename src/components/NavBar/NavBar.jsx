import React from "react";
import CartWidget from '../CartWidget/CartWidget'; 
import "./NavBar.css"

export const NavBar = () => {
    return(
        <div className="nav">
            <h1>YourStyle</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">What's New</a></li>
                <li><a href="/">Newsletter</a></li>
                <li><a href="/">Contact</a></li>
                <li>
                    <a href="/"><CartWidget /></a>
                </li>
                
            </ul>
        </div>
    )
}