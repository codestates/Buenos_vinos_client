import { Grid, makeStyles } from '@material-ui/core';
import wineName from '../../image/wineName.png';
import wineType from '../../image/type.png';
import winery from '../../image/winery.png';
import alcohol from '../../image/alcohol.png';

function DetailInfo({ searchResult }) {
  const useStyles = makeStyles((theme) => ({
    text: {
      padding: '15px',
      margin: '10px',
    },
    listbox: {
      margin: '7px',
    },
    image: {
      marginRight: 5,
      width: '30px',
      height: '30px',
      verticalAlign: '-5pt',
    },
    lineName: {
      border: '1px solid black',
      fontSize: '1.5rem',
      padding: '10px 20px',
    },
    lineInfo: {
      border: '1px solid black',
      fontSize: '1.5rem',
      maxWidth: '998px',
      padding: '10px 20px 10px 20px',
    },
    font: {
      fontSize: '2rem',
    },
    button: {
      display: 'inline',
      cursor: 'pointer',
    },
  }));
  const classes = useStyles();

  return (
    <>
      <Grid
        item
        xs={12}
        md={12}
        style={{
          borderRadius: '15px',
          backgroundColor: '#FAF6EE',
          display: 'flex',
          justifyContent: 'center',
          margin: '10px',
        }}
      >
        <table
          style={{
            fontSize: '1rem',
            margin: 20,
            border: '1px solid black',
          }}
        >
          <caption
            style={{
              fontSize: '2rem',
              lineHeight: 'normal',
              textAlign: 'left',
              marginLeft: '5px',
              marginBottom: '20px',
            }}
          >
            와인 상세 정보
          </caption>

          <tbody>
            <tr style={{ borderCollapse: 'collapse' }}>
              <th className={classes.lineName}>
                <div className={classes.listbox}>
                  <img className={classes.image} src={wineName} alt="wineName" />
                  <span> 와인 이름 </span>
                </div>
              </th>
              <td className={classes.lineInfo}>
                <span> {searchResult.name_en} </span>
              </td>
            </tr>
            <tr>
              <th className={classes.lineName}>
                <div className={classes.listbox}>
                  <img className={classes.image} src={wineType} alt="wineType" />
                  <span> 와인 타입 </span>
                </div>
              </th>
              <td className={classes.lineInfo}>
                <span> {searchResult.type.name} </span>
              </td>
            </tr>
            <tr>
              <th className={classes.lineName}>
                <div className={classes.listbox}>
                  <img className={classes.image} src={alcohol} alt="alcohol" />
                  <span>와인 도수</span>
                </div>
              </th>
              <td className={classes.lineInfo}>
                <span> {searchResult.alcohol_content}% </span>
              </td>
            </tr>
            <tr>
              <th className={classes.lineName}>
                <div className={classes.listbox}>
                  <img className={classes.image} src={searchResult.country.image} alt="country" />
                  <span>수입 국가</span>
                </div>
              </th>
              <td className={classes.lineInfo}>
                <span> {searchResult.country.name} </span>
              </td>
            </tr>
            <tr>
              <th className={classes.lineName}>
                <div className={classes.listbox}>
                  <img className={classes.image} src={winery} alt="winery" />
                  <span> 와이너리 </span>
                </div>
              </th>
              <td className={classes.lineInfo}>
                <span> {searchResult.winery}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </>
  );
}

export default DetailInfo;
