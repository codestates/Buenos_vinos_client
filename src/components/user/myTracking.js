import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, Button, Grid, Link } from '@material-ui/core';
import { userData } from '../../userData';
import { Rating } from '@material-ui/lab';
import EditInfo from '../../components/user/editMyInfo';
import axios from 'axios';

export default function MyTracking() {
  const useStyles = makeStyles({
    selectedBtn: {
      color: '#8e041a',
    },
    defalutColor: {
      color: '#58595b',
    },
    commentBox: {
      border: '1px solid black',
      borderRadius: '10px',
      height: '20vh',
      margin: '20px auto',
      fontSize: '30px',
      backgroundColor: '#fffcf8',
      textAlign: 'center',
    },
    wishBox: {
      border: '1px solid black',
      borderRadius: '10px',
      height: '21vh',
      margin: '20px auto',
      alignItems: 'center',
      backgroundColor: '#fffcf8',
    },
    wineImg: {
      height: '13.5vh',
    },
    commentTitle: {
      marginLeft: '10vh',
    },
    comment: {
      fontSize: '20px',
      margin: '8vh 50vh auto',
      position: 'absolute',
    },
    wishlistImg: {
      marginLeft: '40px',
    },
    nameRaing: {
      textAlign: 'left',
      marginLeft: '20px',
    },
    itemBox: {
      border: '1px solid #E3DEF7',
      marginTop: '3.5px',
      marginLeft: '20px',
      marginBottom: '2vh',
      borderRadius: '10px',
      backgroundColor: 'white',
    },
  });

  const [btn, setBtn] = useState({
    comment: false,
    myWines: false,
    editInfo: true,
  });

  const tabBtn = (key) => (e) => {
    if (btn[key]) {
      setBtn({ [key]: false });
    } else {
      setBtn({ [key]: true });
    }
  };

  const classes = useStyles();
  return (
    <>
      <Container
        style={{
          backgroundColor: 'white',
          height: '100vh',
          margin: '10vh ',
          width: '50%',
          marginTop: '10vh',
          paddingTop: '20px',
          left: '25%',
          boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.16)',
          marginLeft: '-7px',
          borderRadius: '10px',
        }}
      >
        <Link
          className={btn.editInfo ? classes.selectedBtn : classes.defalutColor}
          onClick={tabBtn('editInfo')}
          style={{
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            padding: '1rem',
            fontSize: '15px',
          }}
          component="button"
        >
          회원정보{' '}
        </Link>
        <Link
          className={btn.comment ? classes.selectedBtn : classes.defalutColor}
          onClick={tabBtn('comment')}
          style={{
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            padding: '1rem',
            fontSize: '15px',
          }}
          component="button"
        >
          내 댓글{' '}
        </Link>
        <Link
          className={btn.myWines ? classes.selectedBtn : classes.defalutColor}
          onClick={tabBtn('myWines')}
          style={{
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            padding: '1rem',
            fontSize: '15px',
          }}
          component="button"
        >
          위시리스트{' '}
        </Link>
        <hr />
        {btn.comment
          ? userData[0].comment.map(function (el) {
              return (
                <Grid className={classes.commentBox} container direction="row">
                  <Box p={1} className={classes.itemBox}>
                    <img className={classes.wineImg} src={el.wine.image} />
                    <Typography>{el.wine.name}</Typography>
                  </Box>
                  <Typography variant="h5" className={classes.commentTitle}>
                    나의 와인평가
                  </Typography>
                  <Typography className={classes.comment}>"{el.content}"</Typography>
                </Grid>
              );
            })
          : ''}
        {btn.myWines
          ? userData[0].wishlist.map(function (el) {
              return (
                <Grid container direction="row" className={classes.wishBox}>
                  <Box className={classes.wishlistImg}>
                    <img src={el.image}></img>
                  </Box>
                  <Grid className={classes.nameRaing} item xs={12} sm={4}>
                    <Typography>{el.name}</Typography>
                    <Typography>{el.type.name} 와인</Typography>
                    <Typography
                      variant="h4"
                      style={{
                        verticalAlign: '2pt',
                      }}
                    >
                      {el.rating.toFixed(1)}
                    </Typography>
                    <Typography>
                      <Rating
                        name="half-rating-read"
                        defaultValue={el.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    {el.content}
                  </Grid>
                </Grid>
              );
            })
          : ''}
        {btn.editInfo ? <EditInfo /> : ''}
      </Container>
    </>
  );
}
