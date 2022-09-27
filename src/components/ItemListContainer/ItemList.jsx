import React from 'react'
import { Item } from './Item'

export const ItemList = ({items}) => {
    return (
        <>
            {
            items.map(producto=>(<Item key={producto.id} item={producto}/>))
            }
        </>
    )
}
