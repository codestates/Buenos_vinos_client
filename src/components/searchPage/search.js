import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchedList from './searchedList';
import axios from 'axios';
import NoResearch from '../../components/utility/noResearch';

function Search() {
  // 데이터 받아오는 방식 useLocation으로 받는다.
  const location = useLocation();
  // 가져온 데이터를 가공
  let searchedWine = location.search.slice(1);
  let splitedsearchedWine = searchedWine.split('%20');
  let searchResult = splitedsearchedWine.join(' ');
  const [searchedWines, setSearchedWines] = useState([]);
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
