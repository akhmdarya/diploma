import { createStyles, useMediaQuery, Avatar, AppBar, BottomNavigationAction, Button, Container, IconButton, Toolbar, Typography, useTheme, BottomNavigation } from '@material-ui/core';
import React, { useContext,useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';


import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PolicyIcon from '@material-ui/icons/Policy';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) =>
    createStyles({

        root: {
        
            backgroundColor: "#87CEFA",
            // flex: "0 0 auto",
           
            flexWrap: "wrap"
        },
        footer:{
            backgroundColor: "#4169E1",
            // bottom: "0",
            bottom: "0",
            // position: "fixed",
            width: "100%",
        }
    }))
const Footer =()=>{

    
    const [value,setValue]=useState("Recents")
    const handleChange = (event,newValue) =>{
        setValue(newValue);
    }

   const classes = useStyles();
    return (
      
        <>
        <footer className={classes.footer}>
           <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}
            >
                <BottomNavigationAction
                label="Recents"
                value='recents'
                icon={<RestoreIcon/>}
                />

                
               <BottomNavigationAction


                label={ <Link to='/policy'>Privacy Policy</Link>}
                value='policy'
                icon={<PolicyIcon/>}
                >
                   <Typography> Privacy Policy
                       </Typography>
                    </BottomNavigationAction>



                <BottomNavigationAction
                label="Nearby"
                value='nearby'
                icon={<LocationOnIcon/>}
                />
                <BottomNavigationAction
                label="Folder"
                value='folder'
                icon={<FolderIcon/>}
                />
                </BottomNavigation>
                <Typography align='center' color="textSecondary"
                component="p" variant='subtitle1'>GDPR compliance checker</Typography>
        </footer>
        </>
    );
};
export default Footer