import { Grid, makeStyles } from '@material-ui/core';
import useScroll from '../utility/useScroll';
import Country from './country';
import Flavor from './flavor';
import PairingsButton from './pairingsButton';
import Ratings from './ratings';
import WineTypes from './wineTypes';

function Filter(props) {
  const useStyles = makeStyles({
    filteringBar: {
      width: 250,
      padding: 5,
      position: 'fixed',
      left: '1.5rem',
      top: 0,
    },
    filteringBarAbs: {
      width: 250,
      padding: 5,
      position: 'absolute',
      left: '1.5rem',
    },
    text: {
      fontSize: '1.4rem',
      margin: 8,
    },
  });

  const { y } = useScroll();
  console.log(y);

  const handleClick = () => {
    classes.filteringBar.position = 'absolute';
  };

  const classes = useStyles();

  return (
    <Grid item xs={2} className={y > 159 ? classes.filteringBar : classes.filteringBarAbs}>
      <p onClick={handleClick} className={classes.text}>
        와인 종류
      </p>
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
  );
}
export default Filter;
