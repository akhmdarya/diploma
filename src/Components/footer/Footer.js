import { createStyles, useMediaQuery, Avatar, AppBar, BottomNavigationAction, Button, Container, IconButton, Toolbar, Typography, useTheme, BottomNavigation } from '@material-ui/core';
import React, { useContext,useState } from 'react';



import {RestoreIcon} from '@material-ui/icons/Restore';
import {FavoriteIcon} from '@material-ui/icons/Favorite';
import {FolderIcon} from '@material-ui/icons/Folder';
import {LocationOnIcon} from '@material-ui/icons/LocationOn';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) =>
    createStyles({

        root: {
            backgroundColor: "rgb(24, 164, 245)",
            flexWrap: "wrap"
        },
    }))
const Footer=()=>{
    const [value,setValue]=useState("Recents")
    const handleChange = (event,newValue) =>{
        setValue(newValue);
    }

    const classes = useStyles();
    return (
        <>
        <footer>
            <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
            <BottomNavigation
                value={value}
                onchange={handleChange}
                className={classes.root}
            >
                <BottomNavigationAction
                label="Recents"
                value='recents'
                icon={<RestoreIcon/>}
                />
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
export default Footer;