import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '10px',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function WineRating({ rating }) {
  const [value, setValue] = React.useState(Number(rating));
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.root}
        style={{ fontSize: '25px', fontWeight: '400px', textAlign: 'center' }}
      >
        <Rating name="half-rating-read" defaultValue={value} precision={0.1} readOnly />
        {`${rating} / 5`}
      </div>
    </>
  );
}
