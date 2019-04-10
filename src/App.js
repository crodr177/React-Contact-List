import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContactProfile from './ContactProfile'
import Contact from './Contacts'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faUser, faEnvelope, faMobileAlt, faGlobeAmericas, faKey } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowLeft, faUser, faEnvelope, faMobileAlt, faGlobeAmericas, faKey);

class App extends Component {
  render() {
    return (
      <Router>
        <div id="container">
         
          <div id="contact-page">
            <Route exact path="/" component={Contact}/>
            <Route exact path="/contactprofile/:id" component={ContactProfile}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
