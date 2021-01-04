import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const useStyles = makeStyles({
    pagination: {
      float: 'right',
      position: 'relative',
      left: '-50%',
      listStyle: 'none',
      textAlign: 'center',
      borderRadius: '3px',
      color: 'black',
      padding: '1px',
      borderTop: '3px solid  #186EAD',
      borderBottom: '3px solid  #186EAD',
      background: 'white',
    },
    paginationItem: {
      float: 'left',
      display: 'inlineblock',
      fontSize: '17px',
      fontWeight: '600',
      padding: '5px',
      borderRadius: '5px',
      width: '25px',
      '&:hover': {
        cursor: 'pointer',
        color: 'white',
        background: '#263A6C',
      },
    },
  });
  const pageNumber = [];

  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const classes = useStyles();
  return (
    <ul className={classes.pagination}>
      {pageNumber.map((pageNum) => (
        <Typography
          key={pageNum}
          className={classes.paginationItem}
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
        </Typography>
      ))}
    </ul>
  );
};

export default Pagination;
