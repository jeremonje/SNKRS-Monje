import React from 'react'
import { Item } from './Item'

export const ItemList = ({items}) => {
    return (
        <>
            {
            items.map((item)=><Item Key={item.id} {...item}/>)
            }
        </>
    )
}
