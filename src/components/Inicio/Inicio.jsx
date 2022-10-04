import React from 'react'
import "./Inicio.css"
import { Link } from "react-router-dom";
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import fila from '../../assets/fila.png';
import inicionike from '../../assets/inicionike.png';
import facebook from '../../assets/img/facebook(1).png';
import twitter from '../../assets/img/twitter.png';
import instagram from '../../assets/img/instagram(1).png';
// import { baseDatos } from "../baseDatos/baseDatos"

export const Inicio = () => {
    return (
        <section className="sec">
<div className="content">
    <div className="textBox">
        <h2>meet our  <span id='span'>SNKRS</span></h2>
        <p>we present you the best snkrs</p>
        <Link to={"/productos"}>View All Products</Link>
    </div>
    <div className="imgBox">
        <img src={inicionike} alt="" />
    </div>
</div>
<ul className="thumb">
    <Link to={"/productos/adidas"}><li><img src={adidas}  alt="adidas"/></li></Link>
    <Link to={"/productos/nike"}><li><img src={nike}  alt="nike"/></li></Link>
    <Link to={"/productos/fila"}><li><img src={fila} alt="fila"/></li></Link>
</ul>
<ul className="sci">
    <li><a href="/"><img src={facebook} alt=""/></a></li>
    <li><a href="/"><img src={twitter} alt=""/></a></li>
    <li><a href="/"><img src={instagram} alt=""/></a></li>
</ul>
</section>
    ) 
}
export default Inicio;