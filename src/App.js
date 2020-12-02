import React from 'react'
import './global.scss'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Main, TaskForm} from './pages'

function App() {
  return (
    <Router>
      <Route 
        exact
        path="/"
        component={Main}
      />
      <Route
        exact
        path="/newtask/:uuid"
        component={TaskForm}
      />
    </Router>
  );
}

export default App;
