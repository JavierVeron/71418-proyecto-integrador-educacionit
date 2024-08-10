import { useContext, useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import Banner1 from "./Banner1"
import Banner2 from "./Banner2"
import Historia from "./Historia"
import ItemList from "./ItemList"
import { ProductContext } from "./data/context/ProductContext"

const Index = () => {
    const [items, setItems] = useState([]);
    const [searchText, setSearchText] = useState("");
    const {id} = useParams();
    const queryParams = useSearchParams();
    const {products} = useContext(ProductContext);
    
    useEffect(() => {
        if (queryParams[0].size > 0) {            
            setSearchText(queryParams[0].get("q").toLowerCase());
        }
    }, []);

    useEffect(() => {
        setItems(id ? products.filter(item => item.category == id) : products);
    }, [id])

    useEffect(() => {
        setItems(products.filter(item => item.title.toLowerCase().includes(searchText)));
    }, [searchText])

    return (
        <>
            <Banner1 />
            <div className="container my-5">
                <div className="row">
                    <ItemList products={items} />
                </div>
            </div>
            <Banner2 />
            <Historia />
        </>
    )
}

export default Index