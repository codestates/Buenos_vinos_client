import WineArticle from '../components/searchPage/wineArticle';
import React, { useState, useEffect } from 'react';
import Search from '../components/searchPage/search';
import axios from 'axios';
function SearchResultPage() {
  const [rssDatas, setRssDatas] = useState([]);
  // useFecth 사용했을 때 에러?... 리펙토링 필요 부분.
  const [loading, setLoading] = useState([]);
  const apiUrl =
    `https://api.rss2json.com/v1/api.json?rss_url=` +
    encodeURIComponent('https://rss.blog.naver.com/wine21com.xml');
  // console.log(apiUrl);
  const getRssData = async () => {
    let res = await axios.get(apiUrl, {
      withCredentials: false,
    });
    setRssDatas(res.data.items);
  };

  useEffect(() => {
    setLoading(true);
    getRssData();
    setLoading(false);
  }, []);

  function makeChunkedDatas(rssDatas) {
    const chunkedDatas = [];
    let tempDatas = [];
    for (let i = 1; i < rssDatas.length + 1; i++) {
      tempDatas.push(rssDatas[i - 1]);
      if (i % 3 === 0) {
        chunkedDatas.push(tempDatas);
        tempDatas = [];
      }
    }
    return chunkedDatas;
  }

  const chunkedDatas = makeChunkedDatas(rssDatas);
  // console.log(chunkedDatas);
  return (
    <>
      <Search />
      <WineArticle chunkedArticles={chunkedDatas} loading={loading} />
    </>
  );
}

export default SearchResultPage;
