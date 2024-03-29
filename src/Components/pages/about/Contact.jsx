
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Contact.module.scss';
import { Button, Typography,Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import{ init, sendForm  } from 'emailjs-com';
import Wallpaper from '../../Wallpaper';
const styless = {
  main: {
    paddingTop: '50px',
    // backgroundColor: '#cfe8fc',
    minHeight: '85vh',
    position: "relative",
    fontWeight: '600',
    // color: ' rgb(63, 81, 181)',
    textAlign: 'center',

    // color:'white',
    
    // backgroundColor: 'cornflowerblue',

  },
  container: {
    paddingTop: '50px',
  },
  text: {
    color:'white',
    textIndent: '1.5em',
    fontSize: '18px',
    fontWeight: '400',
    paddingTop: '10px',
  },
  subtitle: {
    // backgroundColor: 'cornflowerblue',
    textAlign: 'center',
    // color:'white',
    fontSize: '20px',
    fontWeight: '600',
    padding: '10px 50px 30px 50px',
    
  },
  text_padding:{
    color:'white',
    fontSize: '18px',
    fontWeight: '400',
    paddingTop: '10px',
    paddingBottom:'40px'
  },
  mainContainer:{
    paddingTop: '100px',
    backgroundColor: '#cfe8fc', minHeight: '85vh',
    position: "relative",
    
    // backgroundColor: 'cornflowerblue',
  }
}


init("user_nsMO4FPObBfq04EwgaiVC");


const Contact = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };




    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
      // console.log(data);
      
      sendForm('default_service', 'template_1', '#contact-form') 
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message was sended!');
        }, function(error) {
          console.log('FAILED...', error);
          alert('Failed');
        });
    }
    return (
<>
      <Wallpaper></Wallpaper>
      <Container component="div" maxWidth="lg">
  
        <div  style={styless.mainContainer}  >

{/* <div className={styles.containerForm}> */}


          <Typography style={styless.main} component="h1" variant='h4' align='center' >Contact us
<Typography style={styless.subtitle} align='center' component="p">If you need help using our service GDPR Checker, please contact us by E-Mail gdpr.kz@gmail.com or comlete the Forms</Typography>
      <div className='contact'>
        
        <form id='contact-form' className={styles.controls} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.textInput}>
      <h4 className={styles.col25}>Your Name:</h4>
  <input  className={styles.input}  type='text' name='user_name' placeholder='Name' {...register("user_name", {
            required: "Required",
          })} />
          </div>
          <div className={styles.textInput}>
  <h4 className={styles.col25}>Your E-mail:</h4>
  <input   className={styles.input} type='email' name='user_email' placeholder='Email' {...register("user_email", {
            required: "Required",
          })}  />
          </div>
          <div className={styles.textInput}>
  <h4 className={styles.col25}>Describe problem:</h4>
  <textarea  className={styles.input}  name='message' placeholder='Message' {...register("message", {
            required: "Required",
          })} />
          </div>
  {/* <br/> */}
  <Button variant="contained"  color="primary" type='submit' value='Send' >Send</Button>

  <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="primary"
            required='true'
          
          />
        }
        label="I understand my personal details will be used to communicate with me about this message."
      />

</form>

      </div>
      </Typography>
      </div>
      {/* </div> */}
      </Container>
      </>
    );
  }
  export default Contact;