import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetails from "./ItemDetails";
import { ProductContext } from "./data/context/ProductContext";

const Details = () => {
    const {products} = useContext(ProductContext);
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const product = products.find(item => item.id == id);
        setItem(product);
    }, [id])

    return (
        <ItemDetails product={item} />
    )
}

export default Details