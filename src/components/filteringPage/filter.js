import { Grid, makeStyles } from '@material-ui/core';
import { ToggleFillterNav } from '../App';
import Country from './country';
import Flavor from './flavor';
import PairingsButton from './pairingsButton';
import Ratings from './ratings';
import WineTypes from './wineTypes';
import React from 'react';

const useStyles = makeStyles({
  text: {
    fontSize: '1.4rem',
    margin: 8,
  },
  sideNav: {
    height: '100%',
    width: 320,
    display: 'grid',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
    float: 'left',
    background: '#FAF6EE',
    transition: '0.4s',
    placeContent: 'center',
    placeItems: 'center',
    textAlign: 'center',
  },
  sideNavClosed: {
    height: '100%',
    width: 0,
    display: 'grid',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
    float: 'left',
    background: '#FAF6EE',
    transition: '0.4s',
    placeContent: 'center',
    placeItems: 'center',
    textAlign: 'center',
  },
});

function Filter(props) {
  const fillterNav = React.useContext(ToggleFillterNav);

  const handleMouseLeave = () => {
    fillterNav.setState(false);
  };

  const classes = useStyles();

  return (
    <div onMouseLeave={handleMouseLeave}>
      <Grid item xs={2} className={fillterNav.state ? classes.sideNav : classes.sideNavClosed}>
        <p className={classes.text}>와인 종류</p>
        <WineTypes selectWines={props.selectWines} wineState={props.wineState} />
        <p className={classes.text}>맛 선택</p>
        <Flavor selectFlavor={props.selectFlavor} flavorState={props.flavorState} />
        <p className={classes.text}>음식 선택</p>
        <PairingsButton selectPairings={props.selectPairings} pairingsState={props.pairingsState} />
        <p className={classes.text}>국가 선택</p>
        <Country selectCountries={props.selectCountries} countryState={props.countryState} />
        <p className={classes.text}>평점 선택</p>
        <Ratings
          ratingHover={props.ratingHover}
          ratingValue={props.ratingValue}
          handleRatingChange={props.handleRatingChange}
          handleRatingChangeHover={props.handleRatingChangeHover}
        />
      </Grid>
    </div>
  );
}
export default Filter;
