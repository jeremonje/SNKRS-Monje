import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const redondeo = (totalPrice) => {
        return Math.round(totalPrice)
    }
    const { cart, totalPrice } = useCartContext();
    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: {redondeo(totalPrice())}
            </p>
        </>
    )
}

export default Cart