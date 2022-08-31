import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const snkrs = [
    { id: 1, image: "https://o.remove.bg/downloads/22896af5-a313-48b5-b425-b1ecb3bc816a/NI_DC4013-001-1-removebg-preview.png", title: "Nike Air Max 97"},
    { id: 2, image: "https://o.remove.bg/downloads/803ac241-afa5-4afd-a2f6-07715a75f384/baskets-nike-air-max-plus-tn-removebg-preview.png", title: "Nike Air Max plus"},
    { id: 3, image: "https://o.remove.bg/downloads/732aac98-8511-4b35-8c66-2bd914834321/nike-air-vapormax-flyknit-849558-100-removebg-preview.png", title: "Nike Air Vapormax"},
];

export const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(snkrs);
            }, 2000);
        });
        getData.then(res => setData(res));


    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
            <h2>{greeting}</h2>
            <ItemCount initial={1} stock={9} onAdd={onAdd}/>
            <ItemList data={data} />
        </>    
    );
}

export default ItemListContainer;