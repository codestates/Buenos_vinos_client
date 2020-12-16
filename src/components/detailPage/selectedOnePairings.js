import { Grid, makeStyles, Typography } from '@material-ui/core';
function SelectedOnePairings({ searchResult }) {
  const pairings = searchResult.food;
  const useStyles = makeStyles({
    text: {
      padding: '15px',
      margin: '10px',
    },
    fontSize: {
      fontSize: '1.2rem',
    },
  });
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.text} container>
        <Grid className={classes.text} item xs={12} md={12}>
          <Typography variant="h5">와인 스타일</Typography>
          <br />
          <Typography className={classes.fontSize}>{searchResult.content}</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          className={classes.text}
          style={{
            display: 'block',
          }}
        >
          <Typography variant="h5">추천 안주</Typography>
          <br />
          <Grid
            className={classes.fontSize}
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch"
          >
            {pairings.map((food) => (
              <Grid key={food.id} item xs={3} md={3}>
                <div style={{ textAlign: 'center' }}>
                  <img src={food.image} style={{ width: 80, height: 80 }} alt="wine" />
                </div>
                <div style={{ textAlign: 'center' }}>{food.name}</div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default SelectedOnePairings;
