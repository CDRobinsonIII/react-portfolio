import '../App.css';
import React, { Component } from "react";
import portfolio from '../portfolio.json';
import Title from '../components/Title';
import PortfolioCard from '../components/PortfolioCard';

class Portfolio extends Component {
  // Setting this.state.portfolio to the portfolio json array
  state = {
    portfolio
  };

  
  // Map over this.state.portfolio and render a PortfolioCard component for each portfolio object
  render() {
    return (
      <div>
        <Title>My portfolio:</Title>
        {this.state.portfolio.map(portfolio => (
          <PortfolioCard
            id={portfolio.id}
            portfolioTitle={portfolio.portfolioTitle}
            portfolioScreenShot={portfolio.portfolioScreenShot}
            portfolioGitHubLink={portfolio.portfolioGitHubLink}
            portfolioDeployedLink={portfolio.portfolioDeployedLink}
          />
        ))}
      </div>
    );
  }
}

export default Portfolio;
