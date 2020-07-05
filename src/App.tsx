import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import Pagination from './components/Pagination';

const App = () => {
  const [characters, setCharacters] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchText, setSearchText] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const charactersPerPage = 8;
  const lastCharacterIndex = currentPage * charactersPerPage;
  const firstCharacterIndex = lastCharacterIndex - charactersPerPage;
  const currentCharacters: Array<Character> = characters.slice(
    firstCharacterIndex,
    lastCharacterIndex,
  );
  const onPaginate = (pageNumber: number) => setCurrentPage(pageNumber);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${searchText}`,
        );
        setCharacters(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, [searchText]);

  return (
    <div className="container">
      <Header />
      <Search searchQuery={(query) => setSearchText(query)} />
      <Card isLoading={isLoading} items={currentCharacters} />
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={characters.length}
        onPaginate={onPaginate}
      />
    </div>
  );
};

export default App;
