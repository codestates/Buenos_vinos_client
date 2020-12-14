import { Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Rating from '@material-ui/lab/Rating';

function AllComments({ comments }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    text: {
      padding: '15px',
      margin: '10px',
    },
    button: {
      display: 'inline',
      cursor: 'pointer',
    },

    layout: {
      minWidth: '710px',
      borderRadius: '10px',
      margin: '1vh',
      padding: '2vh',
      backgroundColor: 'white',
      border: '3px FFF4D8 solid',
    },

    contentBox: {
      minHeight: '50px',
    },
    gridLayout: {
      marginBottom: 5,
    },
    accountInfo: {
      textAlign: 'center',
    },
  }));
  const classes = useStyles();
  console.log(comments);
  comments.sort((a, b) => {
    if (a.rating > b.rating) return -1;
    if (a.rating < b.rating) return 1;
    return 0;
  });
  let chunckedData = [];
  let temp = [];
  for (let i = 1; i <= comments.length; i++) {
    temp.push(comments[i - 1]);
    if (i % 4 === 0) {
      chunckedData = temp;
      break;
    }
  }
  console.log(chunckedData);
  return (
    <div style={{ marginTop: '3vh' }}>
      {comments.length ? (
        <>
          <Typography variant="h6">리뷰 모아보기</Typography>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start">
            {chunckedData.map((comment) => (
              <Paper key={comment.id} className={classes.layout}>
                <Grid container>
                  <Grid className={classes.accountInfo} item xs={2} md={2}>
                    <Grid>
                      <AccountCircleIcon style={{ width: 50, height: 50 }} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      {comment.user.nickname}
                    </Grid>
                  </Grid>
                  <Grid item xs={10} md={10} style={{ paddingLeft: 8 }}>
                    <Grid item xs={4} md={4} className={classes.gridLayout}>
                      <Rating name="read-only" value={comment.rating} readOnly size="small" />
                    </Grid>
                    <Grid className={classes.contentBox} item xs={12} md={12}>
                      {comment.content}
                    </Grid>
                    <Grid container item xs={12} md={12}>
                      <Grid item xs={8} md={8}>
                        {`${comment.createdAt.slice(0, 4)}년 ${comment.createdAt.slice(
                          5,
                          7,
                        )}월 ${comment.createdAt.slice(8, 10)}일`}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </>
      ) : (
        <Typography className={classes.accountInfo} variant="h6">
          - 아직 리뷰가 없습니다. -
        </Typography>
      )}
    </div>
  );
}
export default AllComments;
