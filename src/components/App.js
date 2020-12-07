import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import EditInfoPage from '../routes/editInfoPage';
import FilteringPage from '../routes/filteringPage';
import MainPage from '../routes/mainPage';
import MyPage from '../routes/myPage';
import SearchResultPage from '../routes/searchResultPage';
import SelectedOnePage from '../routes/selectedOnePage';
import Nav from './nav';
import Footer from './footer';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Stylish', 'sans-serif'].join(','),
  },
});

function App() {
  const [countryState, setCountryState] = React.useState({
    argen: false,
    australia: false,
    chile: false,
    france: false,
    germany: false,
    italy: false,
    newzealand: false,
    spain: false,
    usa: false,
  });

  const [flavorState, setFlavorState] = React.useState({
    sweet: [2, 4],
    acidic: [2, 4],
    body: [2, 4],
  });

  const [pairingsState, setPairingsState] = React.useState({
    beef: false,
    pork: false,
    poultry: false,
    fish: false,
    seafood: false,
    pasta: false,
    cheese: false,
    fruit: false,
    vagetable: false,
  });

  const [wineState, setWineState] = React.useState({
    red: false,
    white: false,
    rose: false,
    sparkling: false,
  });

  const selectFlavor = (e, value) => {
    setFlavorState({ ...flavorState, [e]: value });
  };

  const selectOnePairing = (e) => {
    setPairingsState((prevState) => {
      for (let key in prevState) {
        prevState[key] = false;
      }
      return { ...prevState, [e]: true };
    });
  };

  const selectPairings = (e) => {
    if (pairingsState[e] && e) {
      setPairingsState({ ...pairingsState, [e]: false });
    } else if (!pairingsState[e] && e) {
      setPairingsState({ ...pairingsState, [e]: true });
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
      <Nav />
      <HashRouter>
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
              flavorState={flavorState}
              pairingsState={pairingsState}
            />
          )}
        />
        <Route path="/result" exact={true} component={SearchResultPage} />
        <Route path="/select" exact={true} component={SelectedOnePage} />
      </HashRouter>
      <Footer />
      </ThemeProvider>
    </>
  );
}
export default App;
