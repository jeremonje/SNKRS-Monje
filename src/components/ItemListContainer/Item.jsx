import React from 'react'
import "./ItemListContainer.css"
import { Link } from 'react-router-dom'


export const Item = ({item})=>{
    return(
        <div className="cardd">
            <img src={item.pictureUrl} alt={item.title}/>
            <h4>{item.title}</h4>
            <p className='price'>$ {item.Price}</p>
            <Link to={`/item/${item.id}`}>
                <button className='boton-ver'>Ver detalle...</button>
            </Link>
        </div>
    )
}
export default Item