import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export const ItemListContainer = ({greeting}) =>{
    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
            <h2>{greeting}</h2>
            <ItemCount initial={1} stock={9} onAdd={onAdd}/>
        </>    
    );
}
export default ItemListContainer;