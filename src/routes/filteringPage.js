import { Grid } from '@material-ui/core';
import Filter from '../components/filteringPage/filter';
import FilteredList from '../components/filteringPage/filteredList';

function FilteringPage(props) {
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
      />
      <FilteredList flavorState={props.flavorState} pairingsState={props.pairingsState} />
    </Grid>
  );
}

export default FilteringPage;
