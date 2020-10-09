import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Main from './Main';
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
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
