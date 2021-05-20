
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Contact.module.scss';
import { Button, Typography,Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';

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
    textAlign: 'left'

  },
  container: {
    paddingTop: '50px',
  },
  text: {
    textIndent: '1.5em',
    fontSize: '18px',
    fontWeight: '400',
    paddingTop: '10px',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: '600',
    paddingTop: '30px',
  },
  text_padding:{
    fontSize: '18px',
    fontWeight: '400',
    paddingTop: '10px',
    paddingBottom:'40px'
  }
}


init("user_nsMO4FPObBfq04EwgaiVC");

const Contact = () => {
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

        <div  >



          <Typography style={styless.main} component="h1" variant='h4' align='center' >Contact us
<Typography style={styless.subtitle} align='center' component="p">If you need help using our service GDPR Checker, please contact us by E-Mail gdpr.kz@gmail.com or comlete the Forms</Typography>
      <div className='contact'>
        
        <form id='contact-form' className={styles.controls} onSubmit={handleSubmit(onSubmit)}>
      <h4>Your Name:</h4>
  <input  className={styles.input}  type='text' name='user_name' placeholder='Name' {...register("message", {
            required: "Required",
          })} />
  {/* <br/> */}
  <h4>Your E-mail:</h4>
  <input   className={styles.input} type='email' name='user_email' placeholder='Email' {...register("message", {
            required: "Required",
          })}  />
  {/* <br/> */}
  <h4>Describe problem:</h4>
  <textarea  className={styles.input}  name='message' placeholder='Message' {...register("message", {
            required: "Required",
          })} />
  {/* <br/> */}
  <Button variant="contained"  color="primary" type='submit' value='Send' >Send</Button>
</form>
      </div>
      </Typography>
      </div>
      </Container>
      </>
    );
  }
  export default Contact;