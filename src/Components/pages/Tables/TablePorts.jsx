import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
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
const TablePorts  = (props)=>{
    var Array2=["FTP", "SSH", "Telnet", "SMTP(Mail)", "HTTP", "POP3(Mail)", "IMAP(Mail)", "HTTPS", "SMB(Microsoft File Sharing)","RDP (Remote Desktop Protocol)"];
    let i=0;
    const classes = useStyles();
    return(
        <>
        {/* <main className={classes.mainn}>
        <table> */}
        {props.results?
       <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.mainn}>
            <TableCell align="center">IP</TableCell>
            <TableCell align="center">Port</TableCell>
            <TableCell align="center">Banner</TableCell>
            {/* <TableCell align="right">Name</TableCell> */}
            <TableCell align="center">Status</TableCell>
          
        
          </TableRow>
        </TableHead>
        <TableBody>
    
        {props.results.map((result) =>(
           
               result.ip?
            
               <TableRow key={result.port}>
                 <TableCell align="center" component="th" scope="row">
                   {result.ip}
                  {/* {{const date= }} */}
                 </TableCell>
                 <TableCell align="center">{result.port}</TableCell>
                 
                 <TableCell align="center">{result.banner}</TableCell>
                 {/* <TableCell align="right">{Array2[i++]}</TableCell> */}
                 <TableCell align="center">{result.status}</TableCell>

                
               </TableRow>
               :
                   
               <></>
    
         )
          ) 
          
          }
        
               </TableBody>
               </Table>
               </TableContainer>
               :
               <>No Ports!</>
}
             
               </>

      
    )
}
export default TablePorts;
