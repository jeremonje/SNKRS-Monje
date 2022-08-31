import React from "react";
import "./ItemDetail.css"

export const ItemDetail = ({data}) => {
    return (
        <div className="container">
        <div className="detail">
            <img className="detail-image" src={data.image} alt="" />
            <div className="content">
                <h2>{data.title}</h2>
                <br></br>
                <span class="value" >{data.value} </span>
                
                <br></br><span class="envio">Envío gratis</span>
                <br></br>
                <hr></hr>
                <h3>{data.descripcion}</h3>
            </div>
        </div>
        </div>
    );
}

export default ItemDetail;