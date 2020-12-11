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
  });

  const handleChange = (e) => {
    const errors = validate({ [e.target.name]: e.target.value });
    setValues({ ...values, ...errors, [e.target.name]: e.target.value });
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
    <form onSubmit={handleSubmit}>
      <TextField
        error={!values.isEmailVaild && values.email !== ''}
        helperText={!values.isEmailVaild && values.email !== '' && '올바른 이메일을 입력하세요'}
        onChange={handleChange}
        label="이메일"
        name="email"
        type="email"
      />
      <TextField
        error={!values.isNickNameVaild && values.nickname !== ''}
        helperText={!values.isNickNameVaild && values.nickname !== '' && '2글자 이상 입력하세요'}
        onChange={handleChange}
        label="닉네임"
        name="nickname"
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
      />
      <Button type="submit" disabled={!isAllVaild()}>
        회원가입
      </Button>
    </form>
  );
}

export default SignUp;
