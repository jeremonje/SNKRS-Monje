import React from 'react'
//import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext, useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import "./Cart.css"
import { useState } from 'react';
import { db } from '../../utils/firebase';
import { addDoc, collection} from 'firebase/firestore'
import { Link } from 'react-router-dom';
//import {formulario} from '../formulario/formulario'

export const Cart = () => {
    const {productCartList, getTotalPrice} = useContext(CartContext);
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
        const queryRef = collection(db,"orders");
        //agregamois el Documento
        addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
        console.log(order);
    }

    

    const redondeo = (totalPrice) => {
        return Math.round(totalPrice)
    }
    const { cart, totalPrice } = useCartContext();
    if (cart.length === 0) {
        return (
            <div className='hacer-compras'>
                <p>No hay elementos en el carrito</p>
                <Link to='/productos'>Hacer compras</Link>
            </div>
    );
}

// return (
//     <div className='cart'>
//         {
//             cart.map(product => <ItemCart key={product.id} product={product} />)
//         }
//         <p>
//         total: {redondeo(totalPrice())}
//         </p>
//         <hr/>
                        
                        
//                         <p>Precio total: {getTotalPrice()}</p>
//                         <form onSubmit={sendOrder}>
//                             <input type="text" placeholder='nombre'></input>
//                             <input type="number" placeholder='telefono'></input>
//                             <input type="email" placeholder='email'></input>
//                             <button type='submit'>enviar orden</button>
//                         </form>
//                         {/* <button onClick={updateOrder}>Actualizar</button> */}
//     </div>
// )
// }
// export default Cart

return (
        <div className='cart'>
            <div className="row mx-4" id='cartt'>
                <div className="col">
                    {
                        cart.map(product => <ItemCart key={product.id} product={product} />)
                    }
                    <p>
                    total: {redondeo(totalPrice())}
                    </p>
                    
                </div>
            </div>
            <br/>
            <br/>
            
            
            <div className="contact_form">
                <p className='p'>Completa este formulario y en breve nos pondremos en contacto contigo</p>
                <br/>
        <div className="formulario">      
            

            <form onSubmit={sendOrder} action="submeter-formulario.php" method="post">       

            
                <p  className='p'>
                <label htmlFor="nombre" className="colocar_nombre">Nombre
                    <span  id='span' className="obligatorio">*</span>
                </label>
                    <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
                </p>
            
                <p className='p'>
                <label htmlFor="email" className="colocar_email">Email
                    <span id='span' className="obligatorio">*</span>
                </label>
                    <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"/>
                </p>
            
                <p className='p'>
                <label htmlFor="telefone" className="colocar_telefono">Teléfono
                </label>
                    <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"/>
                </p>    
            
                <p className='p'>
                <label htmlFor="país" className="colocar_país">país
                </label>
                    <input type="text" name="introducir_país" id="país" placeholder="Escribe tu país"/>
                </p>    
            
                <p className='p'>
                <label htmlFor="Provincia" className="colocar_asunto">Provincia
                    <span id='span' className="obligatorio">*</span>
                </label>
                    <input type="text" name="introducir_Provincia" id="Provincia" required="obligatorio" placeholder="Escribe tu Provincia"/>
                </p>    
            
            
                <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>

                <p className="aviso">
                  <span id='span' className="obligatorio"> * </span>los campos son obligatorios.
                </p>          
            
            </form>
        </div>  
    </div>

	    </div>
)
}
export default Cart

