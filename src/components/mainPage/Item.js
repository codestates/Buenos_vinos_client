import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WineRating from './WineRaiting';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
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

export default function Item({ wine }) {
  const classes = useStyles();
  const history = useHistory();
  const onClick = (wine) => {
    // console.log(wine);
    history.push({
      pathname: './select',
      state: wine,
    });
  };
  return (
    <>
      <Grid item xs={2} style={{ padding: '5px', cursor: 'pointer' }} onClick={() => onClick(wine)}>
        <Paper className={classes.paper}>
          <Grid container spacing={1} style={{ height: '400px' }}>
            <Grid
              container
              spacing={1}
              style={{
                height: '180px',
                backgroundColor: '#CAC5D8',
                borderTopRightRadius: '15px',
                borderTopLeftRadius: '15px',
              }}
            >
              <Grid item style={{ margin: 'auto', display: 'block' }}>
                <img
                  className={classes.img}
                  alt="wines"
                  src={wine.image}
                  style={{
                    height: '200px',
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm container style={{ padding: '0px' }}>
              <Grid
                container
                spacing={1}
                justify="center"
                alignItems="center"
                style={{
                  paddingTop: '30px',
                  height: '88px',
                  backgroundColor: '#FAF6EE',
                }}
              >
                <Typography variant="body1" gutterBottom />
                <WineRating rating={wine.rating} />
              </Grid>
              <Grid
                container
                spacing={1}
                justify="center"
                style={{
                  paddingTop: '3px',
                  height: '150px',
                  backgroundColor: '#FAF6EE',
                  borderBottomRightRadius: '15px',
                  borderBottomLeftRadius: '15px',
                }}
              >
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body1" gutterBottom style={{ textAlign: 'center' }}>
                      <b>{wine.name}</b>
                      <br /> {<small>({wine.name_en})</small>}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{ textAlign: 'center' }}
                    >
                      <img
                        src={wine.country.image}
                        alt="수입 국가"
                        style={{ width: 10, height: 10 }}
                      ></img>
                      <small>{`${wine.country.name}산 ${wine.type.name}`}</small>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
