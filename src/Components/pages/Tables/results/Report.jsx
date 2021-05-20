import React, {  } from 'react';
import { Link } from 'react-router-dom';
import correct from "../../../../assets/images/correct.png";
import wrong from "../../../../assets/images/wrong.png";
import load from "../../../../assets/images/loader.gif";
import question from "../../../../assets/images/question2.png";
import 'semantic-ui-css/semantic.min.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableDomain from '../TableDomain';
import TablePorts from '../TablePorts';
import TableCookies from '../TableCookies';
import TableStorages from '../TableStorages';
import { Button, Typography,Paper } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles((theme) => ({
    app: {
      backgroundColor: "rgb(24, 164, 245)",
      flexWrap: "wrap"
    },
    
      container: {
        display: 'block',
      },
      paper: {
        margin: theme.spacing(1),
      },
      svg: {
        width: 100,
        height: 100,
      },
      polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
      
    },
    active : {
        display: 'flex',
        backgroundColor:'red',
      },
      img:{
        maxHeight:'35px',
        maxWidth:'35px',
        paddingRight:'5px'
        // minHeight:'70px',
        // minWidth:'70px',

      },
      align:{
        alignItems:'center',
        display:'flex',
        justifyContent:'center'
      },
      hidden:{
        display:'none'
      },
      loader:{
        maxHeight:'100px',
        maxWidth:'120px',
      },
      bottomSpace:{
        marginBottom:'20px'
      }
}));


const Report = (props) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked((prev) => !prev);
  
  };
  const [checkedPorts, setCheckedPorts] = React.useState(false);

  const handleChangePorts = (event) => {
    setCheckedPorts((prev) => !prev);
  
  };
  const [checkedDomain, setCheckedDomain] = React.useState(false);

  const handleChangeDomain = (event) => {
    setCheckedDomain((prev) => !prev);
  
  };


  const [checkedCookies, setCheckedCookies] = React.useState(false);

  const handleChangeCookies = (event) => {
    setCheckedCookies((prev) => !prev);
  
  };

  const [checkedStorages, setCheckedStorages] = React.useState(false);

  const handleChangeStorages = (event) => {
    setCheckedStorages((prev) => !prev);
  
  };
  const [flagPorts, setflagPorts] = React.useState(false); //false if only 443 80  //true - others

let flagPort=0;
let flagPortHTTPS=0;
let flagLoadPort=-1;
let flagStorages=0;
let flagLoadStorages=-1;
 console.log(props.resultsParser.Banner+'**************')
let flagCookies=0;
let flagLoadCookies=-1;
let bannerCookies=0;
let flagDomain=0;
let flagLoadDomain=-1;


    return (
      <>

      {

     (props.resultsParser.Banner==='True'?
     
(bannerCookies=1)
     :
     props.resultsParser.Banner==='False'?
     (bannerCookies=-1)
     :
     (bannerCookies=bannerCookies)),


props.results.map((result) =>(
  (result.ip?
  (((result.port!==80) && (result.status==='open')) && ((result.port!==443) && (result.status==='open')))?
<div className={classes.hidden}>
  {
 flagPort+=1,
 flagLoadPort=1

 }</div>
  :
  <div className={classes.hidden}>
  {
  flagPort=flagPort,
  flagLoadPort=1
}
</div>

  
 :
<></>),

(
  result.type?
  (<div className={classes.hidden}>
  { flagLoadStorages=1,
    flagStorages+=1
  }</div>)
  :
 ( <div className={classes.hidden}>
  {
     flagLoadStorages=1,
     flagStorages=flagStorages
}</div>)
),

(
  result.name?
  (<div className={classes.hidden}>
    { flagLoadCookies=1,
      flagCookies+=1
    }</div>)
    :
   ( <div className={classes.hidden}>
    {
       flagLoadCookies=1,
       flagCookies=flagCookies
  }</div>)
),
(
  result.ping?
  (<div className={classes.hidden}>
    { flagLoadDomain=1,
      flagDomain+=1
    }</div>)
    :
   ( <div className={classes.hidden}>
    {
       flagLoadDomain=1,
       flagDomain=flagDomain
  }</div>)
)

))}
 
 
 {

 flagPort>0?
   
     <>
     <div className={classes.align}>
   <img src = {wrong} className={classes.img} />
<Typography variant="h5" gutterBottom>Site security. Open Ports : {flagPort}
      </Typography>   
  </div>

  <Button className={classes.bottomSpace} onClick={handleChangePorts}>SHOW</Button>
   

   {(checkedPorts?
         <div className={classes.container}>
           <Typography variant="h5" gutterBottom>Ports:</Typography>
            <TablePorts results={props.results}/>
         </div>
         :
         <></>)
   }
  </>
:
   
   flagLoadPort===-1?
  <>
   <div className={classes.align}>
 <img src = {load} className={classes.loader} />
<Typography variant="h5" gutterBottom>Site security. Open Ports.
      </Typography></div>
  </>

  :
  <> 
   <div className={classes.align}>
  <img src = {correct} className={classes.img} />
<Typography variant="h5" gutterBottom>Site security. Open Ports.
      </Typography></div>
      <Typography variant="h6" gutterBottom>You have no open ports.
      </Typography>
      <Button className={classes.bottomSpace}  onClick={handleChangePorts}>SHOW</Button>
   

   {(checkedPorts?
         <div className={classes.container}>
           <Typography variant="h5" gutterBottom>Ports:</Typography>
            <TablePorts results={props.results}/>
         </div>
         :
         <></>)
   }
  </>
   
 }
      





{
(flagCookies>0) && (bannerCookies===-1)? //ЕСЛИ ЕСТЬ КУКИ ??И НЕТ БАННЕРА ДОБАВИТЬ ЕСЛИ НЕТ БАННЕРА
   
<>
<div className={classes.align}>
<img src = {wrong} className={classes.img} />
<Typography variant="h5" gutterBottom>Cookies: {flagCookies}
 </Typography>   
</div>
<Typography variant="h6" gutterBottom>
Your site is collecting cookies, but our scanner has not received information that you have a banner warning about the collection of cookies.
</Typography>
<Button className={classes.bottomSpace}  onClick={handleChangeCookies}>SHOW</Button>


{(checkedCookies?
    <div className={classes.container}>
      {/* <Typography variant="h5" gutterBottom>Storages:</Typography> */}
       <TableCookies results={props.results}/>
    </div>
    :
    <></>)
}
</>       //ЕСЛИ ЕСТЬ КУКИ
:


    flagLoadCookies===-1? //LOADING
    <>
     <div className={classes.align}>
   <img src = {load} className={classes.loader} />
  <Typography variant="h5" gutterBottom>Cookies
        </Typography></div>
       
    </>

                //LOADING
  
    :
    flagCookies>0 && (bannerCookies===1)?

    <>
     <div className={classes.align}>
  <img src = {correct} className={classes.img} />
<Typography variant="h5" gutterBottom>Cookies
      </Typography></div>

      <Button className={classes.bottomSpace} onClick={handleChangeCookies}>SHOW</Button>
   

   {(checkedCookies?
         <div className={classes.container}>
           <Typography variant="h5" gutterBottom>Storages:</Typography>
            <TableCookies results={props.results}/>
         </div>
         :
         <></>)
   }
    </>

    :  //НЕТ КУК
    flagCookies===0 ?

    <>
     <div className={classes.align}>
  <img src = {correct} className={classes.img} />
<Typography variant="h5" gutterBottom>Cookies
      </Typography></div>

      <Button className={classes.bottomSpace} onClick={handleChangeCookies}>SHOW</Button>
   

   {(checkedCookies?
         <div className={classes.container}>
          
            <TableCookies results={props.results}/>
         </div>
         :
         <></>)
   }
    </>
    //НЕТ КУК

      : // ЕСЛИ ЧТО ТО ДРУГОЕ, Н_Р НЕ НАЙДЕНО АНДЕФАНЕД ИЛИ
      <>
      <div className={classes.align}>
    <img src = {question} className={classes.img} />
 <Typography variant="h5" gutterBottom>Cookies {flagCookies}
       </Typography>   
      
   </div>
  <Typography variant="h6" gutterBottom>  Perhaps our service did not find your banner with a notification about the collection of cookies,
         or such a banner is not on your site. However, below you can view the cookies that your site collects.
         </Typography>
   <Button className={classes.bottomSpace} onClick={handleChangeCookies}>SHOW</Button>
    
 
    {(checkedCookies?
          <div className={classes.container}>
            
             <TableCookies results={props.results}/>
          </div>
          :
          <></>)
    }
   </>// ЕСЛИ ЧТО ТО ДРУГОЕ, Н_Р НЕ НАЙДЕНО АНДЕФАНЕД ИЛИ
}


{/* 
<Typography variant="h5" gutterBottom>Personal data is transmitted to 'adequate countries'
      </Typography>
      <Button  onClick={handleChange}>SHOW</Button>

{checked?
      <div className={classes.container}>
        <Typography variant="h5" gutterBottom>Domains:</Typography>
         <TableDomain results={props.results}/>
      </div>
      :
      <></>
}
*/}


{

flagStorages>0?
   
     <>
     <div className={classes.align}>
   <img src = {question} className={classes.img} />
<Typography variant="h5" gutterBottom>Data in Local and Session Storages: {flagStorages}
      </Typography>   
  </div>

  <Button className={classes.bottomSpace} onClick={handleChangeStorages}>SHOW</Button>
   

   {(checkedStorages?
         <div className={classes.container}>
           <Typography variant="h5" gutterBottom>Storages:</Typography>
            <TableStorages results={props.results}/>
         </div>
         :
         <></>)
   }
  </>
:
   
   flagLoadStorages===-1?
  <>
   <div className={classes.align}>
 <img src = {load} className={classes.loader} />
<Typography variant="h5" gutterBottom>Data in Local and Session Storages
      </Typography></div>
  </>

  :
  <> 
   <div className={classes.align}>
  <img src = {correct} className={classes.img} />
<Typography variant="h5" gutterBottom>Data in Local and Session Storages
      </Typography></div>

      <Button className={classes.bottomSpace} onClick={handleChangeStorages}>SHOW</Button>
   

   {(checkedStorages?
         <div className={classes.container}>
           <Typography variant="h5" gutterBottom>Storages:</Typography>
            <TableStorages results={props.results}/>
         </div>
         :
         <></>)
   }
  </>

}
{

flagDomain>0?
   
     <>
     <div className={classes.align}>
   <img src = {question} className={classes.img} />
<Typography variant="h5" gutterBottom>Domains: {flagDomain }
      </Typography>   
  </div>

  <Button className={classes.bottomSpace} onClick={handleChangeDomain}>SHOW</Button>
   

   {(checkedDomain?
         <div className={classes.container}>
           {/* <Typography variant="h5" gutterBottom>Domains:</Typography> */}
            <TableDomain results={props.results}/>
         </div>
         :
         <></>)
   }
  </>
:
   
   flagLoadDomain===-1?
  <>
   <div className={classes.align}>
 <img src = {load} className={classes.loader} />
<Typography variant="h5" gutterBottom>Domains:
      </Typography></div>
  </>

  :
  <> 
   <div className={classes.align}>
  <img src = {correct} className={classes.img} />
<Typography variant="h5" gutterBottom>Domains
      </Typography></div>

      <Button className={classes.bottomSpace}s onClick={handleChangeDomain}>SHOW</Button>
   

   {(checkedDomain?
         <div className={classes.container}>
           {/* <Typography variant="h5" gutterBottom>Domains:</Typography> */}
            <TableDomain results={props.results}/>
         </div>
         :
         <></>)
   }
  </>

}

      </>
      )
      }
      export default Report;