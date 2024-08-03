import Item from "./Item"

const ItemList = ({products}) => {
    return (
        <div className="container my-5">
            <div className="row">
                {products.map(item => (
                    <Item key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default ItemList