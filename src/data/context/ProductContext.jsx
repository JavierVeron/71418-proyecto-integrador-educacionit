import { createContext, useState } from "react";
//import {DataSources} from "../index";
import productos from "../sources/productos.json";

export const ProductContext = createContext([]);

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState(productos);

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider