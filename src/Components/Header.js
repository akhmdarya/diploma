import {createStyles,useMediaQuery, MenuItem, Popover, Avatar,AppBar, Box, Button, Container,IconButton,Toolbar, Typography, useTheme} from '@material-ui/core';
import React, { useContext ,useState} from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';


import ListRoundedIcon from '@material-ui/icons/ListRounded';
import logo from "../assets/images/gdpr.png";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => 
createStyles({
  buttons: {
    margin : theme.spacing(1),
   },
  navbar : {
    // top:"60px",
  backgroundColor:"rgb(127, 255, 212)",

    justifyContent: "space-around",
},
popover_container:{
         
  top: "197px!important",
  // right: '200px!important'

 },
 popover:{
  left: '0!important',
  top: '0px!important',
  minWidth: '40%!important',
  maxHeight:'100vh',
  height:'100vh',
  borderRadius:'0px',
  backgroundColor:"cornflowerblue",
   /* For browsers that do not support gradients */
  backgroundImage:" linear-gradient(to right, #6495ED ,#3f51b5)",

 },

    app : {
      backgroundColor:"rgb(24, 164, 245)",
      flexWrap: "wrap"
    },
    container: {
      flexWrap: "wrap",
      backgroundColor:"cornflowerblue",
      maxWidth:" 100%",
    },
  
   root : {
     position:"fixed",
    flexGrow : 1,
    flexWrap: "wrap",
    alignItems:"center",
    justifyContent: "space-around",
        backgroundColor: 'rgba(0,0,0,0.5)',
        
    // backgroundColor:"cornflowerblue"
   },
   menuButton : {
   
     flexGrow : 1,
     justifyContent: "right"
   },
  
   icon:{
  
    //   ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
    //     display: 'none'
    //   }
  
   },
   toolbar:{
justifyContent:"space-between"
   },
  
   title : {
    marginLeft : theme.spacing(1),
    color:"white",
    fontWeight:"500",
    fontSize:"20px"
    //8 px
    // flexGrow : 3,
   },
   img :{
     width: '60px',
     height: '60px'
   },
   rootcontainer:{
    backgroundColor:"cornflowerblue"
   },
   iconButton:{
    //  position:"fixed",
     left:0
   },
   menu_inner:{
     display:"flex",
     justifyContent:"space-evenly",
     backgroundColor:"cornflowerblue",
   },
   boxmenu:{
     display:"inline-flex",
    

   },
   mobile_menu_items:{
    borderBottom: "2px solid #cacaca",

    fontSize:"22px"
   }
  
  }))

const Header =()=>{
  const theme = useTheme();
  const history= useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const id = open ? 'simple-popover' : undefined;
  const handleMenu =  (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const {dispatch} = useContext(AppContext);
  const goToLogin = () =>{
    
    history.push('/login');
   }


  //  const goToLogOut = () => {
  //   dispatch({type: ActionTypes.RESET_PROFILE, payload: null})
  //   history.push('/articles');
  //  }
    const classes = useStyles();
 const menuItems = [  //for mobile menu
        {
            id: 1,
          menuTitle: "Home",
          pageURL: "../../"
        },
        {
            id:2,
          menuTitle: "What Is Gdpr",
          pageURL: "/whatIsGdpr"
        },
        {
            id:3,
          menuTitle: "Cookies",
          pageURL: "/cookies"
        }
      ];


    return( 
      isMobile? (
         <div  className={classes.menu_inner}><IconButton  className={classes.iconButton}
          aria-describedby={id} edge="end" onClick={handleMenu}
      >
        <ListRoundedIcon  className={classes.iconButton}/>
        
      </IconButton>
      <Box margin={1}>

     
               <Button color= "primary" variant="contained" onClick={goToLogin} className={classes.buttons} >Sign In</Button>
              <Button color= "secondary" variant="contained" className={classes.buttons} >Sign Up</Button>
            
              </Box>

        <Popover classes={{
        root:classes.root,
          paper: classes.popover,
        }}
          id={id}
         
          open={open}
          anchorEl={anchorEl}
           onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
         
          
         
        >
          {menuItems.map(menuItem => {
            const { menuTitle, pageURL } = menuItem;
            return (
              <MenuItem classes={{
                root:classes.mobile_menu_items}}
              key={menuItem.id} 
              onClick={() => handleMenuClick(pageURL)}>
              
                {menuItem.menuTitle}
              </MenuItem>
            );
          })}
         
        </Popover>
        </div>
       )





      :(
      <AppBar position="static" classes={{
        root:classes.rootcontainer,
         
        }}  
        // classes={{
        // root:classes.root,
        // }}
        >
        <Container fixed   
        className={classes.container}>
          <Toolbar  className={classes.toolbar}>  
          <Link to= '/'>  <IconButton edge="start" className={classes.menuButton}
            color="inherit" aria-label="menu" >
             
                <Avatar  >
                <img src = {logo} className={classes.img} alt="Logo"/>
                </Avatar>
              
                    <Typography variant="h6" className={classes.title}>GDPR Checker</Typography>
              </IconButton>
              </Link>

              <Box
               classes={{
                root:classes.boxmenu}}
              >
              {menuItems.map(menuItem => {
            const { menuTitle, pageURL } = menuItem;
            return (
              <MenuItem 
              key={menuItem.id} 
              onClick={() => handleMenuClick(pageURL)}>
              
                {menuItem.menuTitle}
              </MenuItem>
            );
          })}
           </Box>
      
              <Box 
            
              margin={1}>

     
               <Button color= "primary" variant="contained" onClick={goToLogin} className={classes.buttons} >Sign In</Button>
              <Button color= "secondary" variant="contained" className={classes.buttons} >Sign Up</Button>
            
              </Box>
              
            </Toolbar>
          </Container>
          </AppBar>
      )
             
        );
    };

export default Header;