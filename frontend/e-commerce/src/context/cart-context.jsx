import React, {createContext, useReducer} from "react";
import cartReducer,{sumItems} from "./cart-reducer";

const cartFromStorage = localStorage.getItem('cart') ? 
    JSON.parse(localStorage.getItem('cart')) : []

export const CartContext = createContext();

const initialState = { cartItems: cartFromStorage, ...sumItems(cartFromStorage)}

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    const addProduct = (product) => dispatch({type: 'ADD_ITEM', payload: product})
    const increaseProductCount = (product) => dispatch({type: "INCREASE_PRODUCT_COUNT", payload: product})
    const deleteProduct = (product) => dispatch({type: "DELETE_PRODUCT", payload: product})
    const decreaseProduct = (product) => dispatch({type: "DECREASE_PRODUCT", payload: product})
    const clearCart = () => dispatch({type: "CLEAR_CART", payload: {}})

    const contextValues = {
        ...state,
        addProduct,
        increaseProductCount,
        increaseProductCount,
        decreaseProduct,
        deleteProduct,
        clearCart
    }
    return (
        <CartContext.Provider value={ contextValues} >
            {
                children
            }
        </CartContext.Provider>
    )
}

export default CartContextProvider