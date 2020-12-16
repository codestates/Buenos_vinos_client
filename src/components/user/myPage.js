import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function MyProfile(props) {
  const useStyles = makeStyles({
    nickName: {
      fontSize: '30px',
      marginTop: '30px',
    },
    myInfo: {
      paddingTop: '3rem',
      marginLeft: '10px',
    },
  });

  const classes = useStyles();
  return (
    <>
      <Container
        style={{
          backgroundColor: 'white',
          height: '50vh',
          marginTop: '15vh',
          marginLeft: '5%',
          marginRight: '0px',
          width: '1vh',
          minWidth: '400px',
          paddingTop: '20px',
          boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.16)',
          borderRadius: '10px',
        }}
      >
        <Grid container direction="column" alignItems="center" className={classes.myInfo}>
          <img src="https://penzim.synology.me/image/finalProject/profile/profile.png" />
          <Typography className={classes.nickName}>{props.userInfo.nickname} 님</Typography>
        </Grid>
      </Container>
    </>
  );
}
