import { Button, makeStyles, Typography } from '@material-ui/core';

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

  const wineName = Object.keys(props.wineState);

  const handleClick = (e) => {
    props.selectWines(e.currentTarget.name);
    console.log(e.currentTarget.name);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {wineName.map((item) => (
        <Button
          variant="outlined"
          className={props.wineState[item][0] ? classes.clickedButton : classes.button}
          key={item}
          name={item}
          onClick={handleClick}
        >
          <Typography>{props.wineState[item][1]}</Typography>
        </Button>
      ))}
    </div>
  );
}
export default WineTypes;
