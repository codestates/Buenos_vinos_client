import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../mainPage/useFetch';
import SearchedList from './searchedList';
import axios from 'axios';

function Search() {
  const location = useLocation();
  let searchedWine = location.search.slice(1);
  let splitedsearchedWine = searchedWine.split('%20');
  let searchResult = splitedsearchedWine.join(' ');
  const [searchedWines, setSearchedWines] = useState([]);
  const getSearchEnResult = async (searchResult) => {
    const response = await axios.get(`http://54.180.150.63:3000/wine?name_en=${searchResult}`);
    setSearchedWines(response.data);
  };
  const getSearchKrResult = async (searchResult) => {
    const response = await axios.get(`http://54.180.150.63:3000/wine?name=${searchResult}`);
    setSearchedWines(response.data);
  };
  console.log(searchedWines);
  useEffect(() => {
    getSearchKrResult(searchResult);
  }, [searchResult]);
  useEffect(() => {
    getSearchEnResult(searchResult);
  }, [searchResult]);
  return (
    <>
      <SearchedList wines={searchedWines} />
    </>
  );
}
export default Search;
