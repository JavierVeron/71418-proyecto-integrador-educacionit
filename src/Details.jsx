import BackButton from "./BackButton"
import AddToCartButton from "./AddToCartButton"

const Details = () => {
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col">
                    <BackButton />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fdfc9163a92a4f778b157344867f01e4_9366/Zapatillas_SL_72_OG_Azul_IH0290_01_standard.jpg" alt="Zapatillas SL 72 OG" className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>Zapatillas SL 72 OG</h1>
                    <p>$ 171.999</p>
                    <p>Colores: Semi Cobalt Blue / Cream White / Hazy Green</p>
                    <p>Talles: S-M-L</p>
                    <AddToCartButton />
                </div>
            </div>
        </div>
    )
}

export default Details