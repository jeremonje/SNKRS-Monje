import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const snkrs = [
    { id: 1, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc127c292/products/NI_DC4013-001/NI_DC4013-001-1.JPG", title: "Nike Air Max 97"},
    { id: 2, image: "https://www.dmsports.fr/17120-large_default/baskets-nike-air-max-plus-tn.jpg", title: "Nike Air Max plus"},
    { id: 3, image: "https://shoesandmorebdn.com/2113-large_default/nike-air-vapormax-flyknit-blancas.jpg", title: "Nike Air Vapormax"},
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