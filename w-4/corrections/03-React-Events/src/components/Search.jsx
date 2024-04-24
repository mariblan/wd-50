import { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  console.log(search);

  return (
    <input
      onFocus={() => console.log('search bar selected!')}
      onChange={handleChange}
      placeholder='Search...'
      value={search}
    />
  );
};

export default Search;
