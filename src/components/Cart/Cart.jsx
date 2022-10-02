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
        const queryRef = collection(db, "orders");
        //agregamois el Documento
        addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
        console.log(order);
        
    }
    //actualizar data de los productos
    // const updateOrder= ()=>{
    //     const queryRef = doc(db, "items", "0xhI4aO8EPis7yTWbt0z");
    //     updateDoc(queryRef, {
    //         Price:41.999,
    //         category:"adidas",
    //         description:"Las zapatillas Adidas Ozweego son perfectas para tus días de running. Su diseño está inspirado en modelos Adidas de los 90's.",
    //         pictureUrl:"https://firebasestorage.googleapis.com/v0/b/coderhouse-snkrs.appspot.com/o/Adidas%20Ozweego.jpg?alt=media&token=ba1e0f03-92ed-4708-bd93-0a46f7b437a4",
    //         title:"adidas Ozweego"
    //     }).then(()=>console.log("producto actualizado"))
    // }
/*
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
}*/

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
        <hr/>
        Porfavor complete el siguiente formulario para realizar la compra.
        <hr/>
        </div>
        
        <div className="col d-flex justify-content-end">
        {/* <!--<button class="btn btn-success">COMPRAR</button>--> */}
        </div>
    </div>
    <br/><br/><br/><br/>
    <>
		<form action="" className="formulario" id="formulario" onSubmit={sendOrder}>

			{/* <!-- Grupo: Nombre --> */}
			<div className="formulario__grupo" id="grupo__nombre">
				<label htmlFor="nombre" className="formulario__label">Nombre</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="nombre" id="nombre" placeholder="John Doe"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>

			{/* <!-- Grupo: Correo Electronico --> */}
			<div className="formulario__grupo" id="grupo__correo">
				<label htmlFor="correo" className="formulario__label">Correo Electrónico</label>
				<div className="formulario__grupo-input">
					<input type="email" className="formulario__input" name="correo" id="correo" placeholder="correo@correo.com"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
			</div>

			{/* <!-- Grupo: Teléfono --> */}
			<div className="formulario__grupo" id="grupo__telefono">
				<label htmlFor="telefono" className="formulario__label">Teléfono</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="telefono" id="telefono" placeholder="4491234567"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
			</div>

			{/* <!-- Grupo: Terminos y Condiciones --> */}
			<div className="formulario__grupo" id="grupo__terminos">
				<label className="formulario__label">
					<input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos"/>
					Acepto los Terminos y Condiciones
				</label>
			</div>

			<div className="formulario__mensaje" id="formulario__mensaje">
				<p><i className="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
			</div>

			<div className="formulario__grupo formulario__grupo-btn-enviar">
				<button type="submit" className="formulario__btn">Finalizar Pedido</button>
				<p className="formulario__mensaje-exito" id="formulario__mensaje-exito">Muchas Gracias por su compra! le estaremos enviando por su gmail los pasos a seguir.</p>
			</div>
		</form>
	</>

    </div>
)
}
export default Cart

