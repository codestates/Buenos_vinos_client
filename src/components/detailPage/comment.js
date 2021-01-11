import { Grid, makeStyles, Typography, Button, Paper } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Rating from '@material-ui/lab/Rating';
import SignModal from '../../components/user/SignModal';
import React, { useState } from 'react';
import ReviewModal from './reviewModal';
import AddReview from '../utility/addReview';
import SortDesc from '../utility/sortDesc';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    justifyContent: 'flex-end',
  },
  text: {
    padding: '10px',
    margin: '10px',
  },
  button: {
    display: 'inline',
    cursor: 'pointer',
  },

  layout: {
    minWidth: '350px',
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

function Comment({ comments, wineInfo, setCommentNum, commentNum, setSearchResult }) {
  const classes = useStyles();
  // 데이터 가공
  let sortedComments = SortDesc(comments, 'rating');
  let reviews = AddReview(sortedComments, 2);
  // console.log(AddReview(sortedComments, 2));
  // 모달창 구현
  const [signInModal, setSignModal] = useState(false);

  const signInOpen = () => {
    setSignModal(true);
    // console.log('sigin in click');
  };
  const signInClose = () => {
    setSignModal(false);
  };

  //리뷰 모달창 구현
  const [toReview, setToReview] = useState(false);
  const reviewInOpen = () => {
    setToReview(true);
    // console.log('review click');
  };

  const reviewInClose = () => {
    setToReview(false);
  };
  // 로그인 확인 여부
  const handleCheckLogin = async () => {
    await axios({
      method: 'get',
      url: 'https://buenos.haebae.kr/auth',
      withCredentials: true,
    })
      .then((res) => {
        // console.log('로그인된 상태');
        setToReview(true);
      })
      .catch((err) => {
        // console.log('로그인 안된 상태');
        setSignModal(true);
      });
  };
  return (
    <div style={{ marginTop: '3vh' }}>
      <Typography variant="h6">베스트 리뷰</Typography>
      {comments.length ? (
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          {reviews.map((comment) => (
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
      ) : (
        <Typography variant="h6">- 아직 리뷰가 없습니다. -</Typography>
      )}

      <div className={classes.root} style={{ display: 'flex', justify: 'text-end' }}>
        <Button variant="outlined" onClick={handleCheckLogin}>
          와인 리뷰 남기기
        </Button>
      </div>
      <ReviewModal
        wineInfo={wineInfo}
        reviewInClose={reviewInClose}
        toReview={toReview}
        setToReview={setToReview}
        setCommentNum={setCommentNum}
        commentNum={commentNum}
        setSearchResult={setSearchResult}
      />
      <SignModal signInModal={signInModal} signInClose={signInClose} />
    </div>
  );
}
export default Comment;
