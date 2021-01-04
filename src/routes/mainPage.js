import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography, makeStyles, Paper, Divider, Grid, formatMs } from '@material-ui/core';
import Recommended from '../components/mainPage/recommended';
import Flavor from '../components/filteringPage/flavor';
import Pairings from '../components/filteringPage/pairingsDropDown';
import mainCover from '../image/mainCover.jpg';
import beefImg from '../image/beefImg.jpg';
import seaFood from '../image/seaFood.jpg';
import backgroundImg from '../image/backgroundImg.jpg';
import centerImg from '../image/centerImg.jpg';
import backgroundImgOfEx from '../image/backgroundImgOfEx.jpg';
import search from '../image/search.gif';
import detailPage from '../image/detailPage.gif';
import hargton from '../fonts/hargton/HARNGTON.woff';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  selectBar: {
    width: 'auto',
    height: theme.spacing(14),
    margin: theme.spacing(3),
    display: 'inline-flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    padding: 12,
  },
  pairing: {
    alignSelf: 'center',
  },
  button: {
    padding: 6,
    marginLeft: 5,
  },
  link: {
    textDecoration: 'unset',
    alignSelf: 'center',
  },
  layout: {
    margin: 3,
    padding: 6,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 800,
    borderRadius: '15px',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    maxWidth: '100%',
    maxHeight: '170px',
  },
}));

function MainPage() {
  const [flavorState, setFlavorState] = React.useState({
    sweet: [1, 5],
    acidic: [1, 5],
    body: [1, 5],
  });

  const [pairingsState, setPairingsState] = React.useState({
    beef: [false, '소고기'],
    pork: [false, '돼지고기'],
    poultry: [false, '가금류'],
    fish: [false, '생선'],
    seafood: [false, '해산물'],
    pasta: [false, '파스타'],
    cheese: [false, '치즈'],
    fruit: [false, '과일'],
    vagetable: [false, '야채'],
  });

  const selectOnePairing = (e) => {
    setPairingsState((prevState) => {
      for (let key in prevState) {
        prevState[key][0] = false;
      }
      return { ...prevState, [e]: [true, prevState[e][1]] };
    });
  };

  const selectFlavor = (e, value) => {
    setFlavorState({ ...flavorState, [e]: value });
  };

  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: './filter',
      state: {
        flavorState: flavorState,
        pairingsState: pairingsState,
      },
    });
  };

  const classes = useStyles();
  return (
    <>
      <div>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <div style={{ position: 'relative' }}>
              <Typography
                component="div"
                style={{
                  // backgroundImage: `url(https://penzim.synology.me/image/finalProject/mainpage/mainbanner.png)`,
                  backgroundImage: `url(${mainCover})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '800px',
                  width: '100%',
                }}
              />
              <Typography
                component="div"
                style={{
                  textAlign: 'center',
                  position: 'absolute',
                  top: '10%',
                  left: '25%',
                  color: 'white',
                  transform: 'translate( -50%, -50% )',
                }}
              >
                <Typography
                  style={{
                    fontSize: '80px',
                    textShadow: '1px 1px 2px black',
                    fontFamily: 'Dancing Script',
                    padding: '0 15px',
                  }}
                >
                  Discover the Right Wine
                </Typography>
              </Typography>
              <Typography
                component="div"
                style={{
                  position: 'absolute',
                  top: '70%',
                  left: '80%',
                  color: 'white',
                  transform: 'translate( -50%, -50% )',
                }}
              >
                <Typography
                  style={{
                    fontSize: '50px',
                    textShadow: '1px 1px 2px black',
                    fontFamily: 'Bebas Neue',
                    padding: '0 15px',
                  }}
                >
                  <div style={{ position: 'relative', top: '40px', width: 500 }}>
                    <Typography variant="h5" style={{ marginBottom: '2vh' }}>
                      부에노스 비노스에 방문하신걸 환영합니다.
                    </Typography>
                    <Typography variant="h4" style={{ marginBottom: '2vh' }}>
                      쉽고 빠르게 당신의 와인을 찾아드립니다.
                    </Typography>
                    <Typography style={{ fontSize: '1.4rem', fontFamily: 'Poor Story' }}>
                      Buenos Vinos는 한국어로 좋은 와인들 이라는 뜻입니다. 저렴하면서도 질 좋은
                      와인들이 수입되기 시작한지가 오래되었지만, 아직 많은 사람들이 와인을
                      어려워하는 경향이 있습니다. 저희는 이러한 진입장벽을 무너뜨리는데 도움이 될 수
                      있는 서비스입니다.
                    </Typography>
                  </div>
                </Typography>
              </Typography>
            </div>
          </Grid>

          {/* <Grid container item xs={4}>
            <div style={{ position: 'absolute', backgroundColor: 'white', height: '800px' }}>
              <div
                style={{
                  position: 'relative',
                  top: '0%',
                  left: '50%',
                  backgroundColor: 'yellow',
                  height: '800px',
                  width: '50%',
                  zIndex: 2,
                }}
              ></div>

              <div
                style={{
                  position: 'relative',
                  left: '-25%',
                  marginTop: '-700px',
                  backgroundColor: 'black',
                  color: 'white',
                  zIndex: 3,
                  padding: 20,
                  height: 400,
                  borderRadius: '15px',
                }}
              >
                <div style={{ position: 'relative', top: '40px', textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    style={{ marginBottom: '2vh', background: '#E12E4B', height: '6vh' }}
                  >
                    <div style={{ position: 'relative', top: '1.2vh' }}>
                      부에노스 비노스에 방문하신걸 환영합니다.
                    </div>
                  </Typography>
                  <Typography variant="h4" style={{ marginBottom: '3vh', textAlign: 'center' }}>
                    쉽고 빠르게 당신의 와인을 찾아드립니다.
                  </Typography>
                  <Typography style={{ fontSize: '1.4rem' }}>
                    Buenos Vinos는 한국어로{' '}
                    <span style={{ fontSize: '2rem', color: '#E12E4B' }}>좋은 와인들</span>
                    이라는 뜻입니다. 저렴하면서도 질 좋은 와인들이 수입되기 시작한지가 오래되었지만,
                    <span style={{ textDecoration: 'underline' }}>
                      아직 많은 사람들이 와인을 어려워하는 경향이 있습니다.
                    </span>{' '}
                    저희는 이러한 진입장벽을 무너뜨리는데 도움이 될 수 있는 서비스입니다.
                  </Typography>
                </div>
              </div>
            </div>
          </Grid> */}
        </Grid>
      </div>
      <div>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <div style={{ position: 'relative' }}>
              <Typography
                component="div"
                style={{
                  backgroundImage: `url(${backgroundImgOfEx})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '1000px',
                  width: '100%',
                }}
              />
              <Typography
                component="div"
                style={{
                  textAlign: 'center',
                  position: 'absolute',
                  top: '50%',
                  left: '15%',
                  color: 'black',
                  transform: 'translate( -50%, -50% )',
                  width: '300px',
                }}
              >
                <Typography
                  style={{
                    backgroundColor: '#D2D5D9',
                    fontSize: '35px',
                    textShadow: '1px 1px 2px black',
                    fontFamily: 'Poor Story',
                    padding: '30px',
                    height: '1000px',
                    display: 'table',
                    opacity: 0.7,
                  }}
                >
                  <div style={{ position: 'relative', top: '230px' }}>
                    음식에 맞는 와인 <br /> <br />
                    와인에 맞는 음식
                    <br />
                    <br />
                    어떤 것을 <br />
                    먼저 고르셔도
                    <br />
                    <br /> 이곳에서
                    <br /> 찾아보세요.
                  </div>
                </Typography>
              </Typography>

              <Typography
                component="div"
                style={{
                  textAlign: 'center',
                  position: 'absolute',
                  top: '55%',
                  left: '62%',
                  color: 'white',
                  transform: 'translate( -50%, -50% )',
                  width: '1448px',
                }}
              >
                <Recommended />
                <div className={classes.root}>
                  <Paper className={classes.selectBar} elevation={3} style={{ borderRadius: 10 }}>
                    <Pairings selectOnePairing={selectOnePairing} />
                    <Divider orientation="vertical" flexItem />
                    <Flavor selectFlavor={selectFlavor} flavorState={flavorState} />
                    <Divider orientation="vertical" flexItem />
                    <Button className={classes.button} onClick={handleClick}>
                      찾기
                    </Button>
                  </Paper>
                </div>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid>
          <Grid container item xs={12}>
            <Grid item xs={4}>
              <div style={{ position: 'relative' }}>
                <Typography
                  component="div"
                  style={{
                    backgroundImage: `url(${beefImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '950px',
                    width: '100%',
                  }}
                />
                <Typography
                  component="div"
                  style={{
                    textAlign: 'center',
                    position: 'absolute',
                    top: '90%',
                    left: '20%',
                    color: 'white',
                    transform: 'translate( -50%, -50% )',
                  }}
                >
                  <Typography
                    style={{
                      fontSize: '40px',
                      textShadow: '1px 1px 2px black',
                      fontFamily: 'Dancing Script',
                      padding: '0 15px',
                    }}
                  >
                    Beef
                  </Typography>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ position: 'relative' }}>
                <Typography
                  component="div"
                  style={{
                    backgroundImage: `url(${centerImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '950px',
                    width: '100%',
                  }}
                />
                <Typography
                  component="div"
                  style={{
                    textAlign: 'center',
                    position: 'absolute',
                    top: '23%',
                    left: '50%',
                    color: 'black',
                    transform: 'translate( -50%, -50% )',
                  }}
                >
                  <Typography
                    style={{
                      fontSize: '45px',
                      textShadow: '1px 1px 2px black',
                      fontFamily: 'Dancing Script',
                      padding: '20px',
                    }}
                  >
                    You can
                    <br />
                    easily find
                    <br />
                    the wine
                    <br />
                    that matches
                    <br /> the pairings
                    <br />
                    to eat
                  </Typography>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ position: 'relative' }}>
                <Typography
                  component="div"
                  style={{
                    backgroundImage: `url(${seaFood})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '950px',
                    width: '100%',
                  }}
                />
                <Typography
                  component="div"
                  style={{
                    textAlign: 'center',
                    position: 'absolute',
                    top: '90%',
                    left: '80%',
                    color: 'white',
                    transform: 'translate( -50%, -50% )',
                  }}
                >
                  <Typography
                    style={{
                      fontSize: '40px',
                      textShadow: '1px 1px 2px black',
                      fontFamily: 'Dancing Script',
                      padding: '0 15px',
                      width: 200,
                    }}
                  >
                    Sea food
                  </Typography>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <div style={{ position: 'relative' }}>
              <Typography
                component="div"
                style={{
                  backgroundImage: `url(${backgroundImg})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '1000px',
                  width: '100%',
                }}
              />
              <Typography
                component="div"
                style={{
                  textAlign: 'center',
                  position: 'absolute',
                  top: '10%',
                  left: '50%',
                  color: 'black',
                  transform: 'translate( -50%, -50% )',
                  width: '700px',
                }}
              >
                <Typography
                  style={{
                    fontSize: '60px',
                    textShadow: '1px 1px 2px black',
                    fontFamily: 'Bebas Neue',
                  }}
                >
                  How to use the Service
                </Typography>
              </Typography>
              <Typography
                component="div"
                style={{
                  textAlign: 'center',
                  position: 'absolute',
                  top: '40%',
                  left: '16%',
                  color: 'black',
                  transform: 'translate( -50%, -50% )',
                  width: '500px',
                }}
              >
                <Typography
                  style={{
                    backgroundColor: '#BF9280',
                    fontSize: '45px',
                    textShadow: '1px 1px 2px black',
                    fontFamily: 'Bebas Neue',
                    height: '500px',
                    width: '850px',
                    opacity: 0.7,
                  }}
                >
                  Search
                </Typography>
              </Typography>
              <Typography
                component="div"
                style={{
                  textAlign: 'center',
                  position: 'absolute',
                  top: '73%',
                  left: '65%',
                  color: 'black',
                  transform: 'translate( -50%, -50% )',
                  width: '500px',
                }}
              >
                <Typography
                  style={{
                    backgroundColor: '#BF9280',
                    fontSize: '45px',
                    textShadow: '1px 1px 2px black',
                    fontFamily: 'Bebas Neue',
                    height: '500px',
                    width: '850px',
                    opacity: 0.7,
                  }}
                >
                  detail
                </Typography>
              </Typography>
              <Typography
                component="div"
                style={{
                  position: 'absolute',
                  top: '41%',
                  left: '25.2%',
                  color: 'white',
                  transform: 'translate( -50%, -50% )',
                }}
              >
                <img src={search} style={{ width: 800, borderRadius: 10 }}></img>
              </Typography>
              <Typography
                component="div"
                style={{
                  position: 'absolute',
                  top: '74.5%',
                  left: '74.2%',
                  color: 'white',
                  transform: 'translate( -50%, -50% )',
                }}
              >
                <img src={detailPage} style={{ width: 800, borderRadius: 10 }}></img>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default MainPage;
