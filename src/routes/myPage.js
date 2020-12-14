import MyProfile from '../components/user/myPage';
import MyTraking from '../components/user/myTracking';
import { Grid } from '@material-ui/core';

function MyPage() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      style={{
        backgroundColor: '#E3DEF7',
        height: '100%',
        width: '100%',
        marginBottom: '10px',
        position: 'relative',
      }}
    >
      <MyProfile></MyProfile>
      <MyTraking></MyTraking>
    </Grid>
  );
}

export default MyPage;
