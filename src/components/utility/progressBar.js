import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  progress: {
    backgroundColor: '#d8d8d8',
    borderRadius: '20px',
    position: 'relative',
    margin: '15px 0',
    height: '30px',
    width: '500px',
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
  layout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight}px`,
  },
}));

const ProgressBar = ({ done }) => {
  // done => 100 수치를 뜻함 일단 수정 필요
  const [style, setStyle] = useState({});
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };
      return setStyle(newStyle);
    }, 500);
  }, []);
  return (
    <div className={classes.layout}>
      <div className={classes.progress}>
        <div className={classes.progressDone} style={style}>
          {done}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
