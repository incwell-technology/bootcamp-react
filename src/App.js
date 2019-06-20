import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage';
import Navbar from './components/common/navbar';
import About from './components/about';
import Course from './components/course';
import Mentors from './components/mentors';
import Events from './components/events';
import Contact from './components/contact';
import Enroll from './components/enroll';


function App() {
  return (
    <Router>
      <Navbar>  </Navbar>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/about"  component={About}/>
        <Route path="/courses"  component={Course}/>
        <Route path="/mentors"  component={Mentors}/>
        <Route path="/events"  component={Events}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/enroll"  component={Enroll}/>
      </Switch>
    </Router>
  );
}


export default App;
