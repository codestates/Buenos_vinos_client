import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { fakeData } from '../../fakeData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  layout: {
    margin: 3,
    padding: 6,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    borderRadius: '15px',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    maxWidth: '100%',
    maxHeight: '170px',
  },
}));

export default function Item({ article }) {
  const classes = useStyles();

  function useWindowSize() {
    const isClient = typeof window === 'object';
    const [windowSize, setWindowSize] = useState(getSize);

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }

    useEffect(() => {
      if (!isClient) {
        return;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [isClient, getSize]);

    return windowSize;
  }
  console.log(article);
  let randomId = Math.floor(Math.random() * (10 - 1));
  const size = useWindowSize();
  return (
    <>
      <div className={classes.paper}>
        <Grid container>
          <Grid
            container
            style={{
              height: '250px',
              backgroundImage: `url(${fakeData[randomId].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px',
              backgroundColor: '#FAF6EE',
            }}
          ></Grid>
          <Grid
            container
            style={{
              padding: '15px',
              height: '80px',
              backgroundColor: '#FAF6EE',
              textAlign: 'center',
            }}
          >
            <Grid container spacing={1} justify="center" alignItems="center">
              <Typography variant="h6">{article.title}</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              paddingTop: '3px',
              height: '210px',
              backgroundColor: '#FAF6EE',
              borderBottomRightRadius: '15px',
              borderBottomLeftRadius: '15px',
              padding: 10,
            }}
          >
            <Grid item xs>
              <Typography variant="body2" gutterBottom style={{ textAlign: 'center' }}>
                {size.width < 1273 ? article.description.slice(0, 200) : article.description}
                ...
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
