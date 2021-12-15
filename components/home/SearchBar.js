/* eslint-disable prettier/prettier */
import React from 'react';
import { icons } from '../../constants';
import { Search, SearchImage, TextField } from './home-components.style';

const SearchBar = () => {
    return (
        <Search>
            <SearchImage
                source={icons.search}
             />
        <TextField placeholder="Search Recipes" />

        </Search>
    );
};

export default SearchBar;
