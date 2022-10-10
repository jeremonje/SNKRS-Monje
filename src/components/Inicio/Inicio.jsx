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


export const Inicio = () => {

    return (
        <section className="sec">
<div className="content">
    <div className="textBox">
        <h2>meet our  <span id='span'>SNKRS</span></h2>
        <p>Te presentamos las mejores sneakers</p>
        <Link to={"/productos"}>Ver todos los productos</Link>
    </div>
    <div className="imgBox">
        <img className='img-1' src={inicionike} alt="" />
    </div>
</div>
<ul className="thumb">
    <Link to={"/productos/adidas"}><li><img src={adidas}  alt="adidas"/></li></Link>
    <Link to={"/productos/nike"}><li><img src={nike}  alt="nike"/></li></Link>
    <Link to={"/productos/fila"}><li><img src={fila} alt="fila"/></li></Link>
</ul>
<ul className="sci">
    <li><a href="https://www.facebook.com/" target="_blank"  rel="noreferrer"><img src={facebook} alt="" /></a></li>
    <li><a href="https://twitter.com/"  target="_blank"  rel="noreferrer"><img src={twitter} alt=""/></a></li>
    <li><a href="https://www.instagram.com/"  target="_blank"  rel="noreferrer"><img src={instagram} alt=""/></a></li>
</ul>
</section>
    ) 
}

export default Inicio;