import {
  Button,
  Fade,
  Modal,
  Typography,
  makeStyles,
  Backdrop,
  IconButton,
  Divider,
} from '@material-ui/core';
import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CloseIcon from '@material-ui/icons/Close';

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
    width: '400px',
    height: '460px',
  },
  signBtn: {
    fontWeight: '700',
    fontSize: '1.5rem',
  },
  disabledSignBtn: {
    fontWeight: '700',
    fontSize: '1.5rem',
    filter: 'opacity(50%)',
  },
}));

function SignModal(props) {
  const classes = useStyles();
  const [toggleSignUp, setTogleSignUp] = React.useState(false);

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
            <Button
              name="signIn"
              onClick={handleClick}
              className={toggleSignUp ? classes.disabledSignBtn : classes.signBtn}
            >
              로그인
            </Button>
            |
            <Button
              name="signUp"
              onClick={handleClick}
              className={toggleSignUp ? classes.signBtn : classes.disabledSignBtn}
            >
              회원가입
            </Button>
            <IconButton
              onClick={props.signInClose}
              style={{
                float: 'right',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Typography>
          {toggleSignUp ? (
            <SignUp setTogleSignUp={setTogleSignUp} />
          ) : (
            <SignIn signInClose={props.signInClose} />
          )}
        </div>
      </Fade>
    </Modal>
  );
}

export default SignModal;
