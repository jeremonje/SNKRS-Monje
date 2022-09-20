import React from 'react'
import { useCartContext } from '../../Context/CartContext';
import './ItemCart.css'


const ItemCart = ({ product }) => {
    
    const { removeProduct } = useCartContext();

    return (
        <div className='itemCart'>
            <img src={product.pictureUrl} alt={product.title} />
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.Price}</p>
                <p>Subtotal: ${product.quantity * product.Price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart