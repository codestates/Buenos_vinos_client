import { Button } from '@material-ui/core';
import Axios from 'axios';
import Cookies from 'js-cookie';

function MyPage() {
  const handleClick = () => {
    console.log(Cookies.get('authorization'));
    console.log(Cookies.get('userId'));
    Axios({
      method: 'get',
      url: 'http://54.180.150.63:3000/user',
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      Hello, I'm MyPage!
      <Button onClick={handleClick}>GET INFO TEST</Button>
    </div>
  );
}

export default MyPage;
