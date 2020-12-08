import React from 'react';
import { Link } from 'react-router-dom';
import copyPhoto from '../../image/copyPhoto.png';
import {
  Container,
  Button,
  Typography,
  makeStyles,
  CssBaseline,
  Paper,
  Divider,
} from '@material-ui/core';

const FindYourWines = (props) => {
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
    button: {
      padding: 6,
      marginLeft: 5,
    },
    link: {
      textDecoration: 'unset',
      alignSelf: 'center',
    },
  }));

  const handleClick = () => {
    console.log('click');
  };

  const classes = useStyles();

  return (
    <>
      <div>{props.children[0]}</div>
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl" style={{ position: 'relative', paddingTop: '2vh' }}>
            <Typography
              component="div"
              style={{
                // backgroundImage: `url(https://penzim.synology.me/image/finalProject/mainpage/findYourWines.jpg)`,
                backgroundImage: `url(${copyPhoto})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '280px',
                minWidth: '889px',
                width: '100%',
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
                  fontFamily: 'Roboto',
                }}
              >
                Discover the Right Wine
              </Typography>
            </Typography>
          </Container>
        </React.Fragment>
      </div>
      <div className={classes.root}>
        <Paper className={classes.selectBar} elevation={3} style={{ borderRadius: 10 }}>
          <div className={classes.pairing}>{props.children[1]}</div>
          <Divider orientation="vertical" flexItem />
          <div>{props.children[2]}</div>cd
          <Divider orientation="vertical" flexItem />
          <Link to="/filter" className={classes.link}>
            <Button className={classes.button} onClick={handleClick}>
              찾기
            </Button>
          </Link>
        </Paper>
      </div>
    </>
  );
};
export default FindYourWines;
