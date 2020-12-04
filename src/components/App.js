import { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import EditInfoPage from '../routes/editInfoPage';
import FilteringPage from '../routes/filteringPage';
import MainPage from '../routes/mainPage';
import MyPage from '../routes/myPage';
import SearchResultPage from '../routes/searchResultPage';
import SelectedOnePage from '../routes/selectedOnePage';
import Nav from './nav';
import Footer from './footer';

function App() {
  const [countryState, setCountryState] = useState({
    argen: false,
    aust: false,
    chile: false,
    france: false,
    germany: false,
    italy: false,
    newzealand: false,
    spain: false,
    usa: false,
  });
  const [flavorState, setFlavorState] = useState({
    sweet: [2, 4],
    acidic: [2, 4],
    body: [2, 4],
  });
  const [pairingState, setPairingState] = useState({
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
  const [wineState, setWineState] = useState({
    red: false,
    white: false,
    rose: false,
    sparkling: false,
  });

  const selectFlavor = (key) => (event, value) => {
    setFlavorState({ ...flavorState, [key]: value });
  };

  const selectPairing = (key) => (e) => {
    if (pairingState[key]) {
      setPairingState({ ...pairingState, [key]: false });
    } else {
      setPairingState({ ...pairingState, [key]: true });
    }
  };

  return (
    <>
      <Nav />
      <HashRouter>
        <Route
          path="/"
          exact={true}
          render={() => (
            <MainPage
              selectFlavor={selectFlavor}
              selectPairing={selectPairing}
              pairingState={pairingState}
            />
          )}
        />
        <Route path="/users" exact={true} component={MyPage} />
        <Route path="/editinfo" exact={true} component={EditInfoPage} />
        <Route path="/filter" exact={true} component={FilteringPage} />
        <Route path="/result" exact={true} component={SearchResultPage} />
        <Route path="/select" exact={true} component={SelectedOnePage} />
      </HashRouter>
      <Footer />
    </>
  );
}
export default App;
