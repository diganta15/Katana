import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Main from './Main';
import About from './pages/About';
import Github from './pages/Github'
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import './App.scss'


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/pages/about" component={About} />
            <Route exact path="/pages/github" component={Github} />
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
