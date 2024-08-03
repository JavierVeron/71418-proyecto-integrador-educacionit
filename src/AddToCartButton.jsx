import { Link } from "react-router-dom"

const AddToCartButton = () => {
    return (
        <Link to={"/cart"} className="btn text-white bg-dark fs-6 fw-bold">Añadir al Carrito</Link>
    )
}

export default AddToCartButton