import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { amber, deepPurple, grey } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import HttpsIcon from '@material-ui/icons/Https';
import checklist from '../../assets/images/GDPRChecklist_blog.jpg';
import PaletteIcon from '@material-ui/icons/Palette';
import PolicyIcon from '@material-ui/icons/Policy';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import SecurityIcon from '@material-ui/icons/Security';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 3,
      backgroundColor: 'cornflowerblue',
      marginTop:theme.spacing(5),
      padding:theme.spacing(5),
    },img_icon:
    {maxWidth:'300px',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
        maxWidth:'250px',
        borderRadius: '20px',
       }
    },
    background:{
       backgroundColor: 'cornflowerblue', 
       marginTop:theme.spacing(5),
       padding:theme.spacing(5),
      
    },
    items:{
       
        padding:theme.spacing(3),
        display:'flex',
        justifyContent:'space-evenly',
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
        
    },
    label:{
        // color:'white',
        fontSize:'18px',
        fontWeight:'400',
        color:'white',
     
    },
    blue:{
        color:'blue'
    },
    text:{
        color:'white'
    }


}));

const GreenCheckbox = withStyles({
  root: {
    color: grey[600],
    '&$checked': {
      
      color: '#eeff41',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props}  />);

const YellowCheckbox = withStyles({
    root: {
      color: grey[600],
      '&$checked': {
       
        color: amber[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props}  />);

  const BlueCheckbox = withStyles({
    root: {
       color: grey[600],
      '&$checked': {
       
        color: '#1de9b6',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props}  />);
  const DeepPurpleCheckbox = withStyles({
    root: {
       color: grey[600],
      '&$checked': {
      
        color: deepPurple[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props}  />);

export default function Checklist() {
    const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
    checkedC: true,
    checkedD: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>

<Grid item xs={12} className={classes.background}>
<Typography align='center' className={classes.text} variant='h5'>HOW TO BE GDPR COMPLIANT</Typography>
    <div className={classes.items}>
         <img className={classes.img_icon} src={checklist} />
         <div className={classes.list}>
      <FormControlLabel 
        control={<Checkbox   icon={<HttpsIcon />} checkedIcon={<HttpsIcon />} checked={state.checkedA} onChange={handleChange} name="checkedA" />}
       
      label='Use HTTPS for secure communication' classes={{label:classes.label}} color="primary"></FormControlLabel>
      <FormControlLabel
        control={
          <Checkbox

          icon={<PaletteIcon />} checkedIcon={<PaletteIcon />}
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"/>}
        label="Inform about cookies" classes={{label:classes.label}} />
   
      <FormControlLabel
        control={<GreenCheckbox 
            icon={<ScreenShareIcon />} checkedIcon={<ScreenShareIcon />}
            checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Let users know about your data sharing policy" classes={{label:classes.label}}  />


<FormControlLabel
        control={<YellowCheckbox 
            icon={<SecurityIcon />} checkedIcon={<SecurityIcon />}
            checked={state.checkedF} onChange={handleChange} name="checkedF" />}
        label="Install programs to assess cyber risks" classes={{label:classes.label}} />

<FormControlLabel
        control={<BlueCheckbox 
            icon={<TransferWithinAStationIcon />} checkedIcon={<TransferWithinAStationIcon />}
            checked={state.checkedC} onChange={handleChange} name="checkedC" />}
        label="Make sure all third-party vendors are GDPR compliant" classes={{label:classes.label}} />

<FormControlLabel
        control={<DeepPurpleCheckbox 
            icon={<PolicyIcon />} checkedIcon={<PolicyIcon />}
            checked={state.checkedD} onChange={handleChange} name="checkedD" />}
        label="Let users know about your privacy notices and policies" classes={{label:classes.label}}  />




        </div>
        </div>
  
 </Grid>
    </FormGroup>
  );
}