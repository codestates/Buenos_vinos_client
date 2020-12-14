import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { userData } from '../../userData';
import axios from 'axios';

export default function EditInfo() {
  const useStyles = makeStyles({
    title: {
      padding: '1rem',
      fontWeight: '600',
    },
    infoText: {
      padding: '1rem',
      marginTop: '1vh',
    },
    infoTitle: {
      marginRight: '25vh',
      fontSize: '25px',
    },
  });

  const [userInfo, setUserInfo] = useState('');
  const fetchData = () => {
    axios(
      {
        method: 'get',
        url: 'http://54.180.150.63:3000/user',
      },
      { withCredentials: true },
    )
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h4">
        회원정보 수정
      </Typography>
      <Grid container spacing={10} className={classes.infoText}>
        <Grid item xs={12}>
          <Typography component="span" className={classes.infoTitle}>
            회원명{' '}
          </Typography>
          <Typography component="span">{userData[0].nickname}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="span" className={classes.infoTitle}>
            이메일
          </Typography>
          <Typography component="span">{userData[0].email}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="span" className={classes.infoTitle}>
            비밀번호{' '}
          </Typography>
          <Typography component="span">******</Typography>
        </Grid>
      </Grid>
    </>
  );
}
