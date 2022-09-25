import React, { useEffect, useState } from "react";  
/*import { getArray } from "../helpers/getArray";
import { array } from "../../data/data";*/
import { ItemDetail } from "./ItemDetail";
//import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"
import { /*getFirestore,*/ doc, getDoc } from "firebase/firestore"
import { db } from '../../utils/firebase';


export const ItemDetailContainer = () => {
        const [product, setProduct] = useState({});
        /*const [loading, setLoading] = useState(true)*/
        //const {itemId} = useParams();

        /*useEffect(()=>{
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
        },[])*/

    useEffect(() => {
        const getDocumento = async()=>{
                const query = doc(db, 'items', '0xhI4aO8EPis7yTWbt0z');
                getDoc(query)
                .then( res => setProduct(res.docs.map(product =>({ id: product.id, ...product.data() }))))
            }
            getDocumento()
            }, [])
            

    return (
        
        <ItemDetail product={product} />  
    );
}

export default ItemDetailContainer;