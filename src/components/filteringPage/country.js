import { Box, Button, makeStyles, Typography } from '@material-ui/core';

function Country(props) {
  const url = 'https://penzim.synology.me/image/finalProject/country/';
  const countries = Object.keys(props.countryState);

  const useStyles = makeStyles({
    flag: {
      width: 24,
      float: 'left',
      marginRight: 4,
    },
    button: {
      width: 120,
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
      width: 120,
      padding: 4,
      justifyContent: 'left',
    },
    text: {
      fontSize: '1.2rem',
    },
  });

  const handleClick = (e) => {
    props.selectCountries(e.currentTarget.name);
  };

  const classes = useStyles();

  return (
    <Box>
      {countries.map((item) => (
        <Button
          key={item}
          name={item}
          // variant="outlined"
          className={props.countryState[item][0] ? classes.clickedButton : classes.button}
          onClick={handleClick}
        >
          <img src={`${url}${item}_round_32.png`} key={item} alt={item} className={classes.flag} />
          <Typography className={classes.text}>{props.countryState[item][1]}</Typography>
        </Button>
      ))}
    </Box>
  );
}
export default Country;
