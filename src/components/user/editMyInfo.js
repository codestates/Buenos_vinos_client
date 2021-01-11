import React, { useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import validate from '../utility/validate';

export default function EditInfo(props) {
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
      height: '25vh',
      width: '50vh',
    },
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
    userPassword: {
      marginRight: '23vh',
      fontSize: '25px',
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        marginTop: '5vh',
      },
    },
    submitBtn: {
      marginLeft: '22vh',
      marginTop: '4vh',
    },
    editBtn: {
      float: 'right',
      position: 'relative',
    },
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errors = validate({ [name]: value });
    setValues({ ...values, ...errors, [name]: value });
  };

  const [values, setValues] = useState({
    nickname: '',
    password: '',
    oldPassword: '',
    isPasswordVaild: false,
  });

  const isAllValid = () => {
    const { isPasswordVaild } = values;
    return isPasswordVaild;
  };

  //닉네임 변경 요청
  const handleSubmit = () => {
    const { nickname } = values;
    axios({
      method: 'patch',
      url: 'https://buenos.haebae.kr/user',
      data: {
        nickname,
      },
    })
      .then((res) => {
        // console.log(res);
        props.fetchData();
        nameClose();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //기존 비밀번호가 틀릴경우 true로 변경후 에러핸들링
  const [passwordCheck, setPasswordCheck] = useState(false);

  //비밀번호 변경 요청
  const handleChangepw = () => {
    const { password, oldPassword } = values;
    axios({
      method: 'post',
      url: 'https://buenos.haebae.kr/auth/changepw',
      data: {
        newPassword: password,
        oldPassword: oldPassword,
      },
    })
      .then((res) => {
        // console.log(res);
        passwordClose();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setPasswordCheck({ passwordCheck: true });
          // console.log('패스워드체크', passwordCheck);
        }
      });
  };

  //비밀번호 변경 모달
  const [passwordModal, setPasswordModal] = useState(false);
  const passwordOpen = () => {
    setPasswordModal(true);
  };

  const passwordClose = () => {
    setPasswordModal(false);
  };

  //닉네임 변경 모달
  const [nameModal, setNameModal] = useState(false);
  const nameOpen = () => {
    setNameModal(true);
  };

  const nameClose = () => {
    setNameModal(false);
  };

  const classes = useStyles();
  return (
    <>
      <Modal
        className={classes.modal}
        open={passwordModal}
        onClose={passwordClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={passwordModal}>
          <div className={classes.paper}>
            <form className={classes.root} onSubmit={handleChangepw}>
              <TextField
                error={passwordCheck}
                helperText={passwordCheck ? '비밀번호가 틀렸습니다' : ''}
                id="outlined"
                label="기존 비밀번호"
                variant="outlined"
                type="password"
                name="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
              />

              <TextField
                error={!values.isPasswordVaild && values.password !== ''}
                helperText={
                  !values.isPasswordVaild &&
                  values.password !== '' &&
                  '알파벳과 특수문자 포함 8자 이상 입력하세요'
                }
                id="outlined-basic"
                label="변경할 비밀번호"
                variant="outlined"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                color="primary"
                className={classes.submitBtn}
                onClick={handleChangepw}
                disabled={!isAllValid()}
              >
                완료
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
      <Modal
        className={classes.modal}
        open={nameModal}
        onClose={nameClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={nameModal}>
          <div className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="변경 할 닉네임"
                variant="outlined"
                name="nickname"
                value={values.nickname}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.submitBtn}
                onClick={handleSubmit}
              >
                완료
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>

      <Typography className={classes.title} variant="h4">
        회원정보 수정
      </Typography>
      <Grid container spacing={10} className={classes.infoText}>
        <Grid item xs={12}>
          <Typography component="span" className={classes.infoTitle}>
            이메일
          </Typography>
          <Typography component="span">{props.userInfo.email}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="span" className={classes.infoTitle}>
            회원명{' '}
          </Typography>
          <Typography component="span">{props.userInfo.nickname}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={nameOpen}
            className={classes.editBtn}
          >
            닉네임 수정
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography component="span" className={classes.userPassword}>
            비밀번호{' '}
          </Typography>
          <Typography component="span">******</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={passwordOpen}
            className={classes.editBtn}
          >
            비밀번호 변경
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
