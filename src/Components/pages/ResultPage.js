

 import React, { useEffect, useState } from 'react';
 import CircularProgress from '@material-ui/core/CircularProgress';
 import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
 import 'semantic-ui-css/semantic.min.css'
 import {checkURL} from '../utils'

//  import { getCheckResult } from '../../shared/api';
//  import { Article } from '../shared/types';
//  import { getArticle } from '../../shared/api';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography} from '@material-ui/core';

 import LayerIcon from '@material-ui/icons/Layers';
 import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
 import { useParams } from 'react-router-dom';
 import {getCheckResult} from '../../shared/api'
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
       flexWrap: "wrap"
     },
     loader: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    table:{
     
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
   cardGrid:{
     marginTop:theme.spacing(4),
     paddingBottom:"56.25%",
   }
   
   
   }))
  //  function createData(domain, ping, hostname, eu, country,organization) {
  //   return { domain, ping, hostname, eu, country,organization};
  // }
  
  // const rows = [
  //   createData(),
    
  // ];
   
 const ResultPage  = ()=>{
 
  const {url} = useParams();
  const [loading,setLoading]=useState(true)
  
  const [results, setResults] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const url1 = url.replace(/^https?:\/\//,'');
      checkURL(url1);
    //  const res=  getCheckResult(url);
      setLoading(true);
      await  getCheckResult(url1)
      
        .then((resp ) => {
          console.log(resp)
          setResults(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
        
    }
    fetchData();
     
     
     
    }, [url]);


     
     const classes = useStyles();
 
 
     return(
         <>
         <main>
        
         <div >
           <Container maxWidth="sm">
             <Typography variant="h2" align="center" color="textPrimary" gutterBottom>News</Typography>
             <Typography variant="h5" align="center" color="textSecondary" gutterBottom>Текст, что тут будут самые свежие новости</Typography>
           <div >
             <Grid container spacing={5} justify="center">
               <Grid item>
                 <Button variant="contained" color="primary"> Start Now</Button>
                 </Grid>
                 <Grid item>
                 <Button variant="outlined" color="primary"> Learn More</Button>
                 </Grid>
               </Grid>
             </div>
           </Container>
         </div>
 
  
 
   {  results?  

      <>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Domain</TableCell>
            <TableCell align="right">Ping</TableCell>
            <TableCell align="right">Hostname&nbsp;(g)</TableCell>
            <TableCell align="right">EU&nbsp;(g)</TableCell>
            <TableCell align="right">Country&nbsp;(g)</TableCell>
            <TableCell align="right">Organization&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {results.map((result) =>(
               result.name?
               <TableRow key={result.ping}>
                 <TableCell component="th" scope="row">
                   {result.domain}
                 </TableCell>
                 <TableCell align="right">{result.name}</TableCell>
                 <TableCell align="right">{result.domain}</TableCell>
                 <TableCell align="right">{result.Secure}</TableCell>
                 <TableCell align="right">{result.HttpOnly}</TableCell>
                 <TableCell align="right">{result.path}</TableCell>
               </TableRow>
               :
               
          result.domain?
            <TableRow key={result.ping}>
              <TableCell component="th" scope="row">
                {result.domain}
              </TableCell>
              <TableCell align="right">{result.ping}</TableCell>
              <TableCell align="right">{result.hostname}</TableCell>
              <TableCell align="right">{result.eu}</TableCell>
              <TableCell align="right">{result.country}</TableCell>
              <TableCell align="right">{result.organization}</TableCell>
            </TableRow>
            :
            <></>
       
      
          ))} 
        </TableBody>
      </Table>
    </TableContainer>


         {/* <Container className={classes.cardGrid} maxWidth="md">
           <Grid container spacing={4}>
             {results.map((result) =>(
               <Grid item   xs={12} sm={6} md={4}>
               
                 <Card>
                   <CardMedia className={classes.cardMedia}
                
                   title = {result.domain}
                   
                   />
                   <CardContent className={classes.cardContent}>
                  
                       <Typography variant="h5" gutterBottom>{result.domain}</Typography>
                       <Typography gutterBottom variant="h6">{result.hostname}</Typography>
                       <Typography gutterBottom variant="h6">{result.organization}</Typography>
                       <Typography align="right">Дата публикации: {result.country}</Typography>
                     </CardContent>
                   <CardActions>
                     <Button size="small" color="primary">
                       View
                       </Button>
                       <Button size="small" color="primary">
                      Edit
                       </Button>
                       <LayerIcon/>
                       <PlayCircleFilledIcon/>
                     </CardActions>
                 </Card>
                 </Grid>
            ))} 
 
             </Grid>
 
         </Container> */}
         
         </>
         :
         <> 
          <Container className={classes.cardGrid} maxWidth="md">
           <Grid container spacing={4}>
           <Segment>
         
   
         <Image src='/images/wireframe/short-paragraph.png' />
       </Segment>
       </Grid>
       </Container>
       </>
             }
             <Dimmer active={loading} inverted>
           <Loader>Loading</Loader>
         </Dimmer>
       </main>
       </>
 
 
 
     )
 
 }
 export default ResultPage;