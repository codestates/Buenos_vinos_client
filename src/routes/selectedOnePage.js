import SelectedOneDef from '../components/detailPage/selectedOneDef';
import Comment from '../components/detailPage/comment';
import SelectedOnePairings from '../components/detailPage/selectedOnePairings';
import { useLocation } from 'react-router-dom';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useState, useEffect } from 'react';
import DetailInfo from '../components/detailPage/detailInfo';
import ShowFlavor from '../components/detailPage/showFlavor';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import AllComments from '../components/detailPage/allComments';

function SelectedOnePage() {
  const location = useLocation();
  const searchResult = location.state;
  console.log(searchResult);
  const [styleAndPairingsInfo, setStyleAndPairingsInfo] = useState(true);
  const [wineInfo, setWineInfo] = useState(false);
  const [flavorInfo, setFlavorInfo] = useState(false);
  const [wineDetailInfo, setWineDetailInfo] = useState(false);
  const [showReview, setShowReview] = useState(false);
  console.log(styleAndPairingsInfo, wineInfo, flavorInfo, wineDetailInfo, showReview);

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
  }));
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ borderRadius: '15px' }}
      >
        <Grid item xs={10} md={10}>
          <Grid
            className={classes.text}
            container
            direction="row"
            alignItems="stretch"
            key={searchResult.id}
            style={{
              backgroundColor: '#FAF6EE',
              marginBottom: 10,
              height: '900px',
              borderRadius: '15px',
            }}
          >
            <Grid
              item
              xs={2}
              md={2}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FF9472',
                borderRadius: '15px',
                maxHeight: '870px',
              }}
            >
              <img src={searchResult.image} style={{ width: 100, height: 400 }} alt="wine" />
            </Grid>
            <Grid item xs={3} md={3} className={classes.text}>
              <Typography variant="h4" style={{ maxHeight: 80 }}>
                {searchResult.name}
              </Typography>
              <Typography variant="h6" style={{ maxHeight: 60 }}>
                ({searchResult.name_en})
              </Typography>
              <img
                src={searchResult.country.image}
                style={{ width: 15, height: 15 }}
                alt="country"
              />
              <Typography variant="h6" style={{ display: 'inline', paddingLeft: 5 }}>
                {`${searchResult.country.name}산 ${searchResult.type.name}`}
                <br />
              </Typography>

              <ShowFlavor searchResult={searchResult} />
              <Typography
                variant="h4"
                style={{
                  display: 'inline',
                  marginTop: 50,
                  paddingRight: 6,
                  verticalAlign: '2pt',
                }}
              >
                {searchResult.rating.toFixed(1)}
              </Typography>
              <Typography style={{ display: 'inline-block', marginTop: 50 }}>
                <Rating defaultValue={searchResult.rating} precision={0.1} readOnly />
              </Typography>
              <div className={classes.root}>
                <Button>
                  <GolfCourseIcon />
                  위시리스트에 추가하기
                </Button>
              </div>
              <Comment comments={searchResult.comment} />
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <div className={classes.root}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setStyleAndPairingsInfo(true);
                    setFlavorInfo(false);
                    setWineInfo(false);
                    setWineDetailInfo(false);
                    setShowReview(false);
                  }}
                >
                  와인 스타일 및 추천 안주
                </Button>
              </div>
              <div className={classes.root}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setStyleAndPairingsInfo(false);
                    setFlavorInfo(false);
                    setWineInfo(true);
                    setWineDetailInfo(false);
                    setShowReview(false);
                  }}
                >
                  {searchResult.type.name} 와인 정보
                </Button>
              </div>
              <div className={classes.root}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setStyleAndPairingsInfo(false);
                    setFlavorInfo(true);
                    setWineInfo(false);
                    setWineDetailInfo(false);
                    setShowReview(false);
                  }}
                >
                  풍미 정보
                </Button>
              </div>
              <div className={classes.root}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setStyleAndPairingsInfo(false);
                    setFlavorInfo(false);
                    setWineInfo(false);
                    setWineDetailInfo(true);
                    setShowReview(false);
                  }}
                >
                  와인 상세 정보
                </Button>
              </div>
              <div className={classes.root}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setStyleAndPairingsInfo(false);
                    setFlavorInfo(false);
                    setWineInfo(false);
                    setWineDetailInfo(false);
                    setShowReview(true);
                  }}
                >
                  리뷰 모아보기
                </Button>
              </div>
              <Grid className={classes.text} item xs={12} md={12}>
                {styleAndPairingsInfo ? <SelectedOnePairings searchResult={searchResult} /> : null}
                {wineInfo ? (
                  <>
                    <Typography variant="h5">{searchResult.type.name} 와인 정보</Typography>
                    <br />
                    <Typography>{searchResult.type.type_content}</Typography>
                  </>
                ) : null}
                {flavorInfo ? <SelectedOneDef universalDef={searchResult.type} /> : null}
                {wineDetailInfo ? <DetailInfo searchResult={searchResult} /> : null}
                {showReview ? <AllComments comments={searchResult.comment} /> : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default SelectedOnePage;
