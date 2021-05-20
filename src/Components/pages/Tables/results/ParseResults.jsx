import React, {  } from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { makeStyles, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: "rgb(24, 164, 245)",
    flexWrap: "wrap"
  },
  container: {
    flexWrap: "wrap",
    margin: '20px'
  },
  loader: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  table: {
    marginTop: theme.spacing(4),
    //  maxWidth: "1440px",
    minWidth: 650,
  }
  ,
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyItems: "center", justifyContent: "center",


  }, main: {
    backgroundColor: '#cfe8fc', height: '100vh',
    position: "relative",
    paddingTop: "150px",
  }, tableContainer: {
    justifyItems: "center",
    alignItems: "center",
    marginBottom: "30px"
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(3),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // marginTop:theme.spacing(1),

  }, mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(10)
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  cardMedia: {
    paddingTop: "56.25%",
    paddingBottom: "56.25%",

  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4),
    paddingBottom: "56.25%",
  },
  mainn: {
    justifyItems: "center",
    alignItems: "center"
  }


}))
const ParseResults = (props) => {
  const classes = useStyles();

 
    // obj = JSON.parse( txt);
    // console.log(obj.name+"#########################");
   
//{'Banner': 'False', 'Privacy_link': 'https://dl.iitu.edu.kz/admin/tool/dataprivacy/summary.php', 'Article_6 ( Lawfulness of processing)': 'False', 'Contact': 'False', 'Period': 'False', 'Third_parties': 'False', 'Result': 'null', 'Article_6': 'False'}
  return (
    <>

{


        
        props.resultsParser ?
        (
          
        
          <>

<TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.mainn}>
            <TableCell align="center">Privacy and Policy link</TableCell>
            <TableCell align="center"> Banner about collecting cookies</TableCell>
            <TableCell align="center">Contacts</TableCell>
            <TableCell align="center">Cookie storage period</TableCell>
            <TableCell align="center">Notification about transfer to third parties</TableCell>
            <TableCell align="center">Lawfulness of processing</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>

        <TableRow key={ props.resultsParser.Privacy_link}>
                
                 <TableCell align="center">{ props.resultsParser.Privacy_link}</TableCell>
                 <TableCell align="center">{String(props.resultsParser.Banner)}</TableCell>
                 <TableCell align="center">{String(props.resultsParser.Contact)}</TableCell>
                 <TableCell align="center">{String( props.resultsParser.Period)}</TableCell>
                 <TableCell align="center">{String( props.resultsParser.Third_parties)}</TableCell>
                 <TableCell align="center">{String( props.resultsParser.Article_6)}</TableCell>
               
               </TableRow>
              
        
               </TableBody>
               </Table>
               </TableContainer>
              
            {/* <Typography component='p' variant='h5'>Privacy and Policy link: { props.resultsParser.Privacy_link  }</Typography>
            <Typography component='p' variant='h5'> Banner about collecting cookies: { String(props.resultsParser.Banner) }</Typography>
            <Typography component='p' variant='h5'> Contacts: { String(props.resultsParser.Contact) }</Typography>
            <Typography component='p' variant='h5'>Cookie storage period : { String( props.resultsParser.Period) }</Typography>
            <Typography component='p' variant='h5'>Notification about transfer to third parties: {String( props.resultsParser.Third_parties) }</Typography>
            
           
            <Typography component='p' variant='h5'>Lawfulness of processing: {String( props.resultsParser.Article_6) }</Typography> */}
            </>
            
            
            )
          
            :
            (
             <Typography>ERRROOOOOOORRRR</Typography>)
        
         
            }
</>


)
}
export default ParseResults;