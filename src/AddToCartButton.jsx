import { useDispatch, useSelector } from "react-redux"
import { agregarItem } from "./redux/cart/actions_types";

const AddToCartButton = ({id}) => {
    const items = useSelector(state => state);
    const dispatch = useDispatch();

    const agregarProducto = (id) => {        
        dispatch(agregarItem(id))
        console.log(items);
        
    }

    return (
        <button className="btn text-white bg-dark fs-6 fw-bold" onClick={() => {agregarProducto(id)}}>Añadir al Carrito</button>
    )
}

export default AddToCartButton