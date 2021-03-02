

 import React, { useEffect, useState } from 'react';
 import { Dimmer, Loader} from 'semantic-ui-react'
 import 'semantic-ui-css/semantic.min.css'
 import {checkURL} from '../utils'
 import Wallpaper from '../Wallpaper'
import { makeStyles, Typography} from '@material-ui/core';
 import TableCookies from '../pages/Tables/TableCookies';
 import TableDomain from '../pages/Tables/TableDomain';
 import TableStorages from '../pages/Tables/TableStorages';
 import { useParams } from 'react-router-dom';
 import {getCheckResult} from '../../shared/api'


 
 const useStyles = makeStyles((theme) => ({
     app : {
       backgroundColor:"rgb(24, 164, 245)",
       flexWrap: "wrap"
     },
     container: {
      marginTop: '20px',
       flexWrap: "wrap",
       marginBottom:'20px'
     },
     loader: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    table:{
      marginTop:theme.spacing(4),
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
   mainFeaturesPost:{
 
    padding: theme.spacing(10),
    height: "200px"
   },
   cardGrid:{
     marginTop:theme.spacing(4),
     paddingBottom:"56.25%",
   },
   text:{
     color:"white"
   }
   
   
   }))

   
 const ResultPage  = ()=>{
 
  const {url} = useParams();
  console.log(url+"!!!!!!!!!!!!!!!!")
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
      
        <Wallpaper/>
 {

 
    results?  
   

      <>
       <div className={classes.container}>
       <Typography variant="h5" gutterBottom>Cookies:</Typography>
      <TableCookies results={results}/>
      <Typography variant="h5" gutterBottom>Domains:</Typography>
      <TableDomain results={results}/>
      <Typography variant="h5" gutterBottom>Storages:</Typography>
      <TableStorages results={results}/>
      </div>
              </>
  
      
         /* ЕСЛИ НЕТ РЕЗУЛЬТАТОВ ЛОАДИНГ */
         : 
         <></>
         }
        

   
             <Dimmer active={loading} inverted>
           <Loader>Loading</Loader>
         </Dimmer>
         
       </main>
       </>
 
     )
 
 }
 export default ResultPage;