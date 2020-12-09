import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { fakeData } from '../../fakeData';

function FilteredList(props) {
  const useStyles = makeStyles({
    list: {
      margin: '10px',
      padding: '15px',
      borderRadius: '10px',
    },
    text: {
      padding: '15px',
      margin: '10px',
    },
  });

  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ borderRadius: '15px' }}
    >
      <Grid item xs={8} md={8}>
        {props.filteredWines.map((item) => (
          <Grid
            className={classes.text}
            container
            direction="row"
            alignItems="stretch"
            key={item.id}
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
              <img src={item.image} style={{ width: 50, height: 180 }} alt="wine" />
            </Grid>
            <Grid item xs={3} md={3} className={classes.text}>
              <Typography variant="body1">{item.name}</Typography>
              <Typography>
                <small>({item.name_en})</small>
              </Typography>
              <img src={item.country.image} style={{ width: 10, height: 10 }} alt="country"></img>
              <Typography variant="body2" style={{ display: 'inline', paddingLeft: 5 }}>
                {`${item.country.name}산 ${item.type.name}`}
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
                {item.rating.toFixed(1)}
              </Typography>
              <Typography style={{ display: 'inline-block', marginTop: 50 }}>
                <Rating defaultValue={item.rating} precision={0.1} readOnly />
              </Typography>
            </Grid>
            <Grid className={classes.text} item xs={6} md={6}>
              <Typography variant="h5">Wine Style</Typography>
              <br />
              <Typography>{item.content}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
export default FilteredList;
