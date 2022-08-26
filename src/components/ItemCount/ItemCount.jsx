import React, { useEffect, useState } from "react";
import './ItemCount.css'

export const ItemCount = ({initial, stock, onAdd}) => {
    const[count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return(
        <>
            <div className="count">
                <div>
                    <img src={"./pexels-nike.webp"}
                    alt={ 'Nike'}
                    className="img"
                />
                </div>
                <button disabled={count <= 1} onClick={decrease}>-</button>
                <span>{count}</span>
                <button disabled={count >= stock}onClick={increase}>+</button>
                <div>
                    <button className="btn-1"disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>
        
        </>
    );
}

export default ItemCount;