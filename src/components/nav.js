import React, { useState, useEffect } from 'react';
import {
  Container,
  makeStyles,
  CssBaseline,
  Grid,
  TextField,
  IconButton,
  Link,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logo from '../image/logo.png';
import FaceIcon from '@material-ui/icons/Face';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SignModal from './user/SignModal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  container: {
    display: 'block',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  wineMenu: {
    color: 'black',
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    textShadow: '1px 1px 2px black',
    fontSize: '15px',
    '&:hover': {
      color: '#CB9FC7',
    },
  },
  logo: {
    cursor: 'pointer',
    verticalAlign: 'center',
  },
}));

function Nav() {
  const [wineNames, setWineNames] = useState([]);
  const [searchWine, setSearchWine] = useState('');
  const [signInModal, setSignModal] = useState(false);

  const getWinesData = async () => {
    const response = await axios.get('https://buenosvinosserver.ga/wine');
    setWineNames(response.data);
  };

  useEffect(() => {
    getWinesData();
  }, []);

  const krAndEnName = [];
  for (let i in wineNames) {
    krAndEnName.push(wineNames[i].name);
  }
  for (let i in wineNames) {
    krAndEnName.push(wineNames[i].name_en);
  }

  const classes = useStyles();

  const changeInputData = (e) => {
    setSearchWine(e.target.value);
  };

  const history = useHistory();

  const onClick = (wine) => {
    console.log(wine);
    history.push({
      pathname: './result',
      search: wine,
    });
  };

  const searchWines = (e) => {
    if (e.key === 'Enter') {
      onClick(searchWine);
    }
  };

  const signInOpen = () => {
    setSignModal(true);
    console.log('click');
  };
  const signInClose = () => {
    setSignModal(false);
  };

  const handleClickToMain = () => {
    history.push('./');
  };
  // 로고 클릭시 메인으로 이동시키는 함수

  const handleClickToFilter = (e) => {
    history.push({
      pathname: './filter',
      state: {
        selectedWine: e.currentTarget.name,
      },
    });
  };
  // 네비게이션 바의 와인 타입을 누르면 필터링 메뉴로 이동시키는 함수

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" style={{ position: 'relative' }}>
          <Grid
            container
            spacing={3}
            style={{
              height: '18vh',
              alignContent: 'center',
            }}
          >
            <Grid container spacing={3} item xs={12} style={{ padding: '0px 6.5vw 0px 9vw' }}>
              <img
                // src={'https://penzim.synology.me/image/finalProject/logo/logo.png'}
                src={logo}
                alt="logo"
                className={classes.logo}
                onClick={handleClickToMain}
              />
              <div style={{ width: 200, height: 30 }}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={krAndEnName}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search any wine"
                      margin="none"
                      variant="standard"
                      InputProps={{ ...params.InputProps, type: 'search' }}
                      value={searchWine}
                      onChange={changeInputData}
                      onKeyPress={searchWines}
                      style={{ margin: '33px 0px 0px 5px' }}
                    />
                  )}
                />
              </div>
              <Grid item xs={1} style={{ marginLeft: 'auto', marginTop: '30px' }}>
                <IconButton onClick={signInOpen}>
                  <FaceIcon />
                </IconButton>
                <SignModal signInModal={signInModal} signInClose={signInClose} />
              </Grid>
            </Grid>
            <Grid container spacing={2} item xs={12} style={{ padding: '0px 0px 0px 10vw' }}>
              <div className={classes.root}>
                <Link
                  className={classes.wineMenu}
                  onClick={handleClickToFilter}
                  component="button"
                  underline="none"
                  name="red"
                >
                  레드
                </Link>
              </div>
              <div className={classes.root}>
                <Link
                  className={classes.wineMenu}
                  onClick={handleClickToFilter}
                  component="button"
                  underline="none"
                  name="white"
                >
                  화이트
                </Link>
              </div>
              <div className={classes.root}>
                <Link
                  className={classes.wineMenu}
                  onClick={handleClickToFilter}
                  component="button"
                  underline="none"
                  name="sparkling"
                >
                  스파클링
                </Link>
              </div>
              <div className={classes.root}>
                <Link
                  className={classes.wineMenu}
                  onClick={handleClickToFilter}
                  underline="none"
                  component="button"
                  name="rose"
                >
                  로제
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
      <hr
        style={{
          color: 'dark',
          border: 0,
          height: 8,
          boxShadow: 'inset 0 12px 12px -12px rgba(0,0,0,0.5)',
        }}
      />
    </>
  );
}
export default Nav;
