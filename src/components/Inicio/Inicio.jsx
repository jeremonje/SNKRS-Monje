import React from 'react'
import "./Inicio.css"
import { Link } from "react-router-dom";
// import { baseDatos } from "../baseDatos/baseDatos"

export const Inicio = () => {
    return (
        <section className="sec">
<div className="content">
    <div className="textBox">
        <h2>meet our  <span>SNKRS</span></h2>
        <p>we present you the best snkrs</p>
        <Link to={"/productos"}>View All Products</Link>
    </div>
    <div className="imgBox">
        <img src="https://images.pexels.com/photos/8871469/pexels-photo-8871469.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
</div>
<ul className="thumb">
    <Link to={"/productos/adidas"}><li><img src="https://cdn.icon-icons.com/icons2/3397/PNG/512/adidas_icon_214619.png"  alt=""/></li></Link>
    <Link to={"/productos/nike"}><li><img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/nike_logo_icon_181293.png"  alt=""/></li></Link>
    <Link to={"/productos/fila"}><li><img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/fila_logo_icon_181400.png" alt=""/></li></Link>
</ul>
<ul className="sci">
    <li><a href="/"><img src="../../public/img/facebook (1).png" alt=""/></a></li>
    <li><a href="/"><img src="../../../public/img/twitter.png" alt=""/></a></li>
    <li><a href="/"><img src="../../../public/img/instagram (1).png" alt=""/></a></li>
</ul>
</section>
    ) 
}
export default Inicio;