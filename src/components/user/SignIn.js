import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Container } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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

  const handleSubmit = () => {
    const { email, password } = values;
    axios({
      method: 'post',
      url: 'http://54.180.150.63:3000/auth/login',
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log('응답', res);
        sessionStorage.setItem('userData', res.data);
        localStorage.setItem('logging', true);
        console.log(localStorage);
        props.signInClose();
        alert('로그인 성공');
      })
      .catch((err) => {
        alert('아이디 비밀번호를 다시 확인해주세요');
      });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <div className={classes.textFieldDiv}>
          <EmailIcon style={{ marginTop: '27px' }} />
          <TextField
            id="standard-basic"
            label="Your email"
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
            label="Your password"
            name="password"
            value={values.password}
            className={classes.textField}
            onChange={handleChange}
            type="password"
          />
        </div>
      </Container>
      <Grid container justify="center">
        <Button
          variant="contained"
          style={{ width: '20vh', marginTop: '20px' }}
          onClick={handleSubmit}
        >
          로그인
        </Button>
      </Grid>
    </div>
  );
}
