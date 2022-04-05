
import './App.scss';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../src/Hoc/Home';
import Header from '../src/Hoc/Header';
import Footer from '../src/Hoc/Footer';
import FeaturedPage from './Hoc/FeaturedPage';
import AboutPage from './Hoc/AboutPage';
import ContactPage from './Hoc/ContactPage';



function App(){

  return(
        <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/feature'} component={FeaturedPage} />
            <Route exact path={'/about'} component={AboutPage} />
            <Route exact path={'/contact'} component={ContactPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App;
