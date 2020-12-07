import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (setWines, url) => {
  const [loading, setLoading] = useState(false);
  const getWinesData = async () => {
    setLoading(true);
    const response = await axios.get(url);
    setWines(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getWinesData();
  }, []);

  return loading;
};

export default useFetch;
