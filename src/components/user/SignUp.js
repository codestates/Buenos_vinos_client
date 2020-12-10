import { Button, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import validate from '../utility/validate';

const useStyles = makeStyles({
  button: {},
  disabledBtn: {},
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
    isPasswordCorrect: false,
  });

  const handleChange = (e) => {
    const errors = validate({ [e.target.name]: e.target.value }, values.password);
    setValues({ ...values, ...errors, [e.target.name]: e.target.value });
  };
  // validate 함수로 입력값을 실시간으로 검사하여 조건에 맞지않으면 해당 state를 거짓으로 변경

  const isAllVaild = () => {
    const { isEmailVaild, isNickNameVaild, isPasswordVaild, isPasswordCorrect } = values;
    return isEmailVaild && isNickNameVaild && isPasswordVaild && isPasswordCorrect;
  };
  // 입력된 모든 값이 true인지 확인 후 true or false로 반환

  const renderSubmitBtn = () => {
    if (isAllVaild()) {
      return;
    }
    return;
  };

  const handleSubmit = (e) => {
    console.log('click');
    e.preventDefault();
    const { email, nickname, password } = values;
    axios({
      method: 'post',
      url: 'http://54.180.150.63:3000/user',
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
    <form onSubmit={handleSubmit}>
      <TextField
        error={!values.isEmailVaild && values.email !== ''}
        name="email"
        onChange={handleChange}
        label="이메일을 입력해주세요"
        type="email"
      />
      <TextField
        error={!values.isNickNameVaild && values.nickname !== ''}
        name="nickname"
        onChange={handleChange}
        label="닉네임을 입력해주세요"
      />
      <TextField
        error={!values.isPasswordVaild && values.password !== ''}
        name="password"
        onChange={handleChange}
        label="비밀번호를 입력해주세요"
        type="password"
      />
      <TextField
        error={!values.isPasswordCorrect && values.passwordCorrect !== ''}
        name="passwordCorrect"
        onChange={handleChange}
        label="비밀번호를 다시 입력해주세요"
        type="password"
      />
      <Button type="submit" disabled={!isAllVaild()}>
        회원가입
      </Button>
    </form>
  );
}

export default SignUp;
