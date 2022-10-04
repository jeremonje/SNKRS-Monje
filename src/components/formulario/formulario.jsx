/*import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import { useState } from 'react';
import { db } from '../../utils/firebase';
import { addDoc, collection } from 'firebase/firestore'



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

    <div className="contact_form">
        <div className="formulario">      
            <h1>Formulario de contacto</h1>
            <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>


            <form onSubmit={sendOrder} action="submeter-formulario.php" method="post">       

            
                <p>
                <label for="nombre" className="colocar_nombre">Nombre
                    <span className="obligatorio">*</span>
                </label>
                    <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
                </p>
            
                <p>
                <label for="email" className="colocar_email">Email
                    <span className="obligatorio">*</span>
                </label>
                    <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"/>
                </p>
            
                <p>
                <label for="telefone" className="colocar_telefono">Teléfono
                </label>
                    <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"/>
                </p>    
            
                <p>
                <label for="website" className="colocar_website">Sitio web
                </label>
                    <input type="url" name="introducir_website" id="website" placeholder="Escribe la URL de tu web"/>
                </p>    
            
                <p>
                <label for="asunto" className="colocar_asunto">Asunto
                    <span className="obligatorio">*</span>
                </label>
                    <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto"/>
                </p>    
            
                <p>
                <label for="mensaje" className="colocar_mensaje">Mensaje
                    <span className="obligatorio">*</span>
                </label>                     
                                    <textarea name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                                </p>                    
            
                <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>

                <p className="aviso">
                  <span className="obligatorio"> * </span>los campos son obligatorios.
                </p>          
            
            </form>
        </div>  
    </div>


)
}
export default formulario

*/