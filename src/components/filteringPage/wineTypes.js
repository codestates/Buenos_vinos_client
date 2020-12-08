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
      webkitFilter: 'opacity(50%)',
      filter: 'opacity(50%)',
      '&:hover': {
        webkitFilter: 'opacity(100%)',
        filter: 'opacity(100%)',
      },
    },
    clickedButton: {
      width: theme.spacing(14),
    },
  }));

  const handleClick = (e) => {
    props.selectWines(e.target.name);
    console.log(e.target);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        className={props.wineState.red ? classes.clickedButton : classes.button}
        name="red"
        onClick={handleClick}
      >
        레드
      </Button>
      <Button variant="outlined" className={classes.button} name="white" onClick={handleClick}>
        화이트
      </Button>
      <Button variant="outlined" className={classes.button} name="rose" onClick={handleClick}>
        스파클링
      </Button>
      <Button variant="outlined" className={classes.button} name="sparkling" onClick={handleClick}>
        로제
      </Button>
    </div>
  );
}
export default WineTypes;
