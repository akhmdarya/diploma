
import React from 'react';
import paper from "../assets/images/paper1.png";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    app : {
        backgroundColor:"rgb(24, 164, 245)",
        flexWrap: "wrap"
      },
      container: {
        flexWrap: "wrap",
    //    paddingBottom:'20px'
      },
      loader: {
       display: 'flex',
       '& > * + *': {
         marginLeft: theme.spacing(2),
       },
     },
     table:{
       marginTop:theme.spacing(4),
       maxWidth: "1440px",
     }
    ,
     root : {
      flexGrow : 1,
      flexWrap: "wrap",
      alignItems:"center"
       
     }, main: {
      backgroundColor: '#cfe8fc', height: '100vh',
      position: "relative",
      paddingTop:"150px",
    },
    mainFeaturesPost :{
    position: "relative",
    color:theme.palette.common.white,
    marginBottom: theme.spacing(3),
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    // marginTop:theme.spacing(1),
    
    },mainFeaturesPostContent:{
      position:"relative",
      padding: theme.spacing(10)
    },
    overlay:{
    position:"absolute",
    top:0,
    bottom:0,
    right:0,
    left:0,
    backgroundOverlay :"rgba(0,0,0,.3)"
    },
    cardMedia:{
      paddingTop:"56.25%",
      paddingBottom:"56.25%",
    
    },
    cardContent:{
      flexGrow:1
    },
    mainFeaturesPost:{
  
     padding: theme.spacing(10),
     height: "200px"
    },
    cardGrid:{
      marginTop:theme.spacing(4),
      paddingBottom:"56.25%",
    },
    text:{
      color:"white"
    }
    
    
    }))
 
    const Wallpaper  = ()=>{

        const classes = useStyles();
        return(
         <div className={classes.container}>
         <Paper className={classes.mainFeaturesPost}
        style={{backgroundImage:`url(${paper})` }}>
           <Container maxWidth="sm">
             {/* <Typography variant="h5" align="center" color="textPrimary" gutterBottom>GDPR</Typography> */}
             <Typography variant="h5" align="center" className={classes.text} color="textSecondary" gutterBottom>GDPR - new data processing rules in Europe for the international IT market.</Typography>
           <div >
             <Grid container spacing={5} justify="center">
               <Grid item>
                 {/* <Button variant="contained" color="primary"> Start Now</Button> */}
                 </Grid>
                 <Grid item>
                 {/* <Button variant="outlined" color="primary"> Learn More</Button> */}
                 </Grid>
               </Grid>
             </div>
           </Container>
           </Paper>
         </div>
        )


    }

    export default Wallpaper;