import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Carousel from 'react-material-ui-carousel';
import Wrapper from './Wrapper';
import useFetch from './useFetch';
export default function Recommended() {
  const [wines, setWines] = useState([]);
  const loading = useFetch(setWines, 'http://54.180.150.63:3000/wine');
  wines.sort((a, b) => {
    if (a.rating > b.rating) {
      return -1;
    }
    if (a.rating < b.rating) {
      return 1;
    }
    return 0;
  });
  function makeChunkedWines(wines) {
    const chunkedWines = [];
    let tempWines = [];
    for (let i = 1; i < wines.length + 1; i++) {
      tempWines.push(wines[i - 1]);
      if (i % 5 === 0) {
        chunkedWines.push(tempWines);
        tempWines = [];
      }
    }

    if (tempWines.length !== 0) {
      chunkedWines.push(tempWines);
    }

    return chunkedWines;
  }

  const chunkedWines = makeChunkedWines(wines);
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" style={{ alignItems: 'center' }}>
          <Typography
            component="div"
            style={{
              height: '44.5vh',
              borderRadius: '15px',
              justifyContent: 'center',
              alignContent: ' center',
            }}
          >
            <Carousel autoPlay={false} animation={'slide'} indicators={false}>
              {chunkedWines.map((wines, index) => (
                <Wrapper key={index} wines={wines} loading={loading} />
              ))}
            </Carousel>
          </Typography>
        </Container>
      </React.Fragment>
    </>
  );
}
