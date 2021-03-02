import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import TextFieldComponent from './TextField';
import Wallpaper from '../Components/Wallpaper';



const styles= {
    main: {
      paddingTop: '100px',
        backgroundColor: '#cfe8fc', minHeight: '85vh',
        position: "relative",
    },
    container:{
      paddingTop: '100px',
    }
}
export default function SimpleContainer() {
    

  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container component="div" maxWidth="lg">
     
        <div  >  

   <Wallpaper/>

        <Typography style={styles.main} component="div"      >
        
<TextFieldComponent />
</Typography>
 {/* <Footer/> */}
      
      </div>
     
      
      </Container>
    </React.Fragment>
  );
}