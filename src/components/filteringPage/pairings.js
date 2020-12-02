import { useState } from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';

function Pairings(props) {
  const [pairings, setPairings] = useState({
    beef: false,
    pork: false,
    poultry: false,
    fish: false,
    seafood: false,
    pasta: false,
    cheese: false,
    fruit: false,
    vagetable: false,
    sweet: 3,
    acidic: 3,
    body: 3,
  });

  const useStyles = makeStyles({
    root: {
      float: 'left',
    },
    food: {
      width: 64,
      webkitFilter: 'opacity(50%)',
      filter: 'opacity(50%)',
      '&:hover': {
        webkitFilter: 'opacity(100%)',
        filter: 'opacity(100%)',
      },
    },
    selectedFood: {
      width: 64,
    },
  });

  const selectPairings = (key) => (e) => {
    if (pairings[key]) {
      setPairings({ ...pairings, [key]: false });
    } else {
      setPairings({ ...pairings, [key]: true });
    }
    props.onClick(pairings);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <img
          src="https://penzim.synology.me/image/finalProject/icon/beef.png"
          alt="HTML5"
          className={pairings.beef ? classes.selectedFood : classes.food}
          onClick={selectPairings('beef')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/pig.png"
          alt="HTML5"
          className={pairings.pork ? classes.selectedFood : classes.food}
          onClick={selectPairings('pork')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/poultry.png"
          alt="HTML5"
          className={pairings.poultry ? classes.selectedFood : classes.food}
          onClick={selectPairings('poultry')}
        />
      </Grid>
      <Grid>
        <img
          src="https://penzim.synology.me/image/finalProject/icon/fish.png"
          alt="HTML5"
          className={pairings.fish ? classes.selectedFood : classes.food}
          onClick={selectPairings('fish')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/seafood.png"
          alt="HTML5"
          className={pairings.seafood ? classes.selectedFood : classes.food}
          onClick={selectPairings('seafood')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/pasta.png"
          alt="HTML5"
          className={pairings.pasta ? classes.selectedFood : classes.food}
          onClick={selectPairings('pasta')}
        />
      </Grid>
      <Grid>
        <img
          src="https://penzim.synology.me/image/finalProject/icon/cheese.png"
          alt="HTML5"
          className={pairings.cheese ? classes.selectedFood : classes.food}
          onClick={selectPairings('cheese')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/fruit.png"
          alt="HTML5"
          className={pairings.fruit ? classes.selectedFood : classes.food}
          onClick={selectPairings('fruit')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/vagetable.png"
          alt="HTML5"
          className={pairings.vagetable ? classes.selectedFood : classes.food}
          onClick={selectPairings('vagetable')}
        />
      </Grid>
    </div>
  );
}
export default Pairings;
