import { Grid, makeStyles, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles({
  list: {
    margin: '10px',
    padding: '15px',
    borderRadius: '10px',
  },
  text: {
    padding: '15px',
    margin: '10px',
  },
  sortBtn: {
    float: 'right',
    left: '10px',
    marginBottom: '5px',
  },
});

function FilteredList(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === 'desc') {
      props.handleSortDesc();
    }
    // 평점 높은순으로 버튼 클릭시 높은순으로 정렬
    if (e.currentTarget.id === 'asce') {
      props.handleSortAsce();
    }
    // 평점 낮은순으로 버튼 클릭시 낮은순으로 정렬
    setAnchorEl(null);
    // 메뉴 닫힘
  };

  const classes = useStyles();
  // 와인 선택 페이지로 이동
  const history = useHistory();
  const onClick = (wine) => {
    console.log(wine);
    history.push({
      pathname: './select',
      state: wine,
    });
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ borderRadius: '15px' }}
    >
      <Grid item xs={8} md={8}>
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            variant="outlined"
            onClick={handleClick}
            className={classes.sortBtn}
          >
            정렬하기
          </Button>
          <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose} id="desc">
              평점 높은순
            </MenuItem>
            <MenuItem onClick={handleClose} id="asce">
              평점 낮은순
            </MenuItem>
          </Menu>
        </div>
        {props.filteredWines.map((item) => (
          <Grid
            className={classes.text}
            container
            direction="row"
            alignItems="stretch"
            key={item.id}
            style={{ backgroundColor: 'white', marginBottom: 10, cursor: 'pointer' }}
            onClick={() => onClick(item)}
          >
            <Grid
              item
              xs={2}
              md={2}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#CAC5D8',
                borderRadius: '15px',
              }}
            >
              <img src={item.image} style={{ width: 50, height: 180 }} alt="wine" />
            </Grid>
            <Grid item xs={3} md={3} className={classes.text}>
              <Typography variant="body1">{item.name}</Typography>
              <Typography>
                <small>({item.name_en})</small>
              </Typography>
              <img src={item.country.image} style={{ width: 10, height: 10 }} alt="country"></img>
              <Typography variant="body2" style={{ display: 'inline', paddingLeft: 5 }}>
                {`${item.country.name}산 ${item.type.name}`}
                <br />
              </Typography>
              <Typography
                variant="h4"
                style={{
                  display: 'inline',
                  marginTop: 50,
                  paddingRight: 6,
                  verticalAlign: '2pt',
                }}
              >
                {item.rating.toFixed(1)}
              </Typography>
              <Typography style={{ display: 'inline-block', marginTop: 50 }}>
                <Rating defaultValue={item.rating} precision={0.1} readOnly />
              </Typography>
            </Grid>
            <Grid className={classes.text} item xs={6} md={6}>
              <Typography variant="h5">Wine Style</Typography>
              <br />
              <Typography>{item.content}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
export default FilteredList;
