import React from 'react'
import './global.scss'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Main, TaskForm, TaskRun} from './pages'

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
      <Route
        exact
        path="/run/:taskid"
        component={TaskRun}
      />
    </Router>
  );
}

export default App;
