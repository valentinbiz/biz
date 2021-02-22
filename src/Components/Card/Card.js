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
import './Card.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FE6B8B',
    padding: 10,
    minWidth: 250,
    maxWidth: 250,
    minHeight: 300,
  },
  media: {
    height: 1,
    paddingTop: '56.25%', // 16:9
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom direction="up" ref={ref} {...props} />;
  });

export default function ProjectCard(props) {
  const classes = useStyles();

  const [openId, setOpenId] = React.useState(null);

  const handleClickOpen = id => {
    setOpenId(id);
  };

  const handleClose = () => {
    setOpenId(null);
  };

  return (
    <div className='individual-card'>
      {props.projectList.map( proj => {
        return(
            <Card className={classes.root} >
            <CardHeader
            title={proj.name}/>
            <CardMedia
                className={classes.media}
                image={proj.picture}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {proj.type}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <GitHubIcon />
                </IconButton>
                <IconButton>
                    <PublicIcon href={proj.live}/>
                </IconButton>
                <Button
                onClick={() => handleClickOpen(proj.id)} >
                    <AspectRatioRoundedIcon />
                </Button>
            </CardActions>
          
          <Dialog
            open={openId === proj.id}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            key={proj.id}
            // useStyles='background: '#FE6B8B'
          >
            <DialogTitle key={proj.id} >{proj.name}</DialogTitle>
            <DialogContent>
                <CardMedia 
                className={classes.media}
                image={proj.picture}
                title="Paella dish" />
                <DialogContentText id="alert-dialog-slide-description">
                    {proj.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

        </Card>
          )
        })}
    </div>
  );
}