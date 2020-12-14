import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Container } from '@material-ui/core';
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
    width: ' 30%',
    height: '70%',
  },
  textFieldDiv: {
    textAlign: 'center',
  },
  textField: {
    '& > *': {
      margin: theme.spacing(1),
      width: 'auto',
      alignItems: 'center',
    },
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function Signin(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
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
        console.log('응답', res.data);
        Cookies.set('authorization', res.data.authorization);
        Cookies.set('userId', res.data.userId);
        alert('로그인 성공');
        props.signInClose();
      })
      .catch((err) => {
        alert('아이디 비밀번호를 다시 확인해주세요');
      });
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <TextField
    //     label="이메일"
    //     name="email"
    //     value={values.email}
    //     className={classes.textField}
    //     onChange={handleChange}
    //     type="email"
    //   />
    //   <TextField
    //     label="비밀번호"
    //     name="password"
    //     value={values.password}
    //     className={classes.textField}
    //     onChange={handleChange}
    //     type="password"
    //   />
    //   <Button variant="contained" style={{ width: '20vh', marginTop: '20px' }} type="submit">
    //     로그인
    //   </Button>
    // </form>
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <div className={classes.textFieldDiv}>
          <EmailIcon style={{ marginTop: '27px' }} />
          <TextField
            id="standard-basic"
            label="이메일"
            className={classes.textField}
            name="email"
            value={values.email}
            onChange={handleChange}
            type="email"
          />
        </div>
        <div className={classes.textFieldDiv}>
          <VpnKeyIcon style={{ marginTop: '27px' }} />
          <TextField
            id="standard-basic"
            label="비밀번호"
            name="password"
            value={values.password}
            className={classes.textField}
            onChange={handleChange}
            type="password"
          />
        </div>
        <Grid container justify="center">
          <Button variant="contained" style={{ width: '20vh', marginTop: '20px' }} type="submit">
            로그인
          </Button>
        </Grid>
      </form>
      <SocialSignIn signInClose={props.signInClose} />
    </Container>
  );
}