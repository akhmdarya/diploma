import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import {checkURL,dateTime} from '../../utils'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    app : {
      backgroundColor:"rgb(24, 164, 245)",
      flexWrap: "wrap"
    },
    container: {
      flexWrap: "wrap",
      margin:'20px'
    },
    loader: {
     display: 'flex',
     '& > * + *': {
       marginLeft: theme.spacing(2),
     },
   },
   table:{
     marginTop:theme.spacing(4),
    //  maxWidth: "1440px",
     minWidth: 650,
   }
  ,
   root : {
    flexGrow : 1,
    flexWrap: "wrap",
    alignItems:"center",
    justifyItems:"center", justifyContent:"center",

     
   }, main: {
    backgroundColor: '#cfe8fc', height: '100vh',
    position: "relative",
    paddingTop:"150px",
  },tableContainer:{
      justifyItems:"center",
      alignItems:"center",
      marginBottom:"30px"
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
  cardGrid:{
    marginTop:theme.spacing(4),
    paddingBottom:"56.25%",
  },
  mainn:{
    justifyItems:"center",
    alignItems:"center"
  }
  
  
  }))
const TableCookies  = (props)=>{
    const classes = useStyles();
    return(
        <>
    
        {props.results?
       <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.mainn}>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Domain</TableCell>
            <TableCell align="center">Hostname</TableCell>
            <TableCell align="center">Secure</TableCell>
            <TableCell align="center">HttpOnly</TableCell>
            <TableCell align="center">priority</TableCell>
            <TableCell align="center">sameSite</TableCell>
            <TableCell align="center">expires</TableCell>
            <TableCell align="center">flagCookies</TableCell>
            <TableCell align="center">path</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
    
        {props.results.map((result) =>(
               result.name?
               <TableRow key={result.name}>
                 <TableCell align="center" component="th" scope="row">
                   {result.domain}
                  {/* {{const date= }} */}
                 </TableCell>
                 <TableCell align="center">{result.name}</TableCell>
                 <TableCell align="center">{result.domain}</TableCell>
                 <TableCell align="center">{String(result.secure)}</TableCell>
                 <TableCell align="center">{String(result.httpOnly)}</TableCell>
                 <TableCell align="center">{result.priority}</TableCell>
                 <TableCell align="center">{result.sameSite}</TableCell>
                 <TableCell align="center">{dateTime(result.expires)}</TableCell>
                 {/* <TableCell align="right">{result.flagCookies}</TableCell> */}
                 <TableCell align="center">
                 <Link to={`/cookies/${result.flagCookies}`}   target="_blank"> {result.flagCookies}</Link></TableCell>
                 <TableCell align="center">{result.path}</TableCell>
               </TableRow>
               :
               
               <></>
        ))}
        
               </TableBody>
               </Table>
               </TableContainer>
               :
               <>No cookies!</>
}
             
               </>

      
    )
}
export default TableCookies;
