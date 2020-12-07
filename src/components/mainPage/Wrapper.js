import React from 'react';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Wrapper({ wines, loading }) {
  const classes = useStyles();
  let winesData = <div style={{ padding: '180px' }}> loading...</div>;
  if (!loading) {
    winesData = wines.map((wine, index) => <Item key={index} wine={wine} />);
  }
  return (
    <>
      <div className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
        {winesData}
      </div>
    </>
  );
}
