import React from 'react';
import Item from './item';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Wrapper({ article, loading }) {
  const classes = useStyles();
  let articleData = <div style={{ padding: '180px' }}> loading...</div>;
  if (!loading) {
    articleData = article.map((article, index) => <Item key={index} article={article} />);
  }
  return (
    <>
      <div
        className={classes.root}
        style={{ display: 'flex', justifyContent: 'center', margin: '0px 100px 45px 100px' }}
      >
        {articleData}
      </div>
    </>
  );
}
