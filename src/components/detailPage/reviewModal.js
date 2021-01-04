import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, makeStyles, Typography, Button, Paper } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#FAF6EE',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    justifyContent: 'flex-end',
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
  title: {
    marginBottom: '10px',
  },
}));

export default function ReviewModal({
  reviewInClose,
  toReview,
  setToReview,
  wineInfo,
  setCommentNum,
  commentNum,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [review, setReview] = React.useState('');
  // console.log(value);
  const closeBtn = (e) => {
    e.preventDefault();
    setToReview(false);
  };
  // 리뷰 내용 받는 함수
  const handleChange = (e) => {
    setReview(e.target.value);
  };
  // 리뷰 등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('submit click');
    await axios({
      method: 'POST',
      url: 'https://buenosvinosserver.ga/comment',
      data: {
        wineId: wineInfo,
        content: review,
        rating: value,
      },
      withCredentials: true,
    })
      .then((res) => {
        //res가 있으면 comment의 길이 변경을 알아 차린 후 다시 렌더링한다.
        if (res) {
          setCommentNum(commentNum + 1);
        }
        // console.log(res);
      })
      .catch((err) => console.error(err));
    setReview('');
    setValue(null);
    reviewInClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={toReview}
        onClose={reviewInClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={toReview}>
          <div className={classes.paper}>
            <div className={classes.title}>
              <Typography variant="h5" style={{ display: 'inline-block', marginLeft: 160 }}>
                와인 리뷰 등록
              </Typography>
              <Button
                type="button"
                onClick={closeBtn}
                style={{
                  backgroundColor: 'transparent',
                  border: '0',
                  float: 'right',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                }}
              >
                x
              </Button>
            </div>
            <Typography variant="h6" className={classes.title}>
              별점
            </Typography>

            <form
              name="review"
              onSubmit={() => {
                handleSubmit();
                reviewInClose();
              }}
            >
              <Grid item xs={4} md={4} className={classes.gridLayout}>
                <Rating
                  name="simple-controlled"
                  defaultValue={value}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Grid>
              <Typography variant="h6">리뷰</Typography>
              <Paper className={classes.layout}>
                <Grid container>
                  <textarea
                    name="comment"
                    placeholder="와인에 대한 평가를 남겨주세요."
                    rows="4"
                    cols="50"
                    maxLength="100"
                    style={{ border: 'none', resize: 'none', outline: 'none' }}
                    required
                    onChange={handleChange}
                    value={review}
                  />
                </Grid>
              </Paper>

              <div className={classes.root} style={{ display: 'flex', justify: 'text-end' }}>
                <Button variant="outlined" type="submit" onClick={handleSubmit}>
                  와인 리뷰 남기기
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
