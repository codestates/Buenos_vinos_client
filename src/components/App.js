import { HashRouter, Route } from 'react-router-dom';
import editInfoPage from '../routes/editInfoPage';
import filteringPage from '../routes/filteringPage';
import mainPage from '../routes/mainPage';
import myPage from '../routes/myPage';
import searchResultPage from '../routes/searchResultPage';
import selectedOnePage from '../routes/selectedOnePage';
import Nav from './nav';
import Footer from './footer';

function App() {
  return (
    <>
      <Nav />
      <HashRouter>
        <Route path="/" exact={true} component={mainPage} />
        <Route path="/users" exact={true} component={myPage} />
        <Route path="/editinfo" exact={true} component={editInfoPage} />
        <Route path="/filter" exact={true} component={filteringPage} />
        <Route path="/result" exact={true} component={searchResultPage} />
        <Route path="/select" exact={true} component={selectedOnePage} />
      </HashRouter>
      <Footer />
    </>
  );
}
export default App;
