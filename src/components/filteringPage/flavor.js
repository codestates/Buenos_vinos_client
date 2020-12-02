import { useState } from 'react';
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
  const [values, setValues] = useState({
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

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 200 + theme.spacing(3) * 2,
      marginLeft: 20,
      float: 'left',
    },
  }));

  const classes = useStyles();

  const handleChange = (key) => (event, newValue) => {
    setValues({ ...values, [key]: newValue });
    props.onClick(values);
  };

  return (
    <div className={classes.root}>
      <Typography align="center">당도</Typography>
      <FlavorSlider
        aria-label="sweet"
        aria-labelledby="discrete-slider"
        defaultValue={3}
        min={1}
        max={5}
        valueLabelDisplay="off"
        onChange={handleChange('sweet')}
      />
      <Typography align="center">산도</Typography>
      <FlavorSlider
        aria-label="acidic"
        aria-labelledby="discrete-slider"
        defaultValue={3}
        min={1}
        max={5}
        valueLabelDisplay="off"
        onChange={handleChange('acidic')}
      />
      <Typography align="center">바디감</Typography>
      <FlavorSlider
        aria-label="body"
        aria-labelledby="discrete-slider"
        defaultValue={3}
        min={1}
        max={5}
        valueLabelDisplay="off"
        onChange={handleChange('body')}
      />
    </div>
  );
}
export default Flavor;
