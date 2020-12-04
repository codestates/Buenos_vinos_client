import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const FlavorSlider = withStyles({
  root: {
    color: '#900020',
    height: 8,
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

  const classes = useStyles();

  return (
    <>
      <div className={classes.flavorBar}>
        <Typography align="center">당도</Typography>
        <Typography variant="body2" color="textSecondary" style={{ float: 'left' }}>
          1
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ float: 'right' }}>
          5
        </Typography>
        <FlavorSlider
          defaultValue={[2, 4]}
          min={1}
          max={5}
          valueLabelDisplay="off"
          onChange={props.selectFlavor('sweet')}
        />
      </div>
      <div className={classes.flavorBar}>
        <Typography align="center">산도</Typography>
        <Typography variant="body2" color="textSecondary" style={{ float: 'left' }}>
          1
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ float: 'right' }}>
          5
        </Typography>
        <FlavorSlider
          defaultValue={[2, 4]}
          min={1}
          max={5}
          valueLabelDisplay="off"
          onChange={props.selectFlavor('acidic')}
        />
      </div>
      <div className={classes.flavorBar}>
        <Typography align="center">바디감</Typography>
        <Typography variant="body2" color="textSecondary" style={{ float: 'left' }}>
          1
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ float: 'right' }}>
          5
        </Typography>
        <FlavorSlider
          defaultValue={[2, 4]}
          min={1}
          max={5}
          valueLabelDisplay="off"
          onChange={props.selectFlavor('body')}
        />
      </div>
    </>
  );
}
export default Flavor;
