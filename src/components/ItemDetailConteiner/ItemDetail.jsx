import React, {  /*useState*/} from 'react'
import {ItemCount} from "../ItemCount/ItemCount"
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

export const ItemDetail = ({title, description,Price,pictureUrl, id, category}) => {

    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        addProduct({title, description, Price, pictureUrl, id, category}, quantity);
    }

    return (
        <>
        <div className='card'>
            <img src={pictureUrl} alt={title}/>
            <h1>{title}</h1>
            <p className='price'>${Price}</p>
            <p>{description}</p>
            <ItemCount initial={1} stock={6} onAdd={onAdd} />
            
        
        </div>
        <Link to={`/category/${category}`} className='Link'>Volver</Link>
        </>
    )
}

export default ItemDetail;