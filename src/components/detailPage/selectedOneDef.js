import { Grid, makeStyles, Typography } from '@material-ui/core';
function SelectedOneDef({ universalDef }) {
  console.log(universalDef);
  const useStyles = makeStyles({
    text: {
      padding: '15px',
      margin: '10px',
    },
    listbox: {
      margin: '7px',
    },
    image: {
      marginRight: 5,
      width: '30px',
      height: '30px',
      verticalAlign: '-5pt',
    },
    lineName: {
      border: '1px solid black',
      fontSize: '1.5rem',
      padding: '10px 20px',
    },
    lineInfo: {
      border: '1px solid black',
      fontSize: '1.5rem',
      maxWidth: '998px',
      padding: '10px 20px 10px 20px',
    },
    font: {
      fontSize: '1.2rem',
    },
  });
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={12} className={classes.text}>
        <Typography variant="h5">바디</Typography>
        <br />
        <Typography className={classes.font} variant="body1">
          {universalDef.body_content}
        </Typography>
        <br />
        <Typography variant="h5">당도</Typography>
        <br />
        <Typography className={classes.font} variant="body1">
          {universalDef.sweet_content}
        </Typography>
        <br />
        <Typography variant="h5">산도</Typography>
        <br />
        <Typography className={classes.font} variant="body1">
          {universalDef.acidic_content}
        </Typography>
      </Grid>
    </>
  );
}
export default SelectedOneDef;
