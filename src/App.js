import './App.css';
import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";




class App extends Component {

  // Map over this.state.portfolio and render a PortfolioCard component for each portfolio object
  render() {
    return (
      <Router basename="/">
        <NavTabs />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
