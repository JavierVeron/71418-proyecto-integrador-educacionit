import Banner1 from "./Banner1"
import Banner2 from "./Banner2"
import Historia from "./Historia"
import ItemList from "./ItemList"
import productosJson from "./assets/json/productos.json"

const Index = () => {
    return (
        <>
        <Banner1 />
        <ItemList products={productosJson} />
        <Banner2 />
        <Historia />
        </>
    )
}

export default Index