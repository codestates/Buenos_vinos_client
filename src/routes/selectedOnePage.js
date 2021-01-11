import SelectedOneDef from '../components/detailPage/selectedOneDef';
import Comment from '../components/detailPage/comment';
import SelectedOnePairings from '../components/detailPage/selectedOnePairings';
import { useLocation } from 'react-router-dom';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import DetailInfo from '../components/detailPage/detailInfo';
import ShowFlavor from '../components/detailPage/showFlavor';
import AllComments from '../components/detailPage/allComments';
import SignModal from '../components/user/SignModal';
import axios from 'axios';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Cookies from 'js-cookie';

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

function SelectedOnePage() {
  //검색결과 데이터 가져오기
  const location = useLocation();
  const [searchResult, setSearchResult] = useState(location.state);
  // 버튼 구현
  const [styleAndPairingsInfo, setStyleAndPairingsInfo] = useState(true);
  const [wineInfo, setWineInfo] = useState(false);
  const [flavorInfo, setFlavorInfo] = useState(false);
  const [wineDetailInfo, setWineDetailInfo] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [commentNum, setCommentNum] = useState(searchResult.comment.length);

  // 즐겨찾기 추가
  let confirmId = Cookies.get('id');
  function checkWishlist(wine, confirmId) {
    for (let i = 0; i < wine.wishlist.length; i++) {
      if (wine.wishlist[i].id === Number(confirmId)) {
        return true;
      } else {
        return false;
      }
    }
  }
  // console.log(checkWishlist(searchResult, confirmId));
  const [favorite, setFavorite] = useState(checkWishlist(searchResult, confirmId));
  // 로그인 모달 구현
  const [signInModal, setSignModal] = useState(false);
  // console.log('쿠키 확인', confirmId, '와인 id', searchResult.id);
  const signInOpen = () => {
    setSignModal(true);
  };
  const signInClose = () => {
    setSignModal(false);
  };
  // 즐겨찾기 구현
  const favoriteCheck = () => {
    setFavorite(true);
  };
  const favoriteRemove = () => {
    setFavorite(false);
  };
  // console.log(searchResult);

  const classes = useStyles();
  const getSearchResult = async (search) => {
    const response = await axios.get(`https://buenos.haebae.kr/wine?name=${search}`);
    // console.log(response.data);
    location.state = response.data[0];
    setSearchResult(location.state);
  };

  useEffect(() => {
    if (commentNum !== searchResult.comment.length) {
      // console.log(' different num');
      getSearchResult(searchResult.name_en);
    }
  }, [commentNum]);

  const handleCheckLogin = async () => {
    await axios({
      method: 'get',
      url: 'https://buenos.haebae.kr/auth',
      withCredentials: true,
    })
      .then((res) => {
        // console.log('로그인된 상태');
        if (favorite) {
          //위시리스트가 아닌경우
          setFavorite(false);
        } else {
          // 위시리스트인 경우
          setFavorite(true);
        }
      })
      .catch((err) => {
        // console.log('로그인 안된 상태');
        setSignModal(true);
      });
  };

  // 위시리스트 추가
  const handleAddWishItem = async (e) => {
    await axios({
      method: 'post',
      url: `https://buenos.haebae.kr/wine/wishlist/${searchResult.id}`,
      params: {
        id: searchResult.id,
      },
      withCredentials: true,
    })
      .then((res) => {
        setFavorite(true);
        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // 위시리스트 삭제
  const handleDeleteWishItem = async (e) => {
    await axios({
      method: 'delete',
      url: `https://buenos.haebae.kr/wine/wishlist/${searchResult.id}`,
      params: {
        id: searchResult.id,
      },
      withCredentials: true,
    })
      .then((res) => {
        setFavorite(false);
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

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
                <Rating
                  value={searchResult.rating ? searchResult.rating : null}
                  // defaultValue={searchResult.rating ? searchResult.rating : null}
                  precision={0.1}
                  readOnly
                />
              </Typography>
              <div className={classes.root}>
                {favorite ? (
                  <Button
                    onClick={() => {
                      handleCheckLogin();
                      handleDeleteWishItem();
                    }}
                  >
                    <FavoriteIcon />
                    위시리스트 해제하기
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      handleCheckLogin();
                      handleAddWishItem();
                    }}
                  >
                    <FavoriteBorderIcon />
                    위시리스트 추가하기
                  </Button>
                )}
              </div>
              <SignModal signInModal={signInModal} signInClose={signInClose} />
              <Comment
                wineInfo={searchResult.id}
                comments={searchResult.comment}
                setCommentNum={setCommentNum}
                commentNum={commentNum}
                setSearchResult={setSearchResult}
              />
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
                    <Typography style={{ fontSize: '1.2rem' }}>
                      {searchResult.type.type_content}
                    </Typography>
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
