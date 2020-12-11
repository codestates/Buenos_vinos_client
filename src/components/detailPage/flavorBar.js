import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  text: {
    padding: '15px',
    margin: '10px',
  },
  button: {
    display: 'inline',
    cursor: 'pointer',
  },
  progress: {
    backgroundColor: '#d8d8d8',
    borderRadius: '20px',
    position: 'relative',
    margin: '15px 0',
    height: '30px',
    width: '250px',
  },
  progressDone: {
    background: 'linear-gradient(to left, #F2709C, #FF9472)',
    boxShadow: '0 3px 3px -5px #F2909C, 0 2px 5px #F2909C',
    borderRadius: 20,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    height: '100%',
    width: 0,
    transition: '2s ease',
  },
}));

const FlavorBar = ({ done, flavor }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }, 500);
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <div className={classes.progressDone} style={style}>
        {flavor}
        {done / 20}
      </div>
    </div>
  );
};

export default FlavorBar;
