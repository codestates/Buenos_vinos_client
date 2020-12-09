import { Box, makeStyles, Button, Typography } from '@material-ui/core';
const useStyles = makeStyles({
  food: {
    width: 24,
    float: 'left',
    marginRight: 4,
  },
  button: {
    width: 80,
    padding: 4,
    justifyContent: 'left',
    webkitFilter: 'opacity(50%)',
    filter: 'opacity(50%)',
    '&:hover': {
      webkitFilter: 'opacity(100%)',
      filter: 'opacity(100%)',
    },
  },
  clickedButton: {
    width: 80,
    padding: 4,
    justifyContent: 'left',
  },
  text: {
    fontSize: '0.9rem',
  },
});

function PairingsButton(props) {
  const iconUrl = 'https://penzim.synology.me/image/finalProject/icon/';
  const pairingsName = Object.keys(props.pairingsState);

  const handleClick = (e) => {
    console.log(e.currentTarget.name);
    props.selectPairings(e.currentTarget.name);
  };

  const classes = useStyles();

  return (
    <Box>
      {pairingsName.map((item) => (
        <Button
          key={item}
          name={item}
          // variant="outlined"
          className={props.pairingsState[item][0] ? classes.clickedButton : classes.button}
          onClick={handleClick}
        >
          <img src={`${iconUrl}${item}.png`} alt={item} className={classes.food} />
          <Typography className={classes.text}>{props.pairingsState[item][1]}</Typography>
        </Button>
      ))}
    </Box>
  );
}

export default PairingsButton;
