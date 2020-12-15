import { Button, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import axios from 'axios';
import React from 'react';
import validate from '../utility/validate';

const useStyles = makeStyles({
  form: {
    textAlign: 'center',
  },
  textBox: {
    margin: '2px',
    minHeight: '70px',
    maxWidth: '250px',
  },
});

function SignUp() {
  const [values, setValues] = React.useState({
    email: '',
    isEmailVaild: false,
    nickname: '',
    isNickNameVaild: false,
    password: '',
    isPasswordVaild: false,
    passwordCorrect: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errors = validate({ [name]: value });
    setValues({ ...values, ...errors, [name]: value });
  };
  // validate 함수로 입력값을 실시간으로 검사하여 조건에 맞지않으면 해당 state를 거짓으로 변경

  const isAllVaild = () => {
    const { isEmailVaild, isNickNameVaild, isPasswordVaild, password, passwordCorrect } = values;
    return isEmailVaild && isNickNameVaild && isPasswordVaild && password === passwordCorrect;
  };
  // 입력된 모든 값이 true인지 확인 후 true or false로 반환

  const handleSubmit = async (e) => {
    console.log('click');
    e.preventDefault();
    const { email, nickname, password } = values;
    await axios({
      method: 'post',
      url: 'https://buenosvinosserver.ga/user',
      data: {
        email,
        nickname,
        password,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        error={!values.isEmailVaild && values.email !== ''}
        helperText={!values.isEmailVaild && values.email !== '' && '올바른 이메일을 입력하세요'}
        onChange={handleChange}
        label="이메일"
        name="email"
        type="email"
        // placeholder="이메일을 입력해주세요"
        value={values.email}
        className={classes.textBox}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        error={!values.isNickNameVaild && values.nickname !== ''}
        helperText={!values.isNickNameVaild && values.nickname !== '' && '2글자 이상 입력하세요'}
        onChange={handleChange}
        label="닉네임"
        name="nickname"
        value={values.nickname}
        className={classes.textBox}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        error={!values.isPasswordVaild && values.password !== ''}
        helperText={
          !values.isPasswordVaild &&
          values.password !== '' &&
          '알파벳과 특수문자 포함 8자 이상 입력하세요'
        }
        onChange={handleChange}
        label="비밀번호"
        name="password"
        type="password"
        value={values.password}
        className={classes.textBox}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VpnKeyIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        error={!(values.password === values.passwordCorrect) && values.passwordCorrect !== ''}
        helperText={
          !(values.password === values.passwordCorrect) &&
          values.passwordCorrect !== '' &&
          '동일한 비밀번호를 입력하세요'
        }
        onChange={handleChange}
        label="비밀번호 확인"
        name="passwordCorrect"
        type="password"
        value={values.passwordCorrect}
        className={classes.textBox}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CheckCircleIcon />
            </InputAdornment>
          ),
        }}
      />
      <div>
        <Button type="submit" variant="outlined" disabled={!isAllVaild()}>
          회원가입
        </Button>
      </div>
    </form>
  );
}

export default SignUp;
