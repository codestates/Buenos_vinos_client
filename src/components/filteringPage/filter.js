import { Grid, makeStyles } from '@material-ui/core';
import Country from './country';
import Flavor from './flavor';
import Ratings from './ratings';
import WineTypes from './wineTypes';

function Filter(props) {
  const iconUrl = 'https://penzim.synology.me/image/finalProject/icon/';
  const useStyles = makeStyles({
    food: {
      width: 80,
      float: 'left',
      webkitFilter: 'opacity(50%)',
      filter: 'opacity(50%)',
      '&:hover': {
        webkitFilter: 'opacity(100%)',
        filter: 'opacity(100%)',
      },
    },
    selectedFood: {
      width: 80,
      float: 'left',
    },
    filteringBar: {
      position: 'fixed',
      left: '1.5rem',
    },
  });

  const pairingsName = Object.keys(props.pairingsState);

  const handleClick = (e) => {
    props.selectPairings(e.target.alt);
  };

  const classes = useStyles();

  return (
    <Grid item xs={2} className={classes.filteringBar}>
      <WineTypes selectWines={props.selectWines} wineState={props.wineState} />
      <Flavor selectFlavor={props.selectFlavor} flavorState={props.flavorState}></Flavor>
      {pairingsName.map((item) => (
        <img
          src={`${iconUrl}${item}.png`}
          className={props.pairingsState[item][0] ? classes.selectedFood : classes.food}
          key={item}
          alt={item}
          onClick={handleClick}
        />
      ))}
      <Country selectCountries={props.selectCountries} countryState={props.countryState} />
      <Ratings
        ratingHover={props.ratingHover}
        ratingValue={props.ratingValue}
        handleChange={props.handleChange}
        handleChangeHover={props.handleChangeHover}
      />
    </Grid>
  );
}
export default Filter;
