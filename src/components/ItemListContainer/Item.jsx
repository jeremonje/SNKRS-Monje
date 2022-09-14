import React from 'react'
import "./ItemListContainer.css"
import { Link } from 'react-router-dom'

export const Item = ({id, title, description,Price,pictureUrl}) => {
    
    return (
        <div className='cardd'>
            <img src={pictureUrl} alt={title}/>
            <h1>{title}</h1>
            <p className='price'>${Price}</p>
            <p>{description}</p>
            <Link to={`/item/${id}`}><p><button>Ver detalle del producto</button></p></Link>
        </div>
    )
}
