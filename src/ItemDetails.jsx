import BackButton from "./BackButton"
import AddToCartButton from "./AddToCartButton"
import SelectorColores from "./SelectorColores"
import SelectorTalles from "./SelectorTalles"
//import { useState } from "react"

const ItemDetails = ({product}) => {
    //const [colorSeleccionado, setColorSeleccionado] = useState("");
    //const [talleSeleccionado, setTalleSeleccionado] = useState(0);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-1">
                    <BackButton />
                </div>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{product.title}</h1>
                    <p>$ {product.price}</p>
                    <p>Colores:</p>
                    <p><SelectorColores items={product.colors} /></p>
                    <p>Talles:</p>
                    <p><SelectorTalles items={product.sizes} /></p>
                    <AddToCartButton id={product.id} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetails