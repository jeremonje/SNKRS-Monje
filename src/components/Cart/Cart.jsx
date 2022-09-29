import React from 'react'
//import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext/*, useCartContext*/ } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import "./Cart.css"
import { useState } from 'react';
import { db } from '../../utils/firebase';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'

export const Cart = () => {
    const {productCartList, clearProductCartList, getTotalPrice} = useContext(CartContext);
    const [/*idOrder,*/ setIdOrder] = useState("");

    const sendOrder = (e)=>{
        e.preventDefault();
        const order = {
            buyer: {
                name:e.target[0].value,
                phone:e.target[1].value,
                email:e.target[2].value
            },
            items: productCartList,
            total: getTotalPrice()
        }
        //crear referencia en la base de datos
        const queryRef = collection(db, "orders");
        //agregamois el Documento
        addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
        console.log(order);
        
    }
    const updateOrder= ()=>{
        const queryRef = doc(db, "items", "0xhI4aO8EPis7yTWbt0z");
        updateDoc(queryRef, {
            Price:41.999,
            category:"adidas",
            description:"Las zapatillas Adidas Ozweego son perfectas para tus días de running. Su diseño está inspirado en modelos Adidas de los 90's.",
            pictureUrl:"https://firebasestorage.googleapis.com/v0/b/coderhouse-snkrs.appspot.com/o/Adidas%20Ozweego.jpg?alt=media&token=ba1e0f03-92ed-4708-bd93-0a46f7b437a4",
            title:"adidas Ozweego"
        }).then(()=>console.log("producto actualizado"))
    }

    return(
        <div>
            <p>Cart</p>
            <div>
                {
                    productCartList.length>0 ?
                    <>
                        {
                            productCartList.map(item=>(
                                <ItemCart key={item.id} item={item}/>
                            ))
                        }
                        <hr/>
                        <button onClick={clearProductCartList}>Vaciar el carrito</button>
                        <p>Precio total: {getTotalPrice()}</p>
                        <form onSubmit={sendOrder}>
                            <input type="text" placeholder='nombre'></input>
                            <input type="number" placeholder='telefono'></input>
                            <input type="email" placeholder='email'></input>
                            <button type='submit'>enviar orden</button>
                        </form>
                        <button onClick={updateOrder}>Actualizar</button>
                    </>
                    :
                    <p>No has agregado productos</p>
                }
            </div>
        </div>
    )
}
    // const order = {
    //     buyer: {
    //         name:'jere',
    //         email:'jere@gmail.com',
    //         phone:'123456',
    //         address:'1524'
    //     },
    //     items: cart.map(product => ({ id: product.id, title: product.title, price: product.Price, quantity: product.quantity })),
    //     total: totalPrice(),
    // }
//     const handleClick = () => {
//         const db = getFirestore();
//         const ordersCollection = collection(db, 'orders');
//         addDoc(ordersCollection, order)
//         .then(({ id }) => console.log(id))
//     }


//     const redondeo = (totalPrice) => {
//         return Math.round(totalPrice)
//     }
//     const { cart, totalPrice } = useCartContext();
//     if (cart.length === 0) {
//         return (
//             <>
//             <div className='cart'>
//                 <p>No hay elementos en el carrito</p>
//                 <br></br>
//                 <Link to='/' className='link'>Hacer compras</Link>
//             </div>
//             </>
//         );
//     }

//     return (
//         <>
//             {
//                 cart.map(product => <ItemCart key={product.id} product={product} />)
//             }
//             <p>
//                 total: {redondeo(totalPrice())}
//             </p>
//             <button onClick={handleClick}>Comprar</button>
//         </>
//     )
// }

export default Cart