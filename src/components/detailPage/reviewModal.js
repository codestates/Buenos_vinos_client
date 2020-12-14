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

export default function TransitionsModal({ reviewInClose, toReview, setToReview, wineInfo }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [review, setReview] = React.useState('');
  const closeBtn = () => {
    setToReview(false);
  };
  const handleChange = (e) => {
    setReview(e.target.value);
  };
  console.log(localStorage);
  const handleSubmit = async (e) => {
    console.log('click');
    e.preventDefault();
    await axios({
      method: 'POST',
      url: 'https://buenosvinosserver.ga/comment',
      data: {
        wineId: wineInfo,
        comment: review,
        rating: value,
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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

            <Grid item xs={4} md={4} className={classes.gridLayout}>
              <Rating
                name="simple-controlled"
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
              <Button variant="outlined" onClick={handleSubmit}>
                와인 리뷰 남기기
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
