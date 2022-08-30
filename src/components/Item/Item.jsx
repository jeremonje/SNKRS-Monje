import React from "react";
import "./Item.css";

const Item = ({ info }) => {
    return(
        <a href='/' className="snkr">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </a>    
    );
}

export default Item;