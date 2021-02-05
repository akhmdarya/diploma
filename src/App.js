import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import SpacingGrid from './Components/Grid'
import SimpleContainer from './Components/Container'
import ResultPage from './Components/pages/ResultPage'
// import ResultPage from './Components/pages/login/LoginPage'
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
 

  return (
    <div className="App">
    
      <Header/>

     
     <BrowserRouter>
            
      <Switch>
              
          <Route path="/result/:url" component={ResultPage} />
          {/* <Route path="/login" component={LoginPage} />
         */}
 <SimpleContainer/>
         
              </Switch>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
