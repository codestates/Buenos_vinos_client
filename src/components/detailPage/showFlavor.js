import FlavorBar from './flavorBar';
function ShowFlavor({ searchResult }) {
  return (
    <>
      <div style={{ marginTop: '3vh' }}>
        <FlavorBar flavor="산도 " done={searchResult.acidic * 20} searchResult={{ searchResult }} />
        <FlavorBar flavor="당도 " done={searchResult.sweet * 20} />
        <FlavorBar flavor="바디 " done={searchResult.body * 20} />
      </div>
    </>
  );
}
export default ShowFlavor;
