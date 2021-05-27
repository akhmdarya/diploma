import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import persd from '../../assets/images/pd.webp';
import list from '../../assets/images/list2.jpg';
import collect from '../../assets/images/search.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    backgroundColor: 'cornflowerblue',
    marginTop:theme.spacing(5),
    padding:theme.spacing(5),
  },
  paper: {
    height: 240,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
    paddingRight:theme.spacing(3),
    paddingLeft:theme.spacing(3),
    maxWidth:'270px'
  },
  text:{
      color:'white',
  },img_icon:{
      maxWidth:'100px',
      maxHeight:'100px'
  },
  pic:{
    width:'100%'
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const results= [
  {id:1,image: persd,name:'Checking type of data web-site collects'},
  {id:2,image:collect,name:'Scanning privacy policy and cookie notice' },
  {id:3,image:list,name:'Getting a report with results according GDPR articles' },
 
];


  return (
    <><Grid container className={classes.root}>

      <Grid item xs={12}>
        <Typography align='center' className={classes.text} variant='h5'>HOW IT WORKS</Typography>
        <Grid container justify="center">
          {/* {[0, 1, 2].map((value) => (
      <Grid key={value} item>
        <Paper className={classes.paper} />
      </Grid>
    ))} */}

          {results.map((result) => (
            <Grid key={result.id} className={classes.control} item>
              <img className={classes.img_icon} src={result.image} />
              <Typography className={classes.text}>
                {result.name}
              </Typography>
            </Grid>
          ))}

        </Grid>
      </Grid>

    </Grid></>
  );
}
