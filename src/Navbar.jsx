import { Link } from "react-router-dom"
import SearchBox from "./SearchBox"

const Navbar = () => {
    return (
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col">
                    <Link to={"/"}>
                        <svg width={60} viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg"><path  d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black"></path></svg>
                    </Link>
                </div>
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to={"/category/calzado"} className="nav-link active text-black fw-bold">Calzado</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/mujer"} className="nav-link text-black fw-bold">Mujer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/hombre"} className="nav-link text-black fw-bold">Hombre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/ninos"} className="nav-link text-black fw-bold" href="#">Niños</Link>
                        </li>
                    </ul>
                </div>
                <div className="col text-end">
                    <div className="row">
                        <div className="col-md-6 offset-md-5">
                            <SearchBox />
                        </div>
                        <div className="col-md-1 align-self-start">
                            <Link to={"/cart"}>
                                <i className="bi bi-bag"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar