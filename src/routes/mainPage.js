import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  makeStyles,
  CssBaseline,
  Paper,
  Divider,
} from '@material-ui/core';
import Recommended from '../components/mainPage/recommended';
import Flavor from '../components/filteringPage/flavor';
import Pairings from '../components/filteringPage/pairingsDropDown';

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
}));

function MainPage() {
  const [flavorState, setFlavorState] = React.useState({
    sweet: [2, 4],
    acidic: [2, 4],
    body: [2, 4],
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
      <Recommended />
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl" style={{ position: 'relative', paddingTop: '2vh' }}>
            <Typography
              component="div"
              style={{
                backgroundImage: `url(https://penzim.synology.me/image/finalProject/mainpage/mainbanner.png)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '280px',
                minWidth: '889px',
                width: '100%',
              }}
            />
            <Typography
              component="div"
              style={{
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                color: 'white',
                transform: 'translate( -50%, -50% )',
              }}
            >
              <Typography
                style={{
                  fontSize: '60px',
                  textShadow: '1px 1px 2px black',
                  fontFamily: 'Roboto',
                }}
              >
                Discover the Right Wine
              </Typography>
            </Typography>
          </Container>
        </React.Fragment>
      </div>
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
    </>
  );
}
export default MainPage;
