import "./search.scss";
import { useState } from "react";

const Search = ({getSearchTerm}) => {
	const [searchVal, setSearchVal] = useState("");

	const handleChange = (e) => {
		setSearchVal(e.target.value);
		getSearchTerm(e.target.value? e.target.value : "");
	}
	return (
		<div className="search">
			<input type="text" name="search" onChange={(e) => handleChange(e)} value={searchVal} />
			<label>Search User</label>
		</div>
	)
}

export default Search;