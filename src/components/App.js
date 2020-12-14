import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
import ProgressBar from '../components/utility/progressBar';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Stylish', 'sans-serif'].join(','),
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {isLoading ? (
          <ProgressBar done={'100'} />
        ) : (
          <>
            <Nav />
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/users" exact={true} component={MyPage} />
            <Route path="/editinfo" exact={true} component={EditInfoPage} />
            <Route path="/filter" exact={true} component={FilteringPage} />
            <Route path="/result" exact={true} component={SearchResultPage} />
            <Route path="/select" exact={true} component={SelectedOnePage} />
            <Explanation />
            <Footer />
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
