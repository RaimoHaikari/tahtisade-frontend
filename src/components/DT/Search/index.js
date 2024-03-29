import { useState } from "react";

const Search = ({ onSearch, seachStr = '' }) => {

    const [search, setSearch] = useState("");

    const onInputChange = value => {
        setSearch(value);
        onSearch(value);
    };
    
    return (
        <input
            type="text"
            className="form-control"
            style={{ width: "240px" }}
            placeholder="Search"
            value={seachStr}
            onChange={e => onInputChange(e.target.value)}
        />
    );
};

export default Search;