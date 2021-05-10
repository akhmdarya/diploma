import logo from './logo.svg';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import './App.css';
import { Link } from 'react-router-dom';
import Header from './Components/Header'
import SpacingGrid from './Components/Grid'
import SimpleContainer from './Components/Container'
import ResultPage from './Components/pages/ResultPage'
// import ResultPage from './Components/pages/login/LoginPage'
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/footer/Footer.jsx'
import FlagInfo from './Components/flags/FlagInfo'
import LoginPage from './Components/pages/login/LoginPage.tsx'

import CookieBanner from 'react-cookie-banner';
import Policy from './Components/pages/footersPages/Policy'
import Aboutgdpr from './Components/pages/about/Aboutgdpr'


function App() {

  const styles = {
    banner: {
       backgroundColor:"#3f51b5"
    },
    link:{
      color:'white',
      textDecoration: 'underline',
    }
  }
 

  return (
    <div className="App">
    

 
 

     
     <BrowserRouter>
          <Header/> 
          <CookieConsent
           cookieName="ACCEPTANCE"


          debug={true} 
style={styles.banner}


  enableDeclineButton
  onDecline={() => {
    // CookieConsent.name('false');
 
    console.log(getCookieConsentValue());
    
    alert("Cookie settings have been changed");
  }}
>  This website uses cookies. <Link style={styles.link} to ='/policy'> About consent</Link></CookieConsent>
        
  
 
      <Switch>  
       
      <Route exact path="/"  component={SimpleContainer}/>
          <Route exact path="/result/:url" component={ResultPage} />
        
          <Route path="/login" component={LoginPage} />
          <Route exact path="/cookies/:flagName" component={FlagInfo} />
          <Route excact path="/cookies" component={FlagInfo} />
          <Route excact path="/whatIsGdpr" component={Aboutgdpr} />
          <Route path="/policy" component={Policy} />
        
 {/* <SimpleContainer/> */}


              </Switch>
         <Footer />      
  </BrowserRouter>

 
 
     
    </div>
  );
}

export default App;
