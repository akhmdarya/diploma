import React,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { checkURL } from './utils';
import { Link, useParams } from 'react-router-dom';
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
          
          // width: "100%",
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
          // position: absolute;
       
        //   display: block;
        //   transition: 0.2s;
        //   font-size: 1rem;
        //   color: $gray;
        // }
        
        // .form__field:focus {
        //   ~ .form__label {
        //     position: absolute;
        //     top: 0;
        //     display: block;
        //     transition: 0.2s;
        //     font-size: 1rem;
        //     color: $primary;
        //     font-weight:700;    
        //   }
        //   padding-bottom: 6px;  
        //   font-weight: 700;
        //   border-width: 3px;
        //   border-image: linear-gradient(to right, $primary,$secondary);
        //   border-image-slice: 1;
        // }
        // /* reset input */
        // .form__field{
        //   &:required,&:invalid { box-shadow:none; }
        // }
    }
  }
  
    const TextFieldComponent = () => {
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
      ><Link  style={styles.link} to= {`/result/${url1}`}> 
        Check Web-Site!
        
     </Link>  </Button>
      <div>
      {error && <>{error}</>}
      {message && <>{message}</>}
      </div>
     
      
 
</>


    /* </form> */
      )   
      
}
export default TextFieldComponent;

