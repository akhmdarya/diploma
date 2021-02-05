import React,{useState, useEffect} from 'react'
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { checkURL } from './utils';
// import { checker} from "../Components/Scanner";

// const puppeteer = require('puppeteer');



     const styles = {
        ul: {
            margin:10,
            width: '25ch',
            backgroundColor: "white",
          zIndex:10,
        },
        butt:{
            margin:10
        }
    }
  
    const TextField = () => {
      const [fields, setFields] = useState({
        
        url: '',
    
    });
    const[message,setMessage]= useState('');
    const [error, setError] = useState("");

    const onSubmit = () => {
      console.log('Form submitted', fields);
  
   
   
  }
  const clearMessages = () =>{
    setMessage('');
   
    setError('');

}

  useEffect(() => {
    clearMessages();
    checkURL(fields.url)

    .then(res=> setMessage(res))
    .catch(element=> setError(element))
  
}, [fields])
  const fieldChange = (fieldName, value) => {
    setFields(oldState => ({
        ...oldState,
        [fieldName]: value
    }));
}
       
      
   
   
    

      return(
        <>
    {/* // <form noValidate autoComplete="off" > */}
        <div className="input">
      <input  value={fields.url} name="url"  onChange={e => fieldChange('url', e.target.value)}  id="outlined-basic"  />
     </div>

      <Button type='submit'
        variant="contained"
        color="primary"
       style={styles.butt}
       onClick={onSubmit}
        endIcon={<SaveIcon />}
      >
        Check Web-Site!
        
      </Button>
      <div>
      {error && <>{error}</>}
      {message && <>{message}</>}
      </div>
</>

    /* </form> */
      )   
      
}
export default TextField;

