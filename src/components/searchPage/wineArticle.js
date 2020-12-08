import { Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import Wrapper from './wrapper';
function WineArticle({ chunkedArticles, loading }) {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ borderRadius: '15px', backgroundColor: 'white' }}
      >
        <Typography variant="h4" style={{ display: 'block', margin: '15px 0 0 0' }}>
          와인에 대해 더 알고 싶으신가요?
        </Typography>

        <Carousel autoPlay={false} animation={'slide'} indicators={false}>
          {chunkedArticles.map((article) => (
            <Wrapper article={article} loading={loading} />
          ))}
        </Carousel>
      </Grid>
    </>
  );
}
export default WineArticle;
