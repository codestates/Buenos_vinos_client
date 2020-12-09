import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../utility/useFetch';
import SearchedList from './searchedList';
import axios from 'axios';

function Search() {
  const location = useLocation();
  let searchedWine = location.search.slice(1);
  let splitedsearchedWine = searchedWine.split('%20');
  let searchResult = splitedsearchedWine.join(' ');
  const [searchedWines, setSearchedWines] = useState([]);
  const getSearchResult = async (searchResult) => {
    const response = await axios.get(`http://54.180.150.63:3000/wine?name=${searchResult}`);
    setSearchedWines(response.data);
  };
  useEffect(() => {
    getSearchResult(searchResult);
  }, [searchResult]);
  return (
    <>
      <SearchedList wines={searchedWines} />
    </>
  );
}
export default Search;
