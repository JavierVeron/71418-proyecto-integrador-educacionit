import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cuotas from "./Cuotas"
import Footer from "./Footer"
import Navbar from "./Navbar"
import UniteClub from "./UniteClub"
import Index from "./Index"
import Details from "./Details"
import Cart from "./Cart"
import ProductContextProvider from "./data/context/ProductContext"

function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Cuotas />
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Index />} />
          <Route path={"/category/:id"} element={<Index />} />
          <Route path={"/details/:id"} element={<Details />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
        <UniteClub />
        <Footer />
      </BrowserRouter>
    </ProductContextProvider>
  )
}

export default App