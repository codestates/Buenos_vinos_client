import FindYourWines from '../components/mainPage/findYourWines';
import Explanation from '../components/mainPage/explanation';
import Recommended from '../components/mainPage/recommended';
import Flavor from '../components/filteringPage/flavor';
import Pairings from '../components/filteringPage/pairings';

function MainPage() {
  return (
    <>
      <FindYourWines>
        <Recommended /> <Pairings /> <Flavor />
      </FindYourWines>
      <Explanation />
    </>
  );
}
export default MainPage;
