import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchedList from './searchedList';
import axios from 'axios';
import NoResearch from '../../components/utility/noResearch';

function Search() {
  const location = useLocation();
  let searchedWine = location.search.slice(1);
  let splitedsearchedWine = searchedWine.split('%20');
  let searchResult = splitedsearchedWine.join(' ');
  const [searchedWines, setSearchedWines] = useState([]);

  console.log(searchResult);
  const getSearchResult = async (searchResult) => {
    const response = await axios.get(`https://buenosvinosserver.ga/wine?name=${searchResult}`);
    setSearchedWines(response.data);
  };
  useEffect(() => {
    getSearchResult(searchResult);
  }, [searchResult]);
  return <>{searchedWines.length ? <SearchedList wines={searchedWines} /> : <NoResearch />}</>;
}
export default Search;
