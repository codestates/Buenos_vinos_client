import { Container } from '@material-ui/core';
import axios from 'axios';
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
// import KakaoLogin from 'react-kakao-login';
// import { Google_ClientId, KakaoKey } from '../../config/config';
import React from 'react';
import { LogInStatus } from '../App';

axios.defaults.withCredentials = true;

function SocialSignIn(props) {
  const isLogIn = React.useContext(LogInStatus);

  // const googleRes = async (res) => {
  //   console.log(res);
  //   await axios({
  //     method: 'post',
  //     url: 'https://buenosvinosserver.ga/auth/login/google',
  //     data: {
  //       tokenId: res.tokenId,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data);
  //       isLogIn.setState({ status: true, id: res.data.userId });
  //       alert('로그인 성공');
  //       props.signInClose();
  //     })
  //     .catch((err) => console.error(err));
  // };

  const kakaoRes = (res) => {
    console.log(res);
    // setValues({
    //   id: res.profile.id,
    //   email: res.profile.kakao_account.email,
    //   nickname: res.profile.properties.nickname,
    //   provider: 'kakao',
    //   accessToken: res.response.access_token,
    // });
  };

  const failRes = (err) => {
    console.error(err);
  };

  return (
    <Container>
      {/* <GoogleLogin
        clientId={Google_ClientId}
        buttonText="구글로 로그인하기"
        onSuccess={googleRes}
        onFailure={failRes}
      />
      <KakaoLogin token={KakaoKey} onSuccess={kakaoRes} onFail={failRes} /> */}
    </Container>
  );
}

export default SocialSignIn;
