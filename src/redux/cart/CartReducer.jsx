import {AGREGAR_ITEM, QUITAR_ITEM, AUMENTAR_CANTIDAD, DECREMENTAR_CANTIDAD} from "./actions"

const cartState = [];

const CartReducer = (state = cartState, action) => {
    let newState = state;

    switch (action.type) {
        case AGREGAR_ITEM:
            let product = newState.find(item => item.id == action.payload);

            if (product) {
                product.cantidad++
            } else {
                newState.push({id:action.payload, cantidad:1});
            }
            
            return newState;
        
        case AUMENTAR_CANTIDAD:
            newState = state.map(item => {
                if (item.id == action.payload) {
                    return {
                        id:item.payload,
                        cantidad:item.cantidad+1
                    }
                } else {
                    return item
                }
            })

            return newState
        
        case QUITAR_ITEM:
            newState = state.filter(item => item.id != action.payload);
            
            return newState;
        
        case DECREMENTAR_CANTIDAD:
            newState = state.map(item => {
                if (item.id == action.payload) {
                    return {
                        id:item.payload,
                        cantidad:item.cantidad-1
                    }
                } else {
                    return item
                }
            })

            return newState
        
        default:
            newState;
    }
}

export default CartReducer