import '../App.css';
import React, { Component } from "react";
import Title from '../components/Title';
import PortfolioCard from '../components/PortfolioCard';
//import brew from "../images/the_brewway.jpg"
const { data } = require("../portfolio");


class Portfolio extends Component {
  // Setting this.state.portfolio to the portfolio json array
  state = {
    
  };

  
  // Map over this.state.portfolio and render a PortfolioCard component for each portfolio object
  render() {
    return (
      <div>
        <Title>My portfolio:</Title>
        {data.map(portfolio => (
          <PortfolioCard
            key={portfolio.id}
            id={portfolio.id}
            portfolioTitle={portfolio.portfolioTitle}
            portfolioScreenShot={portfolio.portfolioScreenShot.default}
            portfolioGitHubLink={portfolio.portfolioGitHubLink}
            portfolioDeployedLink={portfolio.portfolioDeployedLink}
          />
        ))}
      </div>
    );
  }
}

export default Portfolio;
