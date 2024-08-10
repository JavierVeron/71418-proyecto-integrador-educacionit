import Item from "./Item"

const ItemList = ({products}) => {
    return (
        <>
            {products.map(item => (
                <Item key={item.id} product={item} />
            ))}
        </> 
    )
}

export default ItemList