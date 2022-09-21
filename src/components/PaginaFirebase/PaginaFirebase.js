import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/firebase';

export const PaginaFirebase = () => {
    const [arregloProductos, setArregloProductos] = useState([]);

    //useEffect(()=>{
    //    const getData = async()=>{
    //        const query = collection(db,"items");
    //        const response = getDocs(query);
    //        const docs = (await response).docs;
    //        //console.log("doc info", docs[0].data())
    //        //console.log("doc id", docs[0].id)
    //        const data = docs.map(doc=>{return {...doc.data(), id:doc.id} })
    //        setArregloProductos(data);
    //    }
    //    getData()
    //},[])
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

return (
    <div>PaginaFirebase</div>
    )
}
