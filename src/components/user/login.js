import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Typography, Grid, Button, Container } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: ' 30%',
    height: '70%',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
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

export default function Signin({ signinModal, signinClose }) {
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
        signinClose();
        alert('로그인 성공');
      })
      .catch((err) => {
        alert('아이디 비밀번호를 다시 확인해주세요');
      });
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signinModal}
        onClose={signinClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signinModal}>
          <div className={classes.paper}>
            <Typography variant="h3">
              <Button style={{ fontWeight: '700', fontSize: '1.5rem' }}>로그인</Button>|
              <Button style={{ fontWeight: '700', fontSize: '1.5rem' }}>회원가입</Button>
              <Button
                type="button"
                onClick={signinClose}
                style={{
                  backgroundColor: 'transparent',
                  border: '0',
                  float: 'right',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                }}
              >
                x
              </Button>
            </Typography>
            <Container maxWidth="sm">
              <EmailIcon style={{ marginTop: '27px' }} />
              <TextField
                id="standard-basic"
                label="Your email"
                className={classes.root}
                name="email"
                value={values.email}
                onChange={handleChange}
                type="email"
              />
              <VpnKeyIcon style={{ marginTop: '27px' }} />
              <TextField
                id="standard-basic"
                label="Your password"
                name="password"
                value={values.password}
                className={classes.root}
                onChange={handleChange}
                type="password"
              />
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
        </Fade>
      </Modal>
    </>
  );
}
