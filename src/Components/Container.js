import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import TextField from './TextField'

const styles= {
    main: {
        backgroundColor: '#cfe8fc', height: '100vh',
        position: "relative",
    }
}
export default function SimpleContainer() {
    

  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container  component="div" maxWidth="lg">
  
        <div>  


        <Typography style={styles.main} component="div"      >
        
<TextField />
</Typography>

      
      </div>
      
      </Container>
    </React.Fragment>
  );
}