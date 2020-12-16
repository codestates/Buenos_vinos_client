import Axios from 'axios';
import React from 'react';

const withAuth = (WrappedComponent) => ({ ...props }) => {
  const [state, setState] = React.useState('');

  React.useEffect(() => {
    const checkSignIn = async () => {
      await Axios({
        method: 'get',
        url: 'https://buenosvinosserver.ga/auth',
        withCredentials: true,
      })
        .then((res) => setState(res.data))
        .catch((err) => setState(err.data));
    };

    checkSignIn();
  }, []);

  return <WrappedComponent {...props} auth={state} />;
};

export default withAuth;
