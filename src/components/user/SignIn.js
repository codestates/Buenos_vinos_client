import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Container, InputAdornment, Typography } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import SocialSignIn from './SocialSignIn';
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // width: '30%',
    height: '70%',
  },
  form: {
    textAlign: 'center',
  },
  textBox: {
    margin: '2px',
    minHeight: '70px',
    maxWidth: '250px',
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  btn: {
    display: 'flex',
    width: 'auto',
    minWidth: '250px',
    borderRadius: 5,
  },
  social: {
    marginTop: '20px',
  },
  errText: {
    textAlign: 'center',
    color: '#b2102f',
    height: 10,
    fontSize: 14,
  },
}));

export default function Signin(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    await axios({
      method: 'post',
      url: 'https://buenosvinosserver.ga/auth/login',
      data: {
        email,
        password,
      },
      withCredentials: true,
    })
      .then((res) => {
        // console.log('응답', res.data);
        alert('로그인 성공');
        Cookies.set('id', res.data.userId);
        props.signInClose();
      })
      .catch((err) => {
        // alert('아이디 비밀번호를 다시 확인해주세요');
        // console.error(err);
        setError(true);
      });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="이메일"
          className={classes.textBox}
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="비밀번호"
          name="password"
          value={values.password}
          className={classes.textBox}
          onChange={handleChange}
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
        />
        <Grid container justify="center">
          <Button variant="outlined" className={classes.btn} type="submit">
            로그인
          </Button>
        </Grid>
      </form>
      <Typography className={classes.errText}>
        {error && '이메일 혹은 비밀번호를 확인해주세요'}
      </Typography>
      <div className={classes.social}>
        <SocialSignIn signInClose={props.signInClose} />
      </div>
    </Container>
  );
}
