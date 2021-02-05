

 import React, { useEffect, useState } from 'react';
 import CircularProgress from '@material-ui/core/CircularProgress';
 import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
 import 'semantic-ui-css/semantic.min.css'

//  import { getCheckResult } from '../../shared/api';
//  import { Article } from '../shared/types';
//  import { getArticle } from '../../shared/api';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Paper, Typography} from '@material-ui/core';

 import LayerIcon from '@material-ui/icons/Layers';
 import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
 import { useParams } from 'react-router-dom';
 import {getCheckResult} from '../../shared/api'
//  import { useDispatch, useSelector } from 'react-redux';
//  import { fetchArticles } from '../shared/redux/articles/articles.actions';
//  import { selectArticles } from '../shared/redux/articles/articles.selectors';
 
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

   
 const ResultPage  = ()=>{
 
  const {url} = useParams();
  const [loading,setLoading]=useState(true)
  
  const [results, setResults] = useState([]);


  useEffect(() => {
   
      setLoading(true);
      getCheckResult(url)
      
        .then((resp ) => {
          console.log(resp)
          setResults(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
        
      
     
     
     
    }, [url]);


     // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //   .then(response => response.json())
  //   .then(todos => 
  //     {
  //       setTimeout(()=>{
  //         setTodos(todos)
  //         setLoading(false)
  //       },2000)
  //       // setTodos(todos)
  //     })
  // },[]
  

     
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
         <Container className={classes.cardGrid} maxWidth="md">
           <Grid container spacing={4}>
             {results.map((result) =>(
               <Grid item   xs={12} sm={6} md={4}>
               
                 <Card>
                   <CardMedia className={classes.cardMedia}
                  //  image={`https://dev-darmedia-uploads.s3.eu-west-1.amazonaws.com/${article.image}`}
                   title = {result.domain}
                   
                   />
                   <CardContent className={classes.cardContent}>
                   {/* <Link to= {`/article/${article.id}`}> */}
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
 
         </Container></>
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