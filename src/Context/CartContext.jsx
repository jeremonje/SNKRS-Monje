import React, {createContext, useState, useContext} from 'react'
// const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)
export const CartContext = createContext();
const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);

    //const addProduct = (item,newQuantity) => {
    //    const newCart = cart.filter(prod => prod.id !== item.id);
    //    newCart.push({ ...item, quantity: newQuantity});
    //    setCart(newCart);
    //}
    

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, {...item, quantity }]);
        }
    }
    console.log('carrito: ', cart);

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.Price, 0);
    }
    const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true: false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const clearProductCartList = (id) => setCart(cart.filter(product => product.id !== id));

    const getTotalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.Price, 0);
    }
    // const getTotalPrice = ()=>{
    //     const totalPriceProducts = cart.reduce((acumulador, productoActual)=> acumulador + productoActual.totalPrice,0);
    //     console.log(totalPriceProducts);
    //     return totalPriceProducts;
    // }

    return (
        <CartContext.Provider value={{clearCart, isInCart, removeProduct, addProduct,totalPrice,totalProducts,cart,getTotalPrice, clearProductCartList }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider