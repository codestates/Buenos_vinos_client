import React from 'react';
import coverImage from '../../image/1.jpg';
import Flavor from '../filteringPage/flavor';
import Pairings from '../filteringPage/pairings';
import { Container, Button, Typography, makeStyles, CssBaseline } from '@material-ui/core';

const FindYourWines = ({ children }) => {
  return (
    <>
      <div>{children[0]}</div>
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" style={{ position: 'relative' }}>
            <Typography
              component="div"
              style={{
                backgroundImage: `url(${coverImage})`,
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
      <div>{children[2]}</div>
      <div>{children[4]}</div>
      <Button>찾기</Button>
    </>
  );
};
export default FindYourWines;
