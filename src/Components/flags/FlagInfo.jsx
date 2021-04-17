import { createStyles, TableContainer,TableHead,TableRow,TableCell, Paper, Table, TableBody } from '@material-ui/core';
import React, { useState } from 'react';



import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() =>
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
        },
        tableContainer:{
            maxWidth:'700px'
        },
        tableMain:{
            display:'flex',
            justifyContent:'center',
            paddingTop:'50px'
        },
        flag:{
            backgroundColor:'yellow'
        }
    }))

const FlagInfo =(flagName)=>{
    // const {flagName} = useParams();
    const flag =flagName.match.params.flagName;

    
    const [,setValue]=useState("Recents")
   const results= [
        {name:'g_fonts', description:'The privacy policy of Google Fonts is not very clear.'},
        {name:'google_no_anonymip',description:'No anonymization of IP addresses that are sent to Google Analytics is requested.'},
        {name:'Google_DoubleClick_Ads', description:'Ads are most likely not required for the functionality of the site and thus sharing IP address and user agent with Google for this purpose requires consent.'},
        {name:'li_ads', description:'Ads are most likely not required for the functionality of the site and thus sharing IP address and user agent with Microsoft for this purpose requires consent.'},
        {name:'Facebook_Connect', description:'Before people click the facebook connect/login button, their IP address and user agent is already shared with Facebook.'},
        {name:'Chartbeat_Analytics', description:'This analytics service requires visitors consent according to it s General Terms and Privacy Policy.'},
        {name:'nr_in_us', description:'New Relic has seperate domains for Browser Application Monitoring monitoring in the European Union.'},

        {name:'CookieControl', description:'This cookie is used to remember a user’s choice about cookies on ico.org.uk. Where users have previously indicated a preference, that user’s preference will be stored in this cookie.'},
        {name:'language', description:'This cookie is used to remember any selection a user has made about language on ico.org.uk, using the language selector, so that the site will be shown in their chosen language when returning to the site. '},
        {name:'_ga,_gali, _gat,_gid', description:'These cookies are used to collect information about how visitors use our website. We use the information to compile reports and to help us improve the website. The cookies collect information in a way that does not directly identify anyone, including the number of visitors to the website and blog, where visitors have come to the website from and the pages they visited.'},
        {name:'__zjc*', description:'This cookie is set by a third-party web application firewall from Dyn to help maintain the security and performance of our website. Some traffic may receive a challenge to check if it is genuine and if it is, a cookie is set so the user isn’t challenged again.'},
        {name:'ASP.NET_SessionId', description:'This cookie is essential for the breach notification form – the form that public electronic communications service providers use to notify the ICO of a security breach – to operate. It is set only for those people using the form. This cookie is deleted when you close your browser.'},
        {name:'VISITOR_INFO1_LIVE*', description:'VISITOR_INFO1_LIVE - *expires after eight months'},
        {name:'_ym_isad',description:'Это сторонние файлы cookie, размещенные Яндексом, которые позволяют нам использовать службу Yandex Metrics.Эти файлы cookie позволяют анонимно отслеживать, как посетители получают доступ и просматривают наш веб-сайт, что позволяет нам оптимизировать и улучшать наш сервис.'}
       
    ];

    

   const classes = useStyles();
    return (
      
        <div className={classes.tableMain}>
         {/* <main className={classes.mainn}>
        <table> */}
     
       <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.mainn}>
 
            <TableCell align="right">name</TableCell>
            <TableCell align="right">description</TableCell>
        
          
        
          </TableRow>
        </TableHead>
        <TableBody>
    
        {results.map((result) =>(
           
        
      
         result.name ===flag? (
             
    
    
      
               <><TableRow key={result.name}>
            
                <TableCell className={classes.flag} align="right">{flag}</TableCell>

                <TableCell  className={classes.flag} align="right">{result.description}</TableCell>
                


            </TableRow>


                </>)
                :
                (  <><TableRow key={result.name}>
            
                    <TableCell align="right">{result.name}</TableCell>
    
                    <TableCell align="right">{result.description}</TableCell>
                    
    
    
                </TableRow>
    
    
                    </>)
    
         )
          ) 
          
          }
        
               </TableBody>
               </Table>
               </TableContainer>
             

             
        </div>
    );
};
export default FlagInfo