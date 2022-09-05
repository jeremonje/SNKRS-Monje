import React from 'react'

export const ItemDetail = ({title, description,Price,pictureUrl}) => {
    return (
        <div className='card'>
            <img src={pictureUrl} alt={title}/>
            <h1>{title}</h1>
            <p className='price'>${Price}</p>
            <p>{description}</p>
            <p><button>Add to cart</button></p>
        </div>
    )
}
