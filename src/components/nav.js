import React from 'react';
import {
  Container,
  makeStyles,
  CssBaseline,
  Grid,
  TextField,
  IconButton,
  Link,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FaceIcon from '@material-ui/icons/Face';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SignModal from './user/SignModal';
import { ToggleFillterNav } from './App';

axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    left: 0,
    transition: '0.4s',
  },
  rootFillterNavOpen: {
    position: 'relative',
    left: 300,
    transition: '0.4s',
  },
  wineType: {
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
  const [wineNames, setWineNames] = React.useState([]);
  const [searchWine, setSearchWine] = React.useState('');
  const [signInModal, setSignModal] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const filterNav = React.useContext(ToggleFillterNav);

  const handleToggle = async () => {
    await axios({
      method: 'get',
      url: 'https://buenosvinosserver.ga/auth',
      withCredentials: true,
    })
      .then((res) => {
        console.log('로그인된 상태');
        setOpen((prevOpen) => !prevOpen);
      })
      .catch((err) => {
        console.log('로그인 안된 상태');
        setSignModal(true);
      });
  };
  // 유저 아이콘 클릭시 마이페이지와 로그아웃 버튼이 있는 드롭다운 메뉴를 보여줌
  // 로그인 여부에 따라 드롭다운 메뉴를 보여주거나 로그인 모달창을 띄움

  const signInOpen = () => {
    setSignModal(true);
    console.log('click');
  };

  const signInClose = () => {
    setSignModal(false);
  };
  // 로그인 모달창을 닫을 때 사용되는 함수

  const handleClose = (e) => {
    if (e.target.id) {
      if (e.target.id === 'signout') {
        axios({
          method: 'get',
          url: 'https://buenosvinosserver.ga/user/logout',
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.error(err));
        // history.push('/');
        window.location.href = '/';
      }
      // 로그아웃 버튼 클릭시 쿠키를 삭제하고 메인페이지로 이동

      if (e.target.id === 'mypage') {
        history.push('/users');
      }
      // 마이페이지 버튼 클릭시 마이페이지로 이동
    }

    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const getWinesData = async () => {
    const response = await axios.get('https://buenosvinosserver.ga/wine');
    setWineNames(response.data);
  };

  React.useEffect(() => {
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

  // 와인 검색 엔터 기능
  const searchWines = (e) => {
    if (e.key === 'Enter') {
      onClick(searchWine);
    }
  };
  // 데이터 전송
  const history = useHistory();
  const onClick = (wine) => {
    console.log(wine);
    history.push({
      pathname: './result',
      search: wine,
    });
    setSearchWine('');
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
    <div className={filterNav.state ? classes.rootFillterNavOpen : classes.root}>
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
                src="https://penzim.synology.me/image/finalProject/logo/logo.png"
                alt="logo"
                className={classes.logo}
                onClick={handleClickToMain}
              />
              <div style={{ width: 200, height: 30 }}>
                <Autocomplete
                  freeSolo
                  id="search-wine"
                  options={krAndEnName}
                  disableClearable
                  autoComplete={true}
                  getOptionLabel={(wine) => {
                    return wine;
                  }}
                  onKeyPress={searchWines}
                  onChange={(e, wine) => {
                    setSearchWine(wine);
                  }}
                  value={searchWine}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search any wine"
                      margin="none"
                      variant="standard"
                      InputProps={{ ...params.InputProps, type: 'search' }}
                      style={{ margin: '33px 0px 0px 5px' }}
                    />
                  )}
                />
              </div>
              <Grid item xs={1} style={{ marginLeft: 'auto', marginTop: '30px' }}>
                <IconButton
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  // onClick={isLogIn.state.status ? handleToggle : signInOpen}
                  onClick={handleToggle}
                >
                  <FaceIcon />
                </IconButton>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem id="mypage" onClick={handleClose}>
                              마이페이지
                            </MenuItem>
                            <MenuItem id="signout" onClick={handleClose}>
                              로그아웃
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
                <SignModal signInModal={signInModal} signInClose={signInClose} />
              </Grid>
            </Grid>
            <Grid container spacing={2} item xs={12} style={{ padding: '0px 0px 0px 10vw' }}>
              <div className={classes.wineType}>
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
              <div className={classes.wineType}>
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
              <div className={classes.wineType}>
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
              <div className={classes.wineType}>
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
    </div>
  );
}
export default Nav;
