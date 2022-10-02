/*import React from 'react'
import { useContext } from 'react';
import { CartContext, useCartContext } from '../../Context/CartContext';
import "./Cart.css"
import { useState } from 'react';
import { db } from '../../utils/firebase';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'



export const formulario = () => {
    const {productCartList, getTotalPrice} = useContext(CartContext);
    const [ setIdOrder] = useState("");

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

    return (
<>
		<form action="" class="formulario" id="formulario" onSubmit={sendOrder}>

			
			<div className="formulario__grupo" id="grupo__nombre">
				<label for="nombre" class="formulario__label">Nombre</label>
				<div className="formulario__grupo-input">
					<input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="John Doe"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>


			
			<div className="formulario__grupo" id="grupo__correo">
				<label for="correo" class="formulario__label">Correo Electrónico</label>
				<div className="formulario__grupo-input">
					<input type="email" class="formulario__input" name="correo" id="correo" placeholder="correo@correo.com"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__telefono">
				<label for="telefono" class="formulario__label">Teléfono</label>
				<div className="formulario__grupo-input">
					<input type="text" class="formulario__input" name="telefono" id="telefono" placeholder="4491234567"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
			</div>

			
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
				<button type="submit" class="formulario__btn">Finalizar Pedido</button>
				<p className="formulario__mensaje-exito" id="formulario__mensaje-exito">Muchas Gracias por su compra! le estaremos enviando por su gmail los pasos a seguir.</p>
			</div>
		</form>
	</>
)
}*/
