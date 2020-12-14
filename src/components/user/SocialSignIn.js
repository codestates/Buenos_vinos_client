import { Container } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import { Google_ClientId, KakaoKey } from '../../config/config';

axios.defaults.withCredentials = true;

function SocialSignIn() {
  const [values, setValues] = useState({
    id: '',
    email: '',
    nickname: '',
    provider: '',
    accessToken: '',
    id_token: '',
  });

  const googleRes = (res) => {
    console.log(res);
    setValues({
      id: res.googleId,
      email: res.profileObj.email,
      nickname: res.profileObj.name,
      provider: 'google',
      accessToken: res.accessToken,
    });
  };

  const kakaoRes = (res) => {
    console.log(res);
    setValues({
      id: res.profile.id,
      email: res.profile.kakao_account.email,
      nickname: res.profile.properties.nickname,
      provider: 'kakao',
      accessToken: res.response.access_token,
    });
  };

  const failRes = (err) => {
    console.error(err);
  };

  return (
    <Container>
      <GoogleLogin
        clientId={Google_ClientId}
        buttonText="Google"
        onSuccess={googleRes}
        onFailure={failRes}
      />
      <KakaoLogin token={KakaoKey} onSuccess={kakaoRes} onFail={failRes} />
    </Container>
  );
}

export default SocialSignIn;
