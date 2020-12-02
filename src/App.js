import React from 'react'
import './global.scss'
import {PageTemplate} from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Main} from './pages'

function App() {
  return (
    <Router>
      <Route 
        exact
        path="/"
        component={Main}
      />
    </Router>
  );
}

export default App;
