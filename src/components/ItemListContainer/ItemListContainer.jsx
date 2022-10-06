import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from 'react-router-dom';
import {collection, getDocs} from "firebase/firestore";
import { db } from '../../utils/firebase';
import "./ItemListContainer.css"


export const ItemListContainer = ()=>{
    const {category} = useParams();
    const [ productos, setProductos] = useState([]);
    

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
        <div className="item-list-container" >
            <ItemList items= {productos}/>
            
        </div>
    )

}
export default ItemListContainer