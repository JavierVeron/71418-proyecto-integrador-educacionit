import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className="col-md-4">
            <div className="card border-0">
                <Link to={"/details/" + product.id}>
                    <img src={product.image} className="card-img-top" alt={product.title} />
                </Link>
                <div className="card-body">
                    <p className="card-text">{product.title}<br /><b>$ {product.price}</b><br /><span className="text-secondary">{product.colors.length} colores</span></p>
                </div>
            </div>
        </div>
    )
}

export default Item