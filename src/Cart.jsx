import { useSelector } from "react-redux"
import CartList from "./CartList";

const Cart = () => {
    const cart = useSelector(state => state);

    if (cart.length == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>No se encontraron Productos en el Carrito!</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <CartList />
    )
}

export default Cart