import { createStyles, useMediaQuery, Avatar, AppBar, BottomNavigationAction, Button, Container, IconButton, Toolbar, Typography, useTheme, BottomNavigation } from '@material-ui/core';
import React, { useContext,useState } from 'react';


import { useParams } from 'react-router-dom';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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

const FlagInfo =(flagName)=>{
    // const {flagName} = useParams();
    console.log(flagName.match.params.flagName);
    
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
               
    >{flagName}</BottomNavigationAction>
                <BottomNavigationAction
                label="Favorites"
                value='favorites'
                icon={<FavoriteIcon/>}
                />
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
export default FlagInfo