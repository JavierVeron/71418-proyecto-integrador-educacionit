import { useEffect, useState } from "react"

const SelectorColores = ({items}) => {
    const [colores, setColores] = useState([]);

    useEffect(() => {
        items && setColores(items);
    }, [items])

    return (
        <>
            {colores.map(color => <button key={color} className="btn btn-light mx-1">{color}</button>)}
        </>
    )
}

export default SelectorColores