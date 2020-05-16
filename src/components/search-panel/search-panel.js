import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    const searchText = 'search';
    return <input 
        type="text"
        className="form-control search-intput"
        placeholder={ searchText } />
};

export default SearchPanel;