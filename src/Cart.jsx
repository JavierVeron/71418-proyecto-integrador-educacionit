import ContinueButton from "./ContinueButton"
import CheckoutButton from "./CheckoutButton"

const Cart = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Zapatillas_Samba_OG_Blanco_B75806_01_standard.jpg" alt="" className="img-fluid" /></td>
                                <td>
                                    <p>Zapatillas Samba OG<br />$ 189.999<br />Color: Cloud White / Core Black / Clear Granite<br />Talla: 41 (UK 8.5)<br />Cantidad: 1</p>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-light">-</button>
                                        <button type="button" className="btn btn-light">1</button>
                                        <button type="button" className="btn btn-light">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Zapatillas_Samba_OG_Blanco_B75806_01_standard.jpg" alt="" className="img-fluid" /></td>
                                <td>
                                    <p>Zapatillas Samba OG<br />$ 189.999<br />Color: Cloud White / Core Black / Clear Granite<br />Talla: 41 (UK 8.5)<br />Cantidad: 1</p>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-light">-</button>
                                        <button type="button" className="btn btn-light">1</button>
                                        <button type="button" className="btn btn-light">+</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Tu Carrito:</td>
                            </tr>
                            <tr>
                                <td>2 artículos</td>
                            </tr>
                            <tr>
                                <td>Precio total de los productos</td>
                                <td>$100000</td>
                            </tr>
                            <tr>
                                <td>Gastos de envío</td>
                                <td><b>Gratis</b></td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td><b>$100000</b></td>
                            </tr>
                            <tr>
                                <td>
                                    <ContinueButton />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <CheckoutButton />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart