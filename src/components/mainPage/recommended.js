import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Carousel from 'react-material-ui-carousel';
import { fakeData } from '../../fakeData';
import Wrapper from './Wrapper';
import Item from './Item';

export default function Recommended() {
  const [wines, setWines] = useState(fakeData);
  console.log(typeof wines[0].rating, Number(wines[0].rating));
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
  console.log(chunkedWines);
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" style={{ alignItems: 'center' }}>
          <Typography
            component="div"
            style={{
              backgroundColor: '#FEF8EA',
              height: '44.5vh',
              borderRadius: '15px',
              justifyContent: 'center',
              alignContent: ' center',
            }}
          >
            <Carousel autoPlay={false} animation={'slide'} indicators={false}>
              {chunkedWines.map((wines, index) => (
                <Wrapper key={index} wines={wines} />
              ))}
            </Carousel>
          </Typography>
        </Container>
      </React.Fragment>
    </>
  );
}
