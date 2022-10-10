import React, { useEffect, useState } from "react";  
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../utils/firebase';
//import { getArray } from "../helpers/getArray";
import { SpinnerComp } from "../Spinner/Spinner";

export const ItemDetailContainer = ()=>{
    const {itemId} = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        const getProduct = async () => {
            try {
                const query = doc(db, 'items', itemId);
                const response = await getDoc(query);
                const data = {
                    ...response.data(),
                    id: response.id
                }
                console.log(data)
                setItem(data);
            } catch (error) {
                console.log(`Error al intentar conectar con el servidor: ${error}`);
            } finally {
                setLoading(false);
            }
        }
        getProduct();
    },[itemId]);

    return(
        loading ? <SpinnerComp/> : <ItemDetail item={item}/>
    );
}