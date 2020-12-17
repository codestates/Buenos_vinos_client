import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import AOS from 'aos';
import { ToggleFillterNav } from '../components/App';

AOS.init({
  duration: 1000,
});

const useStyles = makeStyles({
  root: {
    position: 'relative',
    left: 0,
    transition: '0.4s',
  },
  rootFillterNavOpen: {
    position: 'relative',
    left: 300,
    transition: '0.4s',
  },
  explain: {
    padding: '1rem',
    whiteSpace: 'nowrap',
  },
  description: {
    color: '#616161',
    textDecoration: 'none',
    textAlign: 'center',
  },
  icon: {
    fontSize: '70px',
    display: 'flex',
    marginBottom: '5px',
    margin: 'auto',
    color: '#9F5881',
  },
});

export default function Explanation() {
  const filterNav = React.useContext(ToggleFillterNav);
  const classes = useStyles();
  return (
    <div className={filterNav.state ? classes.rootFillterNavOpen : classes.root}>
      <hr
        width="80%"
        style={{
          color: 'dark',
          border: 0,
          height: 8,
          boxShadow: 'inset 0 12px 12px -12px rgba(0,0,0,0.5)',
        }}
      />
      <Box className={classes.explain}>
        <Grid container spacing={1} className={classes.description}>
          <Grid item xs={6} sm={3}>
            <Box p={2}>
              <div data-aos="fade-up">
                <Typography variant="body1">
                  <LocalBarIcon className={classes.icon}></LocalBarIcon>
                  당신에게 어울리는 최고의 와인을<br></br>쉽고 빠르게 찾을 수 있습니다
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box p={2}>
              <div data-aos="fade-up">
                <Typography variant="body1">
                  <LocalBarIcon className={classes.icon}></LocalBarIcon>고르신 와인의 추천안주를
                  <br></br>
                  와인과 함께 드셔보세요
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box p={2}>
              <div data-aos="fade-up">
                <Typography variant="body1">
                  <LocalBarIcon className={classes.icon}></LocalBarIcon> 나의 인생와인을 <br></br>
                  찾으실 수 있습니다
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box p={2}>
              <div data-aos="fade-up">
                <Typography variant="body1">
                  <LocalBarIcon className={classes.icon}></LocalBarIcon> 주변 지인들에게
                  <br></br>맛 좋은 와인을 선물해보세요
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
