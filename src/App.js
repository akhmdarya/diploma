import logo from './logo.svg';
import './App.css';
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
import CookieConsent from "react-cookie-consent";
import CookieBanner from 'react-cookie-banner';


function App() {

  const styles = {
    banner: {
       backgroundColor:"#3f51b5"
    },
  }
 

  return (
    <div className="App">
    

 
 

     
     <BrowserRouter>
          <Header/> 
          <CookieConsent debug={true} 
style={styles.banner}

  enableDeclineButton
  onDecline={() => {
    alert("You can leave the web site");
  }}
>  This website uses cookies.</CookieConsent>
        
  
 
      <Switch>  
       
      <Route exact path="/"  component={SimpleContainer}/>
          <Route exact path="/result/:url" component={ResultPage} />
        
          <Route path="/login" component={LoginPage} />
          <Route path="/cookies/:flagName" component={FlagInfo} />
        
 {/* <SimpleContainer/> */}


              </Switch>
         <Footer/>      
  </BrowserRouter>

 
 
     
    </div>
  );
}

export default App;
