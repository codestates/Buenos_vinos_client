import Flavor from '../filteringPage/flavor';
import Pairings from '../filteringPage/pairings';
import { Container, Button, Typography, makeStyles } from '@material-ui/core';

function FindYourWines() {
  const handleClick = (e) => {
    console.log(e);
  };

  const useStyles = makeStyles((theme) => ({}));

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div>
        <img
          src="https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2019-11-05/wine.jpg"
          style={{ width: 800 }}
        />
      </div>
      <div>
        <Typography>Find Your Wines!</Typography>
      </div>
      <div>
        <Pairings onClick={handleClick} />
        <Flavor onClick={handleClick} />
      </div>
      <Button>찾기</Button>
    </Container>
  );
}
export default FindYourWines;
