import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { fakeData } from '../../fakeData';
import useFetch from '../mainPage/useFetch';
import useDebounce from '../utility/useDebounce';
import React, { useEffect } from 'react';
import axios from 'axios';

function FilteredList(props) {
  const [wines, setWines] = React.useState([]);
  const debouncedWinesList = useDebounce(wines, 5000);

  const useStyles = makeStyles({
    list: {
      margin: '10px',
      padding: '15px',
      borderRadius: '10px',
    },
    text: {
      // float: 'left',
    },
  });

  // useEffect(() => {
  //   const getFilterdList = async () => {
  //     let res = await axios.get('http://54.180.150.63:3000/wine', {
  //       params: {
  //         sweet_min: props.flavorState.sweet[0],
  //         sweet_max: props.flavorState.sweet[1],
  //         acidic_min: props.flavorState.acidic[0],
  //         acidic_max: props.flavorState.acidic[1],
  //         body_min: props.flavorState.body[0],
  //         body_max: props.flavorState.body[1],
  //         type: '화이트',
  //       },
  //     });
  //     setWines(res.data);
  //   };
  //   getFilterdList();
  // }, [wines]);

  console.log(wines);
  console.log(debouncedWinesList);

  const classes = useStyles();

  return (
    <Grid item xs={6}>
      {wines.map((item) => (
        <Paper className={classes.list} key={item.id}>
          <img src={item.image} alt={item.name} />
          <Typography className={classes.text}>{item.name}</Typography>
          <Typography className={classes.text}>{item.name_en}</Typography>
          <Rating defaultValue={Number(item.rating)} precision={0.1} readOnly />
        </Paper>
      ))}
    </Grid>
  );
}
export default FilteredList;
