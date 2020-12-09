import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import EditInfoPage from '../routes/editInfoPage';
import FilteringPage from '../routes/filteringPage';
import MainPage from '../routes/mainPage';
import MyPage from '../routes/myPage';
import SearchResultPage from '../routes/searchResultPage';
import SelectedOnePage from '../routes/selectedOnePage';
import Nav from './nav';
import Footer from './footer';
import Explanation from './explanation';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Stylish', 'sans-serif'].join(','),
  },
});

function App() {
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
    beef: [false, '돼지고기'],
    pork: [false, '소고기'],
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

  const selectFlavor = (e, value) => {
    setFlavorState({ ...flavorState, [e]: value });
  };

  const selectOnePairing = (e) => {
    setPairingsState((prevState) => {
      for (let key in prevState) {
        prevState[key][0] = false;
      }
      return { ...prevState, [e]: [true, prevState[e][1]] };
    });
  };

  const selectPairings = (e) => {
    if (pairingsState[e][0] && e) {
      setPairingsState({ ...pairingsState, [e]: [false, pairingsState[e][1]] });
    } else if (!pairingsState[e][0] && e) {
      setPairingsState({ ...pairingsState, [e]: [true, pairingsState[e][1]] });
    }
  };

  const selectCountries = (e) => {
    if (countryState[e][0] && e) {
      setCountryState({ ...countryState, [e]: [false, countryState[e][1]] });
    } else if (!countryState[e][0] && e) {
      setCountryState({ ...countryState, [e]: [true, countryState[e][1]] });
    }
  };

  const selectWines = (e) => {
    if (wineState[e][0] && e) {
      setWineState({ ...wineState, [e]: [false, wineState[e][1]] });
    } else if (!wineState[e][0] && e) {
      setWineState({ ...wineState, [e]: [true, wineState[e][1]] });
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Nav />
          <Route
            path="/"
            exact={true}
            render={() => (
              <MainPage
                selectFlavor={selectFlavor}
                selectOnePairing={selectOnePairing}
                flavorState={flavorState}
              />
            )}
          />
          <Route path="/users" exact={true} component={MyPage} />
          <Route path="/editinfo" exact={true} component={EditInfoPage} />
          <Route
            path="/filter"
            exact={true}
            render={() => (
              <FilteringPage
                selectFlavor={selectFlavor}
                selectPairings={selectPairings}
                selectCountries={selectCountries}
                selectWines={selectWines}
                flavorState={flavorState}
                pairingsState={pairingsState}
                countryState={countryState}
                wineState={wineState}
              />
            )}
          />
          <Route path="/result" exact={true} component={SearchResultPage} />
          <Route path="/select" exact={true} component={SelectedOnePage} />
          <Explanation />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
export default App;
