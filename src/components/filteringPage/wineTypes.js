import { Button, makeStyles } from '@material-ui/core';

function WineTypes(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1) / 2,
      },
    },
    button: {
      width: theme.spacing(14),
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" className={classes.button}>
        레드
      </Button>
      <Button variant="outlined" className={classes.button}>
        화이트
      </Button>
      <Button variant="outlined" className={classes.button}>
        스파클링
      </Button>
      <Button variant="outlined" className={classes.button}>
        로제
      </Button>
    </div>
  );
}
export default WineTypes;
