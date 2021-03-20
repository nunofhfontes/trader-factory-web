import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navigation/Navbar/Navbar";
import Portfolio from "./containers/Portfolio/Portfolio";

import * as actions from './store/actions/index';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/fundamentals">
            <Fundamentals />
          </Route>
          <Route path="/techanalysis">
            <TechAnalysis />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}



function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Account() {
  return <h2>Account</h2>;
}

function Fundamentals() {
  return <h2>Fundamentals</h2>;
}

function TechAnalysis() {
  return <h2>Technical Analysis</h2>;
}

// export default App;
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
