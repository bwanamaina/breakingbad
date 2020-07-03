import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${searchText}`
        );
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, [searchText]);

  return (
    <div className='container'>
      <Header />
      <Search searchQuery={(query) => setSearchText(query)} />
      <Card isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
