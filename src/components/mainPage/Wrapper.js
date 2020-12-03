import React from 'react';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Wrapper({ wines }) {
  console.log(wines);
  const classes = useStyles();
  return (
    <>
      <div className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
        {wines.map((wine, index) => (
          <Item key={index} wine={wine} />
        ))}
      </div>
    </>
  );
}
