import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../utils/firebase';
import { addDoc, collection } from 'firebase/firestore';
import './Form.css'
import swal from 'sweetalert';


export const Form = () => {
    const {cart, totalPrice} = useContext(CartContext);
    const [setIdOrder] = useState("");

    const sendOrder = (e)=>{
        e.preventDefault();
        const order = {
            buyer: {
                name:e.target[0].value,
                email:e.target[1].value,
                phone:e.target[2].value
            },
            items: cart,
            total: Math.round(totalPrice())
        }
        //crear referencia en la base de datos
        const queryRef = collection(db,"orders");
        //agregamos el Documento
        addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
        console.log(order);
    }
        
        const mostrarAlerta=()=>{
            swal({
                title:"Enviar el formulario",
                text:"deseas confirmar la compra?",
                icon:"warning",
                buttons:["No","Si"]
            }).then(respuesta=>{
                if(respuesta){
                    swal({
                        text:"El formulario se envio con exito",
                        icon:"success"})
                }
            })
        }

    return(
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
                
                <button type="submit" name="enviar_formulario" id="enviar" onClick={()=>mostrarAlerta()}><p>Enviar</p></button>

                <p className="aviso">
                  <span id='span' className="obligatorio"> * </span>los campos son obligatorios.
                </p>          

            </form>
            
            </div>
            </div>
    )

}
export default Form