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