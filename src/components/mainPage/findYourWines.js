import React from 'react';
import coverImage from '../../image/1.jpg';
import { Container, Button, Typography, makeStyles, CssBaseline, Paper } from '@material-ui/core';

const FindYourWines = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(16),
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
                backgroundImage: `url(https://penzim.synology.me/image/finalProject/mainpage/findYourWines.jpg)`,
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
      <Paper className={classes.root} elevation={3}>
        <div>{children[1]}</div>
        <div>{children[2]}</div>
        <Button>찾기</Button>
      </Paper>
    </>
  );
};
export default FindYourWines;
