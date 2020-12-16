import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Carousel from 'react-material-ui-carousel';
import Wrapper from '../utility/Wrapper';
import useFetch from '../utility/useFetch';
import axios from 'axios';
import sortDesc from '../utility/sortDesc';
import chunkedDatas from '../utility/chunkedData';

export default function Recommended() {
  const [wines, setWines] = useState([]);
  const loading = useFetch(setWines, axios.get('https://buenosvinosserver.ga/wine'));
  const sortedList = sortDesc(wines, 'rating');
  const chunkedWines = chunkedDatas(sortedList, 5);

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
