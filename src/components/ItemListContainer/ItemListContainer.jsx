import React, { useEffect, useState } from "react";  
/*import { getArray } from "../helpers/getArray";
import { array } from "../../data/data";*/
import { ItemList } from "./ItemList";
//import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
//import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase';

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
        <div id='item-List-container'>
            
                    <ItemList items={products} />
            
        </div>
    )
}

export default ItemListContainer;