import { useState } from "react";

const SearchBox = () => {
    const [searchText, setSearchText] = useState("");

    const setURL = () => {
        location.href = `http://${location.hostname}:5173/?q=${searchText}`; 
    }

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Buscar" onInput={(e) => {setSearchText(e.target.value)}} />
            <span className="input-group-text" onClick={setURL}>🔎</span>
        </div>
    )
}

export default SearchBox