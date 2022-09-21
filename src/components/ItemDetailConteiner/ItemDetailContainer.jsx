import React, { useEffect, useState } from "react";  
/*import { getArray } from "../helpers/getArray";
import { array } from "../../data/data";*/
import { ItemDetail } from "./ItemDetail";
//import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { db } from '../../utils/firebase';


export const ItemDetailContainer = () => {
        const [product, setProduct] = useState({});
        /*const [loading, setLoading] = useState(true)*/
        //const {itemId} = useParams();

        useEffect(()=>{
            const getDocumento = async()=>{
                const query = doc(db,"items","0xhI4aO8EPis7yTWbt0z");
                const response = await getDoc(query);
                const producto = {
                    ...response.data(),
                    id: response.id
                }
                console.log("productos", producto)
                //setArregloProductos(data);
            }
            getDocumento()
        },[])

    /*useEffect(() => {
                const querydb = getFirestore();
                const queryDoc = doc(querydb, 'items', '0xhI4aO8EPis7yTWbt0z');
                getDoc(queryDoc)
                .then(res => setProduct({ id: res.id, ...res.product() }))
            }, [])*/
            

    return (
        
        <ItemDetail product={product} />  
    );
}

export default ItemDetailContainer;