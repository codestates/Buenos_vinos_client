import { Grid } from '@material-ui/core';
import useDebounce from '../components/utility/useDebounce';
import Filter from '../components/filteringPage/filter';
import FilteredList from '../components/filteringPage/filteredList';
import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function FilteringPage() {
  const [filteredWines, setFilteredWines] = React.useState([]);
  const [ratingValue, setRatingValue] = React.useState(3);
  const [ratingHover, setRatingHover] = React.useState(-1);

  const [countryState, setCountryState] = React.useState({
    argentina: [false, '아르헨티나'],
    australia: [false, '호주'],
    chile: [false, '칠레'],
    france: [false, '프랑스'],
    germany: [false, '독일'],
    italy: [false, '이탈리아'],
    newzealand: [false, '뉴질랜드'],
    spain: [false, '스페인'],
    usa: [false, '미국'],
  });

  const [flavorState, setFlavorState] = React.useState({
    sweet: [2, 4],
    acidic: [2, 4],
    body: [2, 4],
  });

  const [pairingsState, setPairingsState] = React.useState({
    beef: [false, '소고기'],
    pork: [false, '돼지고기'],
    poultry: [false, '가금류'],
    fish: [false, '생선'],
    seafood: [false, '해산물'],
    pasta: [false, '파스타'],
    cheese: [false, '치즈'],
    fruit: [false, '과일'],
    vagetable: [false, '야채'],
  });

  const [wineState, setWineState] = React.useState({
    red: [false, '레드'],
    white: [false, '화이트'],
    rose: [false, '로제'],
    sparkling: [false, '스파클링'],
  });

  const debouncedCountry = useDebounce(countryState, 500);
  const debouncedFlavor = useDebounce(flavorState, 500);
  const debouncedPairings = useDebounce(pairingsState, 500);
  const debouncedWinesType = useDebounce(wineState, 500);
  const debouncedRating = useDebounce(ratingValue, 500);

  const location = useLocation();

  console.log(debouncedFlavor);

  let mainPageState = location.state;
  console.log(mainPageState);

  const selectFlavor = (e, value) => {
    setFlavorState({ ...flavorState, [e]: value });
  };
  // 슬라이더 바로 조절한 와인 맛의 값을 state에 반영시켜주는 함수

  const selectPairings = (e) => {
    if (pairingsState[e][0] && e) {
      setPairingsState({ ...pairingsState, [e]: [false, pairingsState[e][1]] });
    } else if (!pairingsState[e][0] && e) {
      setPairingsState({ ...pairingsState, [e]: [true, pairingsState[e][1]] });
    }
  };
  // 선택한 음식을 true 혹은 false로 변환시켜주는 함수

  const selectCountries = (e) => {
    if (countryState[e][0] && e) {
      setCountryState({ ...countryState, [e]: [false, countryState[e][1]] });
    } else if (!countryState[e][0] && e) {
      setCountryState({ ...countryState, [e]: [true, countryState[e][1]] });
    }
  };
  // 선택한 국가를 true 혹은 false로 변환시켜주는 함수

  const selectWines = (e) => {
    if (wineState[e][0] && e) {
      setWineState({ ...wineState, [e]: [false, wineState[e][1]] });
    } else if (!wineState[e][0] && e) {
      setWineState({ ...wineState, [e]: [true, wineState[e][1]] });
    }
  };
  // 선택한 와인 종류를 true 혹은 false로 변환시켜주는 함수

  const convertToArr = (obj) => {
    let result = [];
    for (let key in obj) {
      if (obj[key][0]) result.push(obj[key][1]);
    }
    return result;
  };
  // 사용자가 클릭해서 true로 변한 값의 한글 이름을 배열로 변환해주는 함수
  // API 요청을 보내기 위해 사용됨

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };
  // 클릭했을때 레이팅 값을 변경하는 함수

  const handleRatingChangeHover = (event, newHover) => {
    setRatingHover(newHover);
  };
  // 호버링할때 마우스 커서가 위치한 곳의 레이팅 값을 변경하는 함수

  React.useEffect(() => {
    if (mainPageState.pairingsState) {
      setPairingsState(mainPageState.pairingsState);
    }

    if (mainPageState.flavorState) {
      setFlavorState(mainPageState.flavorState);
    }
    // 메인페이지에서 history state에 담아 보낸 값들을 반영시킨다

    if (mainPageState.selectedWine) {
      setWineState((prevState) => {
        for (let key in wineState) {
          if (mainPageState.selectedWine === key) {
            prevState[key][0] = true;
          }
        }
        return { ...prevState };
      });
    }
    // 메인페이지 네비메뉴에서 선택한 값들을 반영시킨다
  }, []);

  React.useEffect(() => {
    const getFilterdList = async () => {
      try {
        const res = await axios.get('https://buenosvinosserver.ga/wine', {
          params: {
            sweet_min: flavorState.sweet[0],
            sweet_max: flavorState.sweet[1],
            acidic_min: flavorState.acidic[0],
            acidic_max: flavorState.acidic[1],
            body_min: flavorState.body[0],
            body_max: flavorState.body[1],
            type: convertToArr(wineState),
            country: convertToArr(countryState),
            food: convertToArr(pairingsState),
            rating: ratingValue,
          },
        });
        console.log(res.data);
        setFilteredWines(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    // API에 현재 state 값들을 params에 담아 보낸다
    getFilterdList();
  }, [debouncedWinesType, debouncedCountry, debouncedFlavor, debouncedPairings, debouncedRating]);

  console.log(filteredWines);

  return (
    <Grid container direction="row" justify="center" alignItems="stretch">
      <Filter
        selectFlavor={selectFlavor}
        selectPairings={selectPairings}
        selectCountries={selectCountries}
        selectWines={selectWines}
        flavorState={flavorState}
        pairingsState={pairingsState}
        countryState={countryState}
        wineState={wineState}
        ratingHover={ratingHover}
        ratingValue={ratingValue}
        handleRatingChange={handleRatingChange}
        handleRatingChangeHover={handleRatingChangeHover}
      />
      <FilteredList filteredWines={filteredWines} />
    </Grid>
  );
}

export default FilteringPage;
