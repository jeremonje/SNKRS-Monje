import React, {  /*useState*/} from 'react'
import {ItemCount} from "../ItemCount/ItemCount"
import { useCartContext } from '../../Context/CartContext'

export const ItemDetail = ({title, description,Price,pictureUrl}) => {

    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
        addProduct(onAdd, quantity);
    }

    return (
        <div className='card'>
            <img src={pictureUrl} alt={title}/>
            <h1>{title}</h1>
            <p className='price'>${Price}</p>
            <p>{description}</p>
            <ItemCount initial={1} stock={6} onAdd={onAdd} />
            
        </div>
    )
}

export default ItemDetail;