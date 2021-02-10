import {createStyles,useMediaQuery, Avatar,AppBar, Box, Button, Container,IconButton,Toolbar, Typography, useTheme} from '@material-ui/core';
import React, { useContext } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';


import ListRoundedIcon from '@material-ui/icons/ListRounded';
import logo from "../assets/images/gdpr.png";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => 
createStyles({

    app : {
      backgroundColor:"rgb(24, 164, 245)",
      flexWrap: "wrap"
    },
    container: {
      flexWrap: "wrap",
      backgroundColor:"cornflowerblue"
    },
  
   root : {
     position:"fixed",
    flexGrow : 1,
    flexWrap: "wrap",
    alignItems:"center",
    backgroundColor:"cornflowerblue"
   },
   menuButton : {
   
     flexGrow : 1,
     justifyContent: "right"
   },
   buttons: {
    margin : theme.spacing(1),
   },
   icon:{
  
    //   ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
    //     display: 'none'
    //   }
  
   },
  
   title : {
    marginLeft : theme.spacing(1),//8 px
    // flexGrow : 3,
   },
   img :{
     width: '60px',
     height: '60px'
   }
  
  }))

const Header =()=>{
  const theme = useTheme();
  const history= useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  // const {dispatch} = useContext(AppContext);
  //  const goToLogin = () =>{
    
  //   history.push('/login');
  //  }

  //  const goToLogOut = () => {
  //   dispatch({type: ActionTypes.RESET_PROFILE, payload: null})
  //   history.push('/articles');
  //  }
    const classes = useStyles();
  //   const {state: {profile}} = useContext(AppContext);


    return( 
      isMobile? ( <></>)
      :(
      <AppBar position="static" classes={{
        root:classes.root,
        }}>
        <Container fixed className={classes.container}>
          <Toolbar >  
            <IconButton edge="start" className={classes.menuButton}
            color="inherit" aria-label="menu" >
             
                <Avatar  >
                <img src = {logo} className={classes.img} alt="Logo"/>
                </Avatar>
              
                    <Typography variant="h6" className={classes.title}>GDPR Checker</Typography>
              </IconButton>
      
              <Box margin={1}>

     
               <Button color= "primary" variant="contained" className={classes.buttons} >Sign In</Button>
              <Button color= "secondary" variant="contained" className={classes.buttons} >Sign Up</Button>
            
              </Box>
            </Toolbar>
          </Container>
          </AppBar>
      )
             
        );
    };

export default Header;