import React from 'react';
import '../styles/search.css';

const Search = ({ inputval, setinputval }) => {
  return (
    <div className="form__group">
      <input
        className="form__input"
        id="name"
        placeholder="Enter City name"
        required=""
        type="text"
        value={inputval}
        onChange={(e) => setinputval(e.target.value)}
      />
    </div>
  );
};

export default Search;
