import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, Button, Grid } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import BuildIcon from '@material-ui/icons/Build';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import footerLogo from '../image/footerLogo.png';

const useStyles = makeStyles({
  footer: {
    boxSizing: 'content-box',
    backgroundColor: '#F2D1CF',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    height: 'auto',
    width: 'auto',
  },
  btnContainer: {
    justifyContent: 'center',
    paddingTop: '20px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#eeeeee',
    border: '5px solid #ffffff',
    width: ' 50%',
    height: '50%',
  },
  modalTitle: {
    alignItems: 'center',
    textAlign: 'center',
    background: '#1b0000',
    color: 'white',
    width: '100%',
    marginBottom: '20px',
  },
  modalText: {
    backgroundColor: '#d3b8ae',
    borderRadius: '5px',
  },
  infoText: {
    textAlign: 'center',
    marginTop: '5%',
    backgroundColor: '#d3b8ae',
    width: '40%',
    margin: 'auto',
    borderRadius: '20px',
  },
});

function Footer() {
  const classes = useStyles();
  const [techModal, setTech] = React.useState(false);
  const [contactModal, setContact] = React.useState(false);
  const [infoModal, setInfo] = React.useState(false);

  const infoOpen = () => {
    setInfo(true);
  };

  const infoClose = () => {
    setInfo(false);
  };

  const contactOpen = () => {
    setContact(true);
  };

  const contactClose = () => {
    setContact(false);
  };

  const techOpen = () => {
    setTech(true);
  };

  const techClose = () => {
    setTech(false);
  };

  return (
    <>
      <Box className={classes.footer}>
        <img
          // src="https://penzim.synology.me/image/finalProject/logo/logo.png"
          src={footerLogo}
          alt="logo"
          style={{ marginTop: 20 }}
        ></img>
        <Grid container spacing={1} className={classes.btnContainer}>
          <Grid item xs={6} sm={2}>
            <Button startIcon={<BuildIcon />} onClick={techOpen}>
              tech
            </Button>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Button startIcon={<ContactMailIcon />} onClick={contactOpen}>
              contact
            </Button>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Button startIcon={<GroupIcon />} onClick={infoOpen}>
              info
            </Button>
          </Grid>
        </Grid>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={techModal}
          onClose={techClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={techModal}>
            <div className={classes.paper}>
              {' '}
              <Typography variant="h3" className={classes.modalTitle}>
                Back-End
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png"
                    width="40%"
                    alt="typescriptLogo"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <img
                    src="https://penzim.synology.me/image/finalProject/footer/logo/aws.png"
                    width="50%"
                    alt="awsLogo"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <img
                    src="https://penzim.synology.me/image/finalProject/footer/logo/nodejs.png"
                    width="50%"
                    alt="nodeLogo"
                  />
                </Grid>
              </Grid>
              <Typography variant="h3" className={classes.modalTitle}>
                Front-End
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={9} sm={3}>
                  <img
                    src="https://penzim.synology.me/image/finalProject/footer/logo/javascript.png"
                    width="50%"
                    alt="typescriptLogo"
                  />
                </Grid>
                <Grid item xs={9} sm={3}>
                  <img
                    src="https://penzim.synology.me/image/finalProject/footer/logo/materialui.png"
                    width="50%"
                    alt="awsLogo"
                  />
                </Grid>
                <Grid item xs={9} sm={3}>
                  <img
                    src="https://penzim.synology.me/image/finalProject/footer/logo/react.png"
                    width="80%"
                    alt="nodeLogo"
                  />
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={contactModal}
          onClose={contactClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={contactModal}>
            <div className={classes.paper}>
              {' '}
              <Typography variant="h3" className={classes.modalTitle}>
                contact
              </Typography>
              <Container>
                <Typography variant="h4" gutterBottom>
                  Front-End
                </Typography>
                <Box className={classes.modalText}>
                  <Typography variant="h6">이창근 : amistadlee10@gmail.com</Typography>{' '}
                  <Typography variant="h6">이승철 : astartes22@gmail.com</Typography>{' '}
                  <Typography variant="h6">박지국 : paxjk3687@gmail.com</Typography>{' '}
                </Box>
                <Typography variant="h4" gutterBottom>
                  Back-End
                </Typography>
                <Box className={classes.modalText}>
                  <Typography variant="h6">배채겸 : corua0309@gmail.com</Typography>{' '}
                </Box>
              </Container>
            </div>
          </Fade>
        </Modal>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={infoModal}
          onClose={infoClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={infoModal}>
            <div className={classes.paper}>
              {' '}
              <Typography variant="h3" className={classes.modalTitle}>
                info
              </Typography>
              <Grid container spacing={1} className={classes.infoText}>
                <Grid item xs={12}>
                  <Typography variant="h4">프로젝트</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Buenos_vinos</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4">프론트엔드</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">이창근 | 이승철 | 박지국</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4">백엔드</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">배채겸</Typography>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>
      </Box>
    </>
  );
}
export default Footer;
