import { Grid, makeStyles, Typography } from '@material-ui/core';
function SelectedOneDef({ universalDef }) {
  console.log(universalDef);
  const useStyles = makeStyles({
    text: {
      padding: '15px',
      margin: '10px',
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
