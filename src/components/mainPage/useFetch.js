import React, { useState, useEffect } from 'react';

const useFetch = (setWines, axios) => {
  const [loading, setLoading] = useState(false);
  const getWinesData = async () => {
    setLoading(true);
    const response = await axios;
    setWines(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getWinesData();
  }, []);

  return loading;
};

export default useFetch;
