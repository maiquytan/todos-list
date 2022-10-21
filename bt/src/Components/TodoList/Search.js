import React from 'react';
const Search = ({ searchText, setSearchText }) => {
    const changeSearch = (event) => {
        setSearchText(event.target.value);
    };
    return (
        <div >
            <input
                type=" text"
                className='task-input1'
                placeholder='Search todo... '
                onChange={changeSearch}               
                defaultValue={searchText}
            />
        </div>
    )
}
export default Search