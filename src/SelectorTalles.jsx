import { useEffect, useState } from "react"

const SelectorTalles = ({items}) => {
    const [talles, setTalles] = useState([]);

    useEffect(() => {
        items && setTalles(items);
    }, [items])

    return (
        <>
            {talles.map(talle => <button key={talle} className="btn btn-light mx-1">{talle}</button>)}
        </>
    )
}

export default SelectorTalles