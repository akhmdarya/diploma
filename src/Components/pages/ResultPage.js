

 import React, { useEffect, useState } from 'react';
 import { Dimmer, Loader} from 'semantic-ui-react'
 import 'semantic-ui-css/semantic.min.css'
 import {checkURL} from '../utils'
 import Wallpaper from '../Wallpaper'
import { makeStyles, Typography} from '@material-ui/core';
 import TableCookies from '../pages/Tables/TableCookies';
 import TableDomain from '../pages/Tables/TableDomain';
 import TablePorts from '../pages/Tables/TablePorts';
 import TableStorages from '../pages/Tables/TableStorages';
 import Report from '../pages/Tables/results/Report';
 import { useParams , useHistory} from 'react-router-dom';
 import {getCheckResult} from '../../shared/api'
 import {getHTMLCheck} from '../../shared/api'
import Footer from '../footer/Footer';
import ParseResults from './Tables/results/ParseResults';


 
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
  const history= useHistory();
 
  const {url} = useParams();
  // console.log(url+"!!!!!!!!!!!!!!!!")
  const [loading,setLoading]=useState(true)
  
  const [results, setResults] = useState([]);
  const [resultsParser, setResultsParser] = useState([]);
let flagError=0;

  useEffect(() => {

    const fetchData = async () => {
      const url1 = url.replace(/^https?:\/\//,'');

      if(checkURL(url1)!='Valid URL'){
        history.push('/');
        alert("Not Valid URL");
       
      }

      else if(checkURL(url1)==='Valid URL'){

        // const res=  getCheckResult(url);
        setLoading(true);
        

        await Promise.all([
         
     
          getHTMLCheck(url1).catch(error => { 
           return error,
            alert("Couldn't resolve" + url1 +' ' +error),
            flagError=1,
                  // history.push('/'),
                  console.log(error);
                 
                  // setLoading(false);
           
           }),
           getCheckResult(url1).catch(error => { 
           return error,
            alert("Couldn't resolve" + url1+' '+error ),
            history.push('/'),
           
            setLoading(false);
       
          }),
       
         ]).then(responses => {
         
         
          if (responses[1].data=='' && flagError===1){
            history.push('/')
          }
          else if (responses[1].data!='' && flagError===0 ){
          setResults(responses[1].data);
          setLoading(false);
               if( typeof(responses[0].data)==='string'){
               setResultsParser(JSON.parse(responses[0].data.replace(/'/g,"\"").replace(/"s/g,"'")))
            }
              else{
          
              setResultsParser(responses[0].data);
                }
          }
          else if (responses[1].data!='' && flagError===1 ){
            setResults(responses[1].data);
            setLoading(false);
      
            }

         
        })
        //  console.log(responses[0].data+"000000000000")
        //  console.log(responses[1].data+"111111111111111")
        //  typeof(responses[0].data)==='string'?
        //    setResultsParser(JSON.parse(responses[0].data.replace(/'/g,"\"").replace(/"s/g,"'")))
        //    :
        //    setResultsParser(responses[0].data);

        //    if(responses[1].data==''){
        //         alert("Couldn't resolve" + url1);
        //         history.push('/');
        //       }
        //       else{
        //    setResults(responses[1].data);
        //    setLoading(false);
        //       }

         
        //  setResultsParser(responses.data[0]);
        //  setResults(responses.data[1]);

        // await getHTMLCheck(url1)
        // .then((resp ) => {
        //     typeof(resp.data)==='string'?
        //    setResultsParser(JSON.parse(resp.data.replace(/'/g,"\"").replace(/"s/g,"'")))
        //    :
        //    setResultsParser(resp.data)

        //     // // console.log(resp.data+"&&&&&&&&&&&&&&");
        //     // setLoading(false);
         
        // })
        // .catch((error) => {
        //       console.log(error.data+"Error");
              
        //       setLoading(false);
        //     });
        //     await  getCheckResult(url1)
        
        //     .then((resp ) => {
        //       // console.log(resp.data+"&&&&&&&&&&&&&&")
        //       if(resp.data==''){
        //         alert("Couldn't resolve" + url1);
        //         history.push('/');
        //       }
        //       setResults(resp.data);
        //       setLoading(false);
        //     })
        //     .catch((error) => {
        //       console.log(error.data+"Error");
              
        //       setLoading(false);
        //     });
  
        
    }
    else{
      history.push('/')
    }
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
      
       <Typography variant="h5" gutterBottom>REPORT</Typography>
       <ParseResults resultsParser={resultsParser}></ParseResults>
       <Report results={results}  resultsParser={resultsParser}/>
       {/* <Typography variant="h5" gutterBottom>Ports:</Typography>
      <TablePorts results={results}/> */}
       {/* <Typography variant="h5" gutterBottom>Cookies:</Typography> */}
      {/* <TableCookies results={results} resultsParser={resultsParser}/> */}
      {/* <Typography variant="h5" gutterBottom>Domains:</Typography>
      <TableDomain results={results}/> */}
     
      {/* <Typography variant="h5" gutterBottom>Storages:</Typography>
      <TableStorages results={results}/> */}
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





