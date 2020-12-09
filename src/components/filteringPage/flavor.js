import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const FlavorSlider = withStyles({
  root: {
    color: '#9F5881',
    height: 8,
    paddingTop: 5,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -6,
    marginLeft: -10,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function Flavor(props) {
  const useStyles = makeStyles((theme) => ({
    flavorBar: {
      width: 150 + theme.spacing(4) * 2,
      marginLeft: 18,
      marginRight: 18,
      float: 'left',
    },
  }));

  const handleChange = (e, value, flavor) => {
    props.selectFlavor(flavor, value);
  };

  const flavor = [
    ['sweet', '당도'],
    ['acidic', '산도'],
    ['body', '바디감'],
  ];

  const classes = useStyles();

  return (
    <>
      {flavor.map((item) => (
        <div className={classes.flavorBar} key={item}>
          <Typography align="center">{item[1]}</Typography>
          <Typography variant="body2" color="textSecondary" style={{ float: 'left' }}>
            1
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ float: 'right' }}>
            5
          </Typography>
          <FlavorSlider
            value={props.flavorState[item[0]]}
            min={1}
            max={5}
            valueLabelDisplay="off"
            onChange={(e, value) => handleChange(e, value, item[0])}
          />
        </div>
      ))}
    </>
  );
}
export default Flavor;
