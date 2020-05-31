import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
