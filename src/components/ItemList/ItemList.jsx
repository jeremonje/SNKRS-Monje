import React from "react";
import Item from "../Item/Item";

const ItemList = ({data = [] }) => {
    return (
        data.map(snkr => <Item key={snkr.id} info={snkr} />)
    );
}

export default ItemList;