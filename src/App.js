import React from 'react';
import './css/App.css';
import Main from './pages';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Switch>
    <div >
     <Route exact path="/" component={Main}/>
    </div>
    </Switch>
  );
}

export default App;
