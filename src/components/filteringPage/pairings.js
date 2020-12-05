import {
  makeStyles,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Button,
  Typography,
} from '@material-ui/core';
import React from 'react';

function Pairings(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedFood, setSelectedFood] = React.useState({
    selected: false,
    foodKor: '',
    foodEng: '',
  });
  const anchorRef = React.useRef(null);
  const iconUrl = 'https://penzim.synology.me/image/finalProject/icon/';
  const options = [
    ['beef', '소고기'],
    ['pork', '돼지고기'],
    ['poultry', '가금류'],
    ['fish', '생선'],
    ['seafood', '해산물'],
    ['pasta', '파스타'],
    ['cheese', '치즈'],
    ['fruit', '과일'],
    ['vagetable', '채소'],
  ];

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    props.selectPairing(event.target.id);
    showSelected(event.target.id);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const showSelected = (food) => {
    let korName;

    if (food) {
      options.forEach((element) => {
        if (element[0] === food) return (korName = element[1]);
      });
      setSelectedFood({ selected: true, foodKor: korName, foodEng: food });
    }
  };

  const renderSelected = (kor, eng) => (
    <>
      <img src={`${iconUrl}${eng}.png`} alt={eng} className={classes.food} />
      <Typography>{kor}</Typography>
    </>
  );

  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const useStyles = makeStyles({
    root: {
      float: 'left',
      display: 'inline-flex',
      flexWrap: 'wrap',
      alignContent: 'center',
      alignItems: 'center',
      verticalAlign: 'middle',
      justifyContent: 'center',
      textAlign: 'center',
    },
    button: {
      margin: 10,
      marginRight: 15,
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'center',
      alignItems: 'center',
      verticalAlign: 'middle',
      justifyContent: 'center',
      textAlign: 'center',
    },
    menu: {
      zIndex: 9999,
    },
    food: {
      width: 24,
      marginRight: 8,
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
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.button}
      >
        {selectedFood.selected
          ? renderSelected(selectedFood.foodKor, selectedFood.foodEng)
          : '음식 선택'}
      </Button>
      <Popper
        className={classes.menu}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  {options.map((item) => (
                    <MenuItem onClick={handleClose} id={item[0]} key={item[0]}>
                      <img
                        src={`${iconUrl}${item[0]}.png`}
                        alt={item[0]}
                        id={item[0]}
                        className={classes.food}
                      />
                      <Typography id={item[0]}>{item[1]}</Typography>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
export default Pairings;
