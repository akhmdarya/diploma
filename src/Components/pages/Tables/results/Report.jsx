// import React, {  } from 'react';
// import { Link } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css'
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

// import { Button, Typography,Paper } from '@material-ui/core';
// import Switch from '@material-ui/core/Switch';

// import Fade from '@material-ui/core/Fade';
// const useStyles = makeStyles((theme) => ({
//     app: {
//       backgroundColor: "rgb(24, 164, 245)",
//       flexWrap: "wrap"
//     },
    
//       container: {
//         display: 'flex',
//       },
//       paper: {
//         margin: theme.spacing(1),
//       },
//       svg: {
//         width: 100,
//         height: 100,
//       },
//       polygon: {
//         fill: theme.palette.common.white,
//         stroke: theme.palette.divider,
//         strokeWidth: 1,
      
//     },
//     active : {
//         display: 'flex',
//         backgroundColor:'red',
//       }
// }));


// const Report = (props) => {
//     const classes = useStyles();
//     const [checked, setChecked] = React.useState(false);

//   const handleChange = (event) => {
//     setChecked((prev) => !prev);
  
//   };


//     return (
//       <>
//         <Typography variant="h5" gutterBottom>Personal data is transmitted to 'adequate countries'
//       </Typography>
//       <Button  onClick={handleChange}>SHOW</Button>

// {checked?
//       <div className={classes.container}>
//       <div className={classes.active}>
//         <Fade in={checked}>
//           <Paper elevation={4} className={classes.paper}>
//             <svg className={classes.svg}>
//               <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
//             </svg>
//           </Paper>
//         </Fade>
//         </div>
//       </div>
//       :
//       <></>
// }


//       </>
//       )
//       }
//       export default Report;