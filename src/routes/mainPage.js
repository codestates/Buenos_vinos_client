import FindYourWines from '../components/mainPage/findYourWines';
import Explanation from '../components/mainPage/explanation';
import Recommended from '../components/mainPage/recommended';
import Flavor from '../components/filteringPage/flavor';
import Pairings from '../components/filteringPage/pairings';

function MainPage(props) {
  return (
    <>
      <FindYourWines>
        <Recommended />
        <Pairings selectOnePairing={props.selectOnePairing} />
        <Flavor selectFlavor={props.selectFlavor} flavorState={props.flavorState} />
      </FindYourWines>
      <Explanation />
    </>
  );
}
export default MainPage;
