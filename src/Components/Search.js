import React, {useState} from 'react'
// import { reset } from 'ansi-colors';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    
    const searchInputChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }

    const inputFieldResetHandler = () => {
        setSearchValue(""); 
    }

    const searchFunctionHandler = (e) => {
        e.preventDefault();
        props.search(searchValue);
        inputFieldResetHandler();

    }

    return(
        <form className = "search">
            <input
                value = {searchValue}
                onChange = {searchInputChangeHandler}
                type = "text"
            />

            <input onClick = {searchFunctionHandler} type = "submit" value = "SEARCH"/>
        </form>
    );
}

export default Search;