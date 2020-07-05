import React from 'react';

import './style.css';
interface ISearch {
  searchQuery: (query: string) => void;
}

const Search: React.FC<ISearch> = ({ searchQuery }) => {
  const [searchText, setSearchText] = React.useState('');

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search characters"
          value={searchText}
          onChange={(e) => {
            const { value } = e.target;
            setSearchText(value);
            searchQuery(value);
          }}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
