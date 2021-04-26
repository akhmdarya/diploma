import React, {  } from 'react';
import 'semantic-ui-css/semantic.min.css'
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
      // justifyItems:"center",
      // alignItems:"center",
      // marginBottom:"30px",
      // maxWidth:'700px'
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
  },
  tableMain:{
      display:'flex',
      justifyContent:'center',
      paddingTop:'50px'
  },
  
  
  }))
const TableStorages  = (props)=>{
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
            <TableCell align="center" component="th">Name of Storage</TableCell>
            <TableCell align="center">Entry</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
    
        {props.results.map((result) =>(
               result.type?
               <TableRow key={result.key}>
               <TableCell align="center" component="th" scope="row">
                 {result.type}
               </TableCell>
               <TableCell align="center">{result.key}</TableCell>
              
             </TableRow>
               :
               <></>
        ))}
               </TableBody>
               </Table>
               </TableContainer>
          
            
            : <>No Storages!</>}
               </>

      
    )
}
export default TableStorages;
