import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import "./Cart.css"
import Form from '../Form/Form';
import { useEffect, useState } from "react"; 
import { getArray } from "../helpers/getArray"; 
import { SpinnerComp } from '../Spinner/Spinner';


export const Cart = () => {
    const {cart, totalPrice } = useContext(CartContext);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArray()
                .then(()=>{
                })
                .catch((err)=>console.log(err))
                .finally(()=> setLoading(false))
    }, [cart])

return (
    <>{
        loading?
            <SpinnerComp/>
        :
    <div className='cart'>
    <div>
        {
        cart.length>0 ?
        <>
        <div className="row mx-4" id='cartt'>
        <div className="col">
            {
            cart.map(product=>(
                <ItemCart key={product.id} product={product}/>
            ))
            }
        </div>
        </div>
            <p>Precio total: {Math.round(totalPrice())}</p>
            <Form/>
            </>
            :
            <div className='hacer-compras'>
                <p>No hay elementos en el carrito</p>
                <Link to='/productos'>Hacer compras</Link>
            </div>
        }
        </div>
    </div>
    }
    </>
    )
}

export default Cart

