import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.portfolioTitle} src={props.portfolioScreenShot} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.portfolioTitle}
          </li>
          <li>
            <strong>Link to Github Repo:</strong> {props.portfolioGitHubLink}
          </li>
          <li>
            <strong>Deployed Link:</strong> {props.portfolioDeployedLink}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;
