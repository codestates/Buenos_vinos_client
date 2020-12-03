import { Grid, makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useState } from 'react';

function Pairings(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          variant="contained"
          onClick={handleClickListItem}
        >
          <ListItemText primary="와인 종류" secondary="테스트 레드" />
        </ListItem>
      </List>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>Hello</MenuItem>
      </Menu>
      <Grid>
        <img
          src="https://penzim.synology.me/image/finalProject/icon/beef.png"
          alt="HTML5"
          className={props.pairingState.beef ? classes.selectedFood : classes.food}
          onClick={props.selectPairing('beef')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/pig.png"
          alt="HTML5"
          className={props.pairingState.pork ? classes.selectedFood : classes.food}
          onClick={props.selectPairing('pork')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/poultry.png"
          alt="HTML5"
          className={props.pairingState.poultry ? classes.selectedFood : classes.food}
          onClick={props.selectPairing('poultry')}
        />
      </Grid>
      <Grid>
        <img
          src="https://penzim.synology.me/image/finalProject/icon/fish.png"
          alt="HTML5"
          className={props.pairingState.fish ? classes.selectedFood : classes.food}
          onClick={props.selectPairing('fish')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/seafood.png"
          alt="HTML5"
          className={props.pairingState.seafood ? classes.selectedFood : classes.food}
          onClick={props.selectPairing('seafood')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/pasta.png"
          alt="HTML5"
          className={props.pairingState.pasta ? classes.selectedFood : classes.food}
          onClick={props.selectPairing('pasta')}
        />
      </Grid>
      <Grid>
        <img
          src="https://penzim.synology.me/image/finalProject/icon/cheese.png"
          alt="HTML5"
          className={props.pairingState.cheese ? classes.selectedFood : classes.food}
          onClick={props.selectPairing('cheese')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/fruit.png"
          alt="HTML5"
          className={props.pairingState.fruit ? classes.selectedFood : classes.food}
          onClick={props.selectPairing('fruit')}
        />
        <img
          src="https://penzim.synology.me/image/finalProject/icon/vagetable.png"
          alt="HTML5"
          className={props.pairingState.vagetable ? classes.selectedFood : classes.food}
          onClick={props.selectPairing('vagetable')}
        />
      </Grid>
    </div>
  );
}
export default Pairings;
