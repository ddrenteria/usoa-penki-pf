import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//style
import './css/default.css'

//components
import  Header from './components/headerComponent/header';
import  Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage/homePage';
import DigitalArt from './components/pages/digitalArt/digitalArt';
import TraditionalArt from './components/pages/traditionalArt/traditionalArt';
import GraphicDesign from './components/pages/graphicDesign/graphicDesign';
import Contact from './components/pages/contact/contact';



function App() {
  return (
    <Router>
      <div className="App">
          
          <Header/>

            <Route exact path='/' component={HomePage}/>
            <Route exact path='/digitalArt' component={DigitalArt}/>
            <Route exact path='/traditionalArt' component={TraditionalArt}/>
            <Route exact path='/graphicDesign' component={GraphicDesign}/>
            <Route exact path='/contact' component={Contact}/>
          
          <Footer/>

      </div>
    </Router>
  );
}

export default App;
