import MyProfile from '../components/user/myPage';
import MyTraking from '../components/user/myTracking';
import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyPage() {
  const [userInfo, setUserInfo] = useState('');

  const fetchData = () => {
    axios({
      method: 'get',
      url: 'https://buenosvinosserver.ga/user',
      withCredentials: true,
    })
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      style={{
        backgroundColor: '#E3DEF7',
        height: '100%',
        width: '100%',
        marginBottom: '10px',
        position: 'relative',
      }}
    >
      <MyProfile userInfo={userInfo} fetchData={fetchData}></MyProfile>
      <MyTraking userInfo={userInfo} fetchData={fetchData}></MyTraking>
    </Grid>
  );
}

export default MyPage;
