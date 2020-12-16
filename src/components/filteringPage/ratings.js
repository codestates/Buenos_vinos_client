import { makeStyles, Box } from '@material-ui/core';
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
    props.handleRatingChange(event, newValue);
  };

  const handleChangeHover = (event, newValue) => {
    props.handleRatingChangeHover(event, newValue);
  };

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={props.ratingValue}
        precision={0.5}
        onChange={handleChange}
        onChangeActive={handleChangeHover}
      />
      {props.ratingValue !== null && (
        <Box ml={2}>{props.ratingHover !== -1 ? props.ratingHover : props.ratingValue}</Box>
      )}
    </div>
  );
}
export default Ratings;
