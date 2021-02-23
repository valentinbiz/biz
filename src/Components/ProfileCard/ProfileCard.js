import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './ProfileCard.scss';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:275,
    height: 400,
    boxShadow: 4
  },
  second: {
    width:150,
    height:300, 
    backgroundColor: '#000'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProfileCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className='container'> 
    <Card className='card-picture'>
      <CardContent>
        
      </CardContent>
    </Card>

    <Card className='card-description' style={{background: 'black'}} >
        <CardContent>
            <h1>salut</h1>
            <h2> bat si fut ca masina de cusut</h2>
            <h3> pasionat de cafea si memes  </h3>
        </CardContent>
    </Card>

    </div>
  );
};

