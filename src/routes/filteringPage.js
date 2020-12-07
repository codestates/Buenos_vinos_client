import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import Flavor from '../components/filteringPage/flavor';
import WineTypes from '../components/filteringPage/wineTypes';
import { fakeData } from '../fakeData';

function FilteringPage(props) {
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
    list: {
      margin: '10px',
      padding: '15px',
      borderRadius: '10px',
    },
    text: {
      // float: 'left',
    },
  });

  const pairingsName = Object.keys(props.pairingsState);

  const handleClick = (e) => {
    props.selectPairings(e.target.alt);
  };

  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="stretch">
      <Grid item xs={2} className={classes.filteringBar}>
        <WineTypes></WineTypes>
        <Flavor selectFlavor={props.selectFlavor} flavorState={props.flavorState}></Flavor>
        {pairingsName.map((item) => (
          <img
            src={`${iconUrl}${item}.png`}
            className={props.pairingsState[item] ? classes.selectedFood : classes.food}
            key={item}
            alt={item}
            onClick={handleClick}
          />
        ))}
      </Grid>
      <Grid item xs={6}>
        {fakeData.map((item) => (
          <Paper className={classes.list} key={item.id}>
            <img src={item.image} />
            <Typography className={classes.text}>{item.wineKr}</Typography>
            <Typography className={classes.text}>{item.wine}</Typography>
            <Rating defaultValue={item.rating} precision={0.1} readOnly />
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
}

export default FilteringPage;
