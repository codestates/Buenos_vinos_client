import { Grid, makeStyles, Typography } from '@material-ui/core';

function WineArticle() {
  const useStyles = makeStyles({
    text: {
      padding: '15px',
      margin: '10px',
    },
  });
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ borderRadius: '15px' }}
      >
        <Grid item xs={8} md={8}>
          <Grid
            className={classes.text}
            container
            direction="row"
            alignItems="stretch"
            style={{ backgroundColor: 'white', marginBottom: 10 }}
          >
            <Grid
              item
              xs={2}
              md={2}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#CAC5D8',
                borderRadius: '15px',
              }}
            >
              <img style={{ width: 50, height: 180 }} alt="wine" />
            </Grid>
            <Grid item xs={3} md={3} className={classes.text}>
              <Typography variant="body1">아아아</Typography>
              <Typography>
                <small>아아아</small>
              </Typography>
              <Typography variant="body2" style={{ display: 'inline', paddingLeft: 5 }}>
                아아아
                <br />
              </Typography>
              <Typography
                variant="h4"
                style={{
                  display: 'inline',
                  marginTop: 50,
                  paddingRight: 6,
                  verticalAlign: '2pt',
                }}
              >
                아아아
              </Typography>
            </Grid>
            <Grid className={classes.text} item xs={6} md={6}>
              <Typography variant="h5">Wine Style</Typography>
              <br />
              <Typography>아아아</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default WineArticle;
