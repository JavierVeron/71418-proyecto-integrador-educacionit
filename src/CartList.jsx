import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductContext } from "./data/context/ProductContext";
import { quitarItem, aumentarCantidad, decrementarCantidad } from "./redux/cart/actions_types";

const CartList = ({}) => {
    const {products} = useContext(ProductContext);
    const cart = useSelector(state => state);
    const dispatch = useDispatch();

    const incrementarProducto = (id) => {
        dispatch(aumentarCantidad(id));
    }

    const decrementarProducto = (id) => {
        dispatch(decrementarCantidad(id));
    }

    const eliminarProducto = (id) => {
        dispatch(quitarItem(id))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                        {cart.map(item => {
                            let product = products.find(prod => prod.id == item.id)
                            
                            return (
                                <tr>
                                    <td><img src={product.image} alt={product.title} width={96} /></td>
                                    <td>{product.title}</td>
                                    <td>${product.price} X {item.cantidad}</td>
                                    <td><button className="btn text-white bg-dark fs-6 fw-bold" onClick={() => {decrementarProducto(product.id)}}>-</button> {item.cantidad} <button className="btn text-white bg-dark fs-6 fw-bold" onClick={() => {incrementarProducto(product.id)}}>+</button></td>
                                    <td>${product.price * item.cantidad}</td>
                                    <td><button className="btn text-white bg-dark fs-6 fw-bold" onClick={() => {eliminarProducto(product.id)}}><i class="bi bi-trash"></i></button></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CartList