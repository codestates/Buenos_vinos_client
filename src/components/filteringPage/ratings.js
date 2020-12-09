import { makeStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

function Ratings(props) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    props.handleChange(event, newValue);
  };

  const handleChangeHover = (event, newValue) => {};

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={props.ratingValue}
        precision={0.5}
        onChange={handleChange}
        onChangeActive={handleChangeHover}
      />
      {/* {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>} */}
    </div>
  );
}
export default Ratings;
