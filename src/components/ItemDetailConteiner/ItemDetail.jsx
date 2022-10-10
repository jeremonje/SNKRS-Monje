import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import './itemdetail.css'


export const ItemDetail = ({item})=>{
    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const onAdd = (count)=>{
        addProduct(item,count);
        setQuantity(count);
    }

    return(
        <>
        <div className="card">
            <div className="imgBox">
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className="details">
                <div className="title">
                    <h3>{item.title} </h3><br/>
                </div>
                <div className="description">
                    <h4>Descripción</h4>
                    <p>{item.description}</p>
                </div>
                <div className="size">
                    <h4>Tallas disponibles</h4>
                    <ul>
                        <li className='li'>38</li>
                        <li className='li'>39</li>
                        <li className='li'>40</li>
                        <li className='li'>41</li>
                        <li className='li'>42</li>
                    </ul>
                </div>
                
                <div className="buy">
                    <div className="price">
                    <span>${item.Price}</span>
                    </div>
                    
</div><ItemCount initial={1} stock={10} onAdd={onAdd}/>
            {
                quantity>0 &&
                <Link to="/cart">
                    <button>Ir al carrito</button>
                </Link>
            }<Link to={`/productos/${item.category}`} className='Link'>Volver</Link>
                </div>
            </div>
        </>
    )
}
export default ItemDetail