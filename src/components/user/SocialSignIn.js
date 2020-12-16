import { Button, Container, makeStyles } from '@material-ui/core';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import { FaceBookAppId, Google_ClientId, KakaoKey } from '../../config/config';
import React from 'react';
import { LogInStatus } from '../App';
axios.defaults.withCredentials = true;
const useStyles = makeStyles({
  root: {
    textAlign: '-webkit-center',
    // padding: 0,
  },
  socialBtn: {
    cursor: 'pointer',
    display: 'flex',
    width: 'auto',
    minWidth: '250px',
    borderRadius: 5,
    margin: '5px',
  },
  btnImg: {
    width: '16px',
    height: '16px',
    margin: '4px',
  },
});
function SocialSignIn(props) {
  const isLogIn = React.useContext(LogInStatus);
  const classes = useStyles();
  const googleRes = async (res) => {
    console.log(res);
    await axios({
      method: 'post',
      url: 'https://buenosvinosserver.ga/auth/login',
      data: {
        google: res.tokenId,
      },
    })
      .then((res) => {
        console.log(res.data);
        isLogIn.setState({ status: true, id: res.data.userId });
        alert('로그인 성공');
        props.signInClose();
      })
      .catch((err) => console.error(err));
  };
  const kakaoRes = async (res) => {
    console.log(res);
    await axios({
      method: 'post',
      url: 'https://buenosvinosserver.ga/auth/login',
      data: {
        kakao: res.response.access_token,
      },
    })
      .then((res) => {
        console.log(res.data);
        alert('로그인 성공');
        props.signInClose();
      })
      .catch((err) => console.error(err));
  };
  const facebookRes = async (res) => {
    console.log(res);
    await axios({
      method: 'post',
      url: 'https://buenosvinosserver.ga/auth/login',
      data: {
        faceboodId: res.id,
        facebookToken: res.accessToken,
      },
    })
      .then((res) => {
        console.log(res.data);
        alert('로그인 성공');
        props.signInClose();
      })
      .catch((err) => console.error(err));
  };
  const failRes = (err) => {
    console.error(err);
  };
  return (
    <Container maxWidth="sm" className={classes.root}>
      <GoogleLogin
        clientId={Google_ClientId}
        buttonText="구글로 로그인하기"
        onSuccess={googleRes}
        onFailure={failRes}
        render={(renderProps) => (
          <Button
            className={classes.socialBtn}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            variant="outlined"
          >
            <img
              className={classes.btnImg}
              src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg"
              alt="google"
            />
            구글로 계속 진행
          </Button>
        )}
      />
      <FacebookLogin
        appId={FaceBookAppId}
        fields="name, email"
        callback={facebookRes}
        size="small"
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
        render={(renderProps) => (
          <Button
            className={classes.socialBtn}
            onClick={renderProps.onClick}
            variant="outlined"
            style={{ background: '#3b5998', color: 'white' }}
          >
            <img
              className={classes.btnImg}
              src="https://d3ptyyxy2at9ui.cloudfront.net/facebook-fadd25.svg"
              alt="facebook"
            />
            페이스북으로 계속 진행
          </Button>
        )}
      />
      <KakaoLogin
        token={KakaoKey}
        onSuccess={kakaoRes}
        onFail={failRes}
        render={(renderProps) => (
          <Button
            className={classes.socialBtn}
            onClick={renderProps.onClick}
            variant="outlined"
            style={{ background: '#F7E600' }}
          >
            <img
              className={classes.btnImg}
              src="http://penzim.synology.me/image/kakaotalk.svg"
              alt="kakao"
            />
            카카오톡으로 계속 진행
          </Button>
        )}
      />
    </Container>
  );
}
export default SocialSignIn;


