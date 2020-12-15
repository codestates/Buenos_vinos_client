import { Button, Fade, Modal, Typography, makeStyles, Backdrop } from '@material-ui/core';
import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '30%',
    height: '50%',
  },
  signBtn: {
    fontWeight: '700',
    fontSize: '1.5rem',
  },
}));

function SignModal(props) {
  const classes = useStyles();
  const [togleSignUp, setTogleSignUp] = React.useState(false);

  const handleClick = (e) => {
    if (e.currentTarget.name === 'signIn') {
      setTogleSignUp(false);
    }
    if (e.currentTarget.name === 'signUp') {
      setTogleSignUp(true);
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.signInModal}
      onClose={props.signInClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.signInModal}>
        <div className={classes.paper}>
          <Typography variant="h3">
            <Button name="signIn" onClick={handleClick} classNa me={classes.signBtn}>
              로그인
            </Button>
            |
            <Button name="signUp" onClick={handleClick} className={classes.signBtn}>
              회원가입
            </Button>
            <Button
              type="button"
              onClick={props.signInClose}
              style={{
                backgroundColor: 'transparent',
                border: '0',
                float: 'right',
                fontSize: '1.5rem',
                fontWeight: '700',
              }}
            >
              x
            </Button>
          </Typography>
          {togleSignUp ? <SignUp /> : <SignIn signInClose={props.signInClose} />}
        </div>
      </Fade>
    </Modal>
  );
}

export default SignModal;
