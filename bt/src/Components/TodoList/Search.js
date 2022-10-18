import React from 'react';
import { useNavigate } from "react-router";

const Search = ({ searchText, setSearchText }) => {
    const navigate = useNavigate();

    const changeSearch = (event) => {
        setSearchText(event.target.value);
    };

    const searchKeyDown = (event) => {
        if (event.key === "Enter") {
            (searchText !== '') ? navigate(`/search/${searchText}`) : navigate('/')
        }
    };

    return (
        <div >
            <input
                type=" text"
                className='task-input1'
                placeholder='Search todo... '
                onChange={changeSearch}
                onKeyDown={searchKeyDown}
                defaultValue={searchText}
            />
        </div>
    )
}
export default Search