import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import "./Cart.css"
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {

    const order = {
        buyer: {
            name:'jere',
            email:'jere@gmail.com',
            phone:'123456',
            address:'1524'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.Price, quantity: product.quantity })),
        total: totalPrice(),
    }
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }


    const redondeo = (totalPrice) => {
        return Math.round(totalPrice)
    }
    const { cart, totalPrice } = useCartContext();
    if (cart.length === 0) {
        return (
            <>
            <div className='cart'>
                <p>No hay elementos en el carrito</p>
                <br></br>
                <Link to='/' className='link'>Hacer compras</Link>
            </div>
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
            <button onClick={handleClick}>Comprar</button>
        </>
    )
}

export default Cart