/*import React, { useEffect, useState } from "react";  
import { ItemList } from "./ItemList";
import "./ItemListContainer.css"
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase';
import Inicio from '../Inicio/Inicio';

export const ItemListContainer = () => {
        const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const getDocumento = async()=>{
            const query = collection(db,"items");
            getDocs(query)
                .then( res => setProducts(res.docs.map( product => ({ id: product.id, ...product.data()}))))
        }
        getDocumento()
    
    },[])
    
    return (
        <>        
        
        <div id='item-List-container'>
                    <Inicio/>
                    <ItemList items={products} />
        </div>
        </>
    )
}

export default ItemListContainer;*/

import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from 'react-router-dom';
import {collection, getDocs} from "firebase/firestore";
import { db } from '../../utils/firebase';
import "./ItemListContainer.css"
import Inicio from '../Inicio/Inicio';

export const ItemListContainer = ()=>{
    const {category} = useParams();
    const [ productos, setProductos] = useState([]);
    // const promesa = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve(arregloProductos);
    //     }, 2000);
    // })

    useEffect(()=>{
        const getData = async()=>{
            try {
                const queryRef = collection(db, "items")
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    } 
                    return newDoc;
                });
                console.log('datos', datos)
                if(!category){
                    setProductos(datos)
                } else{
                const nuevalista = datos.filter(item=>item.category === category);
                setProductos(nuevalista)
                }

            } catch (error) {
                console.log(error);
            }
            

        }
        getData();
    },[category])

    console.log("productos", productos)

    return(
        <div className='item-list-container'>
            
            <Inicio/>
            {/* <p className="title"> Products</p> */}
            <ItemList items= {productos}/>
        </div>
    )
}
export default ItemListContainer