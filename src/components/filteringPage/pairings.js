import {
  Grid,
  makeStyles,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Button,
} from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';

function Pairings(props) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
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

  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const useStyles = makeStyles({
    root: {
      float: 'left',
    },
    food: {
      width: 24,
      // webkitFilter: 'opacity(50%)',
      // filter: 'opacity(50%)',
      // '&:hover': {
      //   webkitFilter: 'opacity(100%)',
      //   filter: 'opacity(100%)',
      // },
    },
    selectedFood: {
      width: 24,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          안주
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>
                      <img
                        src="https://penzim.synology.me/image/finalProject/icon/beef.png"
                        alt="HTML5"
                        className={props.pairingState.beef ? classes.selectedFood : classes.food}
                      />
                      소고기
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <img
                        src="https://penzim.synology.me/image/finalProject/icon/pig.png"
                        alt="HTML5"
                        className={props.pairingState.pork ? classes.selectedFood : classes.food}
                      />
                      돼지고기
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <img
                        src="https://penzim.synology.me/image/finalProject/icon/poultry.png"
                        alt="HTML5"
                        className={props.pairingState.poultry ? classes.selectedFood : classes.food}
                      />
                      가금류
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <img
                        src="https://penzim.synology.me/image/finalProject/icon/fish.png"
                        alt="HTML5"
                        className={props.pairingState.fish ? classes.selectedFood : classes.food}
                      />
                      생선
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <img
                        src="https://penzim.synology.me/image/finalProject/icon/seafood.png"
                        alt="HTML5"
                        className={props.pairingState.seafood ? classes.selectedFood : classes.food}
                      />
                      해산물
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <img
                        src="https://penzim.synology.me/image/finalProject/icon/pasta.png"
                        alt="HTML5"
                        className={props.pairingState.pasta ? classes.selectedFood : classes.food}
                      />
                      파스타
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <img
                        src="https://penzim.synology.me/image/finalProject/icon/cheese.png"
                        alt="HTML5"
                        className={props.pairingState.cheese ? classes.selectedFood : classes.food}
                      />
                      치즈
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <img
                        src="https://penzim.synology.me/image/finalProject/icon/fruit.png"
                        alt="HTML5"
                        className={props.pairingState.fruit ? classes.selectedFood : classes.food}
                      />
                      과일
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <img
                        src="https://penzim.synology.me/image/finalProject/icon/vagetable.png"
                        alt="HTML5"
                        className={
                          props.pairingState.vagetable ? classes.selectedFood : classes.food
                        }
                      />
                      채소
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>

      {/* <Grid>
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
      </Grid> */}
    </div>
  );
}
export default Pairings;
