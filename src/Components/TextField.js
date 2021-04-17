import React,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { checkURL } from './utils';
import { Link, useHistory } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';

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
        },
        textField:{
          paddingTop:'50px'
        },
        form__field: {
          
          borderColor: "cornflowerblue",
          borderRadius: "5px",
          borderBottom: "2px solid $gray",
          outline: "0",
          fontSize: "1.3rem",
         color:"$white",
          padding: "7px 7px",
          background: "white",
          transition: "border-color 0.2s"
     
        
        },
        link:{
          color: 'white',
          fontWeight:"500",
        },
        
        form__label :{
          fontWeight: "700"
    },
    // error:{
    //   color:'rgb(220, 0, 78)',
    // },
    message:{
      color:"#9c27b0",
      fontSize:'14px',
      fontWeight:'600'
    }
    
  
    
  }
  
    const TextFieldComponent = () => {
      const history= useHistory();
      const [fields, setFields] = useState({
        
        url: '',
    
    });
    const[message,setMessage]= useState('');
    const [error, setError] = useState("");
    const [url1, seturl1] = useState();
    const onSubmit = () => {
      seturl1(fields.url.replace(/(^\w+:|^)\/\//, ''));
      console.log('Form submitted', fields);
  }
  const clearMessages = () =>{
    setMessage('');
   
    setError('');
}
  useEffect(() => {
    clearMessages();
    seturl1(fields.url.replace(/(^\w+:|^)\/\//, ''));


    if(checkURL(fields.url)==='Valid URL'){
      setMessage('Valid URL')
    }

    if(checkURL(fields.url)==='incorrect URL!'){
       setError("Incorrect URL");
       history.push('/');
    }
   
  
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
  
        <div className="input"    style={styles.textField}>
       
      <input  value={fields.url} name="url" placeholder="Inter your URL" onChange={e => fieldChange('url', e.target.value)}  id="outlined-basic"  style={styles.form__field}/>
      {/* <label for="url"  style={styles.form__label}>Inter your URL</label> */}
        
      

     </div>

    

     
     <Button type='submit'
        variant="contained"
        color="primary"
       style={styles.butt}
       onClick={onSubmit}
        endIcon={<SendIcon />}
      >
        {fields.url && (checkURL(fields.url)==='Valid URL')?
         <Link  style={styles.link} to= {`/result/${url1}`}> 
        Check Web-Site!
        
     </Link>  
        :
        <div style={styles.link}>  Check Web-Site!</div>
        }
       
     
     </Button>
      <div>
      {error && <div style={styles.error}>{error}</div>}
      {message && <div style={styles.message}>{message}</div>}
      </div>
     
      
 
</>


    /* </form> */
      )   
      
}
export default TextFieldComponent;

