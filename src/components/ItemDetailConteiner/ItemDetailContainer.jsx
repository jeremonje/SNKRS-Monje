import React, { useEffect, useState } from "react";  

import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../utils/firebase';


export const ItemDetailContainer = ()=>{
    const {itemId} = useParams();
    const [item, setItem] = useState({});
    

    useEffect(() => {
        const queryRef = doc(db, "items", itemId);
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            console.log(newDoc)
            setItem(newDoc)
        }).catch(error=>console.log(error));

        }, [itemId])
            

    return (
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;