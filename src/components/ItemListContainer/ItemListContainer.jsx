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
        //const {categoryId} = useParams();
        
        const [arregloProductos, setArregloProductos] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db,"items");
            const response = getDocs(query);
            const docs = (await response).docs;
            //console.log("doc info", docs[0].data())
            //console.log("doc id", docs[0].id)
            const data = docs.map(doc=>{return {...doc.data(), id:doc.id} })
            setArregloProductos(data);
        }
        getData()
    },[])


        /*useEffect(() => {
            const querydb = getFirestore();
            const queryCollection = collection(querydb, 'items');
            if (categoryId) {
                const queryFilter= query(queryCollection, where('category', '==', categoryId))
                getDocs(queryFilter)
                    .then(res => setProducts(res.docs.map(product => ({ id: products.id, ...products.product() }))))
            }else {
                getDocs(queryCollection)
                    .then(res => setProducts(res.docs.map(product => ({ id: products.id, ...products.product() }))))
            }
        }, [categoryId])*/


            
            
    return (
        <div id='item-List-container'>
            
                    <ItemList items={products} />
            
        </div>
    )
}

export default ItemListContainer;