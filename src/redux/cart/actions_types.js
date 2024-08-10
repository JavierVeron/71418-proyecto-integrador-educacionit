import {AGREGAR_ITEM, QUITAR_ITEM, AUMENTAR_CANTIDAD, DECREMENTAR_CANTIDAD} from "./actions"

export const agregarItem = (id) => ({
    type:AGREGAR_ITEM,
    payload:id
})

export const quitarItem = (id) => ({
    type:QUITAR_ITEM,
    payload:id
})

export const aumentarCantidad = (id) => ({
    type:AUMENTAR_CANTIDAD,
    payload:id
})

export const decrementarCantidad = (id) => ({
    type:DECREMENTAR_CANTIDAD,
    payload:id
})