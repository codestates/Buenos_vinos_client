import Axios from 'axios';
import React from 'react';

const withAuth = (WrappedComponent) => ({ ...props }) => {
  const [state, setState] = React.useState('');

  const checkSignIn = async () => {
    await Axios({
      method: 'get',
      url: 'https://buenos.haebae.kr/auth',
      withCredentials: true,
    })
      .then((res) => setState(res.data))
      .catch((err) => setState(err.data));
  };

  return <WrappedComponent {...props} auth={{ state, checkSignIn }} />;
};

export default withAuth;
