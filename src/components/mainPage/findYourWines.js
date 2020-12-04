import React from 'react';
import { Container, Button, Typography, makeStyles, CssBaseline } from '@material-ui/core';
import copyPhoto from '../../image/copyPhoto.png';
import coverImage from '../../image/1.jpg';
import {
  Container,
  Button,
  Typography,
  makeStyles,
  CssBaseline,
  Paper,
  Divider,
} from '@material-ui/core';

const FindYourWines = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
    selectBar: {
      width: 'auto',
      height: theme.spacing(14),
      margin: theme.spacing(3),
      display: 'inline-flex',
      flexWrap: 'wrap',
      alignContent: 'center',
      padding: 12,
    },
    pairing: {
      alignSelf: 'center',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div>{children[0]}</div>
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl" style={{ position: 'relative' }}>
            <Typography
              component="div"
              style={{
                // backgroundImage: `url(https://penzim.synology.me/image/finalProject/mainpage/findYourWines.jpg)`,
                backgroundImage: `url(${copyPhoto})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '30vh',
              }}
            />
            <Typography
              component="div"
              style={{
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                color: 'white',
                transform: 'translate( -50%, -50% )',
              }}
            >
              <Typography
                style={{
                  fontSize: '60px',
                  textShadow: '1px 1px 2px black',
                }}
              >
                Discover <br /> the Right Wine
              </Typography>
            </Typography>
          </Container>
        </React.Fragment>
      </div>
      <div className={classes.root}>
        <Paper className={classes.selectBar} elevation={3} style={{ borderRadius: 10 }}>
          <div className={classes.pairing}>{children[1]}</div>
          <Divider orientation="vertical" flexItem />
          <div>{children[2]}</div>
          <Divider orientation="vertical" flexItem />
          <Button style={{ marginLeft: 5 }}>찾기</Button>
        </Paper>
      </div>
    </>
  );
};
export default FindYourWines;
