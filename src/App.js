import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
