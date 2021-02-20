import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import AspectRatioRoundedIcon from '@material-ui/icons/AspectRatioRounded';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 1,
    paddingTop: '56.25%', // 16:9
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom direction="up" ref={ref} {...props} />;
  });

export default function ProjectCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="YouLoop"/>
        <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Custom made video player to loop Youtube videos.
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton>
                <GitHubIcon />
            </IconButton>
            <IconButton>
                <PublicIcon />
            </IconButton>
            <Button
            onClick={handleClickOpen}
            >
                <AspectRatioRoundedIcon />
            </Button>
        </CardActions>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"YouLoop"}</DialogTitle>
        <DialogContent>
            <CardMedia 
            className={classes.media}
            image="url(https://i.imgur.com/HeGEEbu.jpg)"
            title="Paella dish" />
            <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}