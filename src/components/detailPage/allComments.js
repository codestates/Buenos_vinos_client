import React, { useState } from 'react';
import { Grid, makeStyles, Typography, Paper, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Rating from '@material-ui/lab/Rating';
import SlideToggle from 'react-slide-toggle';
import SortAsce from '../utility/sortAsce';
import SortDesc from '../utility/sortDesc';
import chunkedData from '../utility/chunkedData';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  text: {
    padding: '15px',
    margin: '10px',
  },
  button: {
    display: 'inline',
    cursor: 'pointer',
  },

  layout: {
    minWidth: '710px',
    borderRadius: '10px',
    margin: '1vh',
    padding: '2vh',
    backgroundColor: 'white',
    border: '3px FFF4D8 solid',
  },

  contentBox: {
    minHeight: '50px',
  },
  gridLayout: {
    marginBottom: 5,
  },
  accountInfo: {
    textAlign: 'center',
  },
}));
function AllComments({ comments }) {
  const classes = useStyles();
  const [descOrder, setDescOrder] = useState(true);
  const [asceOrder, setAsceOrder] = useState(false);
  const hadleDescClick = () => {
    console.log('desc click');
    setDescOrder(true);
    setAsceOrder(false);
  };

  const hadleAsceClick = () => {
    console.log('asce click');
    setDescOrder(false);
    setAsceOrder(true);
  };

  let sortedComments = null;
  if (descOrder && !asceOrder) {
    sortedComments = SortDesc(comments, 'rating');
  } else if (asceOrder && !descOrder) {
    sortedComments = SortAsce(comments, 'rating');
  }

  let chunkedDatas = chunkedData(sortedComments, 4);
  console.log(chunkedDatas);

  console.log(descOrder, asceOrder);

  return (
    <div style={{ marginTop: '3vh' }}>
      {comments.length ? (
        <>
          <Typography variant="h5">리뷰 모아보기</Typography>
          <div style={{ display: 'flex', marginBottom: 10 }}>
            <SlideToggle
              collapsed
              render={({ toggle, setCollapsibleElement }) => (
                <div className="my-collapsible" style={{ marginLeft: 'auto', marginRight: 15 }}>
                  <Button
                    variant="contained"
                    className="my-collapsible__toggle"
                    onClick={toggle}
                    style={{ backgroundColor: '#FEE089' }}
                  >
                    리뷰 순서
                  </Button>
                  <div className="my-collapsible__content" ref={setCollapsibleElement}>
                    <Button
                      variant="contained"
                      className="my-collapsible__content-inner"
                      style={{ display: 'block', backgroundColor: '#FFEBB0 ' }}
                      onClick={() => {
                        hadleDescClick();
                        toggle();
                      }}
                    >
                      높은 등급
                    </Button>
                    <Button
                      variant="contained"
                      className="my-collapsible__content-inner"
                      style={{ display: 'block', backgroundColor: '#FFEBB0 ' }}
                      onClick={() => {
                        hadleAsceClick();
                        toggle();
                      }}
                    >
                      낮은 등급
                    </Button>
                  </div>
                </div>
              )}
            />
          </div>

          <Grid container direction="column" justify="flex-start" alignItems="flex-start">
            {chunkedDatas.map((comment) => (
              <Paper key={comment.id} className={classes.layout}>
                <Grid container>
                  <Grid className={classes.accountInfo} item xs={2} md={2}>
                    <Grid>
                      <AccountCircleIcon style={{ width: 50, height: 50 }} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      {comment.user.nickname}
                    </Grid>
                  </Grid>
                  <Grid item xs={10} md={10} style={{ paddingLeft: 8 }}>
                    <Grid item xs={4} md={4} className={classes.gridLayout}>
                      <Rating name="read-only" value={comment.rating} readOnly size="small" />
                    </Grid>
                    <Grid className={classes.contentBox} item xs={12} md={12}>
                      {comment.content}
                    </Grid>
                    <Grid container item xs={12} md={12}>
                      <Grid item xs={8} md={8}>
                        {`${comment.createdAt.slice(0, 4)}년 ${comment.createdAt.slice(
                          5,
                          7,
                        )}월 ${comment.createdAt.slice(8, 10)}일`}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </>
      ) : (
        <Typography className={classes.accountInfo} variant="h6">
          - 아직 리뷰가 없습니다. -
        </Typography>
      )}
    </div>
  );
}
export default AllComments;
