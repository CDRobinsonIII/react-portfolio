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
            <p><strong>Link to Github Repo: </strong>
              <a href={props.portfolioGitHubLink}>{props.portfolioGitHubLink}</a>
            </p>
          </li>
          <li>
            <p><strong>Deployed Link: </strong>
              <a href={props.portfolioDeployedLink}>{props.portfolioDeployedLink}</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;
