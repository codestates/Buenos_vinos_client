import { Grid } from '@material-ui/core';
import useDebounce from '../components/utility/useDebounce';
import Filter from '../components/filteringPage/filter';
import FilteredList from '../components/filteringPage/filteredList';
import React from 'react';
import axios from 'axios';

function FilteringPage(props) {
  const [wines, setWines] = React.useState([]);
  const [ratingValue, setRatingValue] = React.useState(3);
  const [ratingHover, setRatingHover] = React.useState(-1);
  const debouncedWinesList = useDebounce(wines, 5000);

  const convertToArr = (obj) => {
    let result = [];
    for (let key in obj) {
      if (obj[key][0]) result.push(obj[key][1]);
    }
    return result;
  };
  // 사용자가 클릭해서 true로 변한 값을 배열로 변환해주는 함수, API 요청을 보내기 위해 사용됨

  const handleChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const handleChangeHover = (event, newHover) => {
    setRatingHover(newHover);
  };

  React.useEffect(
    () => {
      const getFilterdList = async () => {
        try {
          const res = await axios.get('http://54.180.150.63:3000/wine', {
            params: {
              sweet_min: props.flavorState.sweet[0],
              sweet_max: props.flavorState.sweet[1],
              acidic_min: props.flavorState.acidic[0],
              acidic_max: props.flavorState.acidic[1],
              body_min: props.flavorState.body[0],
              body_max: props.flavorState.body[1],
              type: convertToArr(props.wineState),
              country: convertToArr(props.countryState),
              food: convertToArr(props.pairingsState),
              rating: ratingValue,
            },
          });
          setWines(res.data);
        } catch (error) {
          console.error(error);
        }
      };
      getFilterdList();
    },
    [
      // debouncedWinesList
    ],
  );

  console.log(wines);
  console.log(debouncedWinesList);

  return (
    <Grid container direction="row" justify="center" alignItems="stretch">
      <Filter
        selectFlavor={props.selectFlavor}
        selectPairings={props.selectPairings}
        selectCountries={props.selectCountries}
        selectWines={props.selectWines}
        flavorState={props.flavorState}
        pairingsState={props.pairingsState}
        countryState={props.countryState}
        wineState={props.wineState}
        ratingHover={ratingHover}
        ratingValue={ratingValue}
        handleChange={handleChange}
        handleChangeHover={handleChangeHover}
      />
      <FilteredList wines={wines} />
    </Grid>
  );
}

export default FilteringPage;
