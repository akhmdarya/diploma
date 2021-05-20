import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Grid from '@material-ui/core/Grid';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import Favorite from '@material-ui/icons/Favorite';
import HttpsIcon from '@material-ui/icons/Https';
import checklist from '../../assets/images/GDPRChecklist_blog.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 3,
      backgroundColor: 'cornflowerblue',
      marginTop:theme.spacing(5),
      padding:theme.spacing(5),
    },img_icon:
    {maxWidth:'400px',
    [theme.breakpoints.down('sm')]: {
        maxWidth:'280px'
       }
    },
    items:{
        marginTop:theme.spacing(5),
        padding:theme.spacing(5),
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        [theme.breakpoints.down('sm')]: {
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            marginTop:theme.spacing(2),
            padding:theme.spacing(2),
           },
    },
    list:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    label:{
        // color:'white',
        fontSize:'20px',
        fontWeight:'600'
    }


}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Checklist() {
    const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>

<Grid item xs={12}>
    <div className={classes.items}>
         <img className={classes.img_icon} src={checklist} />
         <div className={classes.list}>
      <FormControlLabel className={classes.label}
        control={<Checkbox  icon={<HttpsIcon />} checkedIcon={<HttpsIcon />} checked={state.checkedA} onChange={handleChange} name="checkedA" />}
       
      label='Use HTTPS for secure communication' color="primary"/>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"/>}
        label="Primary"/>
   
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Custom color" />
        </div>
        </div>
  
 </Grid>
    </FormGroup>
  );
}