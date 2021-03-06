import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
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
  const [value, setValue] = useState('');
  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }, 500);
    let nameOfBar = flavor + done / 20;
    setTimeout(() => {
      setValue(nameOfBar);
    }, 1500);
  }, []);

  const classes = useStyles();
  setTimeout(() => {}, 1000);
  return (
    <div className={classes.progress}>
      <div className={classes.progressDone} style={style}>
        {value}
      </div>
    </div>
  );
};

export default FlavorBar;
