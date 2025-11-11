
const storeCartItems = (cartItems) => {
    const cart = cartItems.length > 0 ? cartItems : []
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const sumItems = (cartItems) => {
    storeCartItems(cartItems)
    return {
        itemCount: cartItems.reduce((total,prod) =>  total + prod.quantity, 0),
        total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
}
const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            if (!state.cartItems.find(item => item.id === action.payload.id)){
                state.cartItems.push({
                    ...action.payload, 
                    quantity: 1})
            }             
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems([...state.cartItems])
            }
        case 'INCREASE_PRODUCT_COUNT':
            const p = state.cartItems.find(prod => prod.id === action.payload.id)
            if (p) {
                const reducedCart = state.cartItems.filter(prod => prod.id !== p.id)
                const updatedProduct = {...p, quantity: p.quantity + 1}
                const updatedCart = [...reducedCart, updatedProduct]
                // console.log(updatedCart)
                return {
                    ...state,
                    cartItems: updatedCart,
                    ...sumItems([...updatedCart])
                }
            }
        case 'DECREASE_PRODUCT':
            const pr = state.cartItems.find(prod => prod.id === action.payload.id)
            if (pr) {
                const reducedCart = state.cartItems.filter(prod => prod.id !== pr.id)
                const updatedProduct = {...pr, quantity: pr.quantity - 1}
                const updatedCart = [...reducedCart, updatedProduct]
                // console.log(updatedCart)
                return {
                    ...state,
                    cartItems: updatedCart,
                    ...sumItems(updatedCart)
                }
            }
        case 'DELETE_PRODUCT':
            const product = state.cartItems.find(prod => prod.id === action.payload.id)
            if (product) {
                const reducedCart = state.cartItems.filter(prod => prod.id !== product.id)
                const updatedCart = [...reducedCart]
                return {
                    ...state,
                    cartItems: updatedCart,
                    ...sumItems(updatedCart)
                }
            }
        case 'CLEAR_CART':
            console.log("clearing cart...")
            localStorage.removeItem('cart')
            return {
                ...state,
                cartItems: [],
                ...sumItems([])
            }
        default:
            return state
    }
}


export default cartReducer