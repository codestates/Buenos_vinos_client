import { Box, makeStyles } from '@material-ui/core';

function Country(props) {
  const url = 'https://penzim.synology.me/image/finalProject/country/';
  const countries = Object.keys(props.countryState);

  const useStyles = makeStyles({
    flag: {
      float: 'left',
      webkitFilter: 'opacity(50%)',
      filter: 'opacity(50%)',
      '&:hover': {
        webkitFilter: 'opacity(100%)',
        filter: 'opacity(100%)',
      },
    },
    selectedFlag: {
      float: 'left',
    },
  });

  const handleClick = (e) => {
    props.selectCountries(e.target.alt);
  };

  const classes = useStyles();

  return (
    <Box>
      {countries.map((item) => (
        <img
          src={`${url}${item}_round_64.png`}
          key={item}
          alt={item}
          className={props.countryState[item][0] ? classes.selectedFlag : classes.flag}
          onClick={handleClick}
        />
      ))}
    </Box>
  );
}
export default Country;
