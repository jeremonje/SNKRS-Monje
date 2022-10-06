import React, { useEffect } from 'react';
import { doc, getDoc} from "firebase/firestore";
import { db } from '../../utils/firebase';

export const PaginaFirebase = () => {
    
    
    useEffect(()=>{
        const getDocumento = async()=>{
            const query = doc(db,"items","0xhI4aO8EPis7yTWbt0z");
            const response = await getDoc(query);
            const producto = {
                ...response.data(),
                id: response.id
            }
            console.log("productos", producto)
            
        }
        getDocumento()
    },[])

return (
    <div>PaginaFirebase</div>
    )
}
