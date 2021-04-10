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
import Dashboard from "./containers/Dashboard/Dashboard";
import Fundamentals from "./containers/Fundamentals/Fundamentals";
import Auth from "./containers/Auth/Auth";
import PrivateRoute from "./Hooks/PrivateRoute";

import * as actions from './store/actions/index';


function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
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
          {/* <Route path="/techanalysis">
            <TechAnalysis />
          </Route> */}
          <PrivateRoute component={TechAnalysis} path="/techanalysis" isLogedIn="{this.props.isAuthenticated}" exact />
        </Switch>
      </div>
    </Router>

    /* <Switch>
      <!-- PUBLIC ROUTE -->
      <PublicRoute restricted={true} component={Login} path="/" exact />

      <!-- PRIVATE ROUTE -->
      <PrivateRoute component={Home} path="/home" exact />
      <PrivateRoute component={PageOne} path="/page-1" exact />
      <PrivateRoute component={PageTwo} path="/page-2" exact />
      <PrivateRoute component={NoMatch} path="*" />
      <PublicRoute component={NoMatch} path="*" />
    </Switch> */
    /* <PrivateRoute component={Home} path="/home" exact /> */

  );
}

function Account() {
  return <h2>Account</h2>;
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
