import '..//App.css';
import React, { Component } from "react";
import headShot from "../images/Charles.jpg";
import gitHubLogo from "../images/gitHubIcon.png";
import resumeLogo from "../images/resumeButton.png";
import resumePDF from "../images/Charles_Robinson_Resume_2020.pdf";
import linkedInLogo from "../images/linkedInLogo.jpg";





class Home extends Component {
  
  render() {
    return (
      <div className="container-fluid bgcontainer">
        <div className ="container" >
            <div className="row">
                <div className="col-lg-8 col-md-10 col-sm-12 aboutMe">
                    <h1>Charles Dale Robinson III</h1>
                    <h2>About Me</h2>
                    <img src={headShot} alt="Head shot of Charles Robinson" className="headshot"/>
                    <p className = "about-me">
                        My name is Charles Robinson and I live in El Cajon, California. I am married to Larisse and we just celebrated our 20th wedding anniversary. We have two daughters, Audrey (age 10) and Sadie (age 8). Larisse and I own and operate art studios for children and adults - called Art with Larisse. We have three studio locations: La Mesa, Santee, and Bonita. We have been teaching art to students across San Diego County for almost 20 years.</p>
                    <p className = "about-me">
                        Larisse teaches and trains all of our instructors. I handle the business side of things, from managing payroll, accounting tasks, marketing, and website development. My goal is to apply the tools learned in my coding bootcamp to create a modernized website where we can manage our student database online. It's time to move into the digital age and leave the paper trail behind us.
                    </p> 
                </div>

                <div className="col-lg-4 col-sm-12 m-auto" id="connectWithMe">
                    <div>
                        <a href='https://www.linkedin.com/in/charlesdalerobinson?trk=profile-badge' target="blank">
                        <img src={linkedInLogo}/>
                        </a>
                    </div>
                    <div id="emailAndPhoneNumber">
                        <p>Email: <a className="contactLinkColor" href="mailto:charlesdalerobinson@gmail.com">charlesdalerobinson@gmail.com</a></p>
                        <p>Phone: 619-508-8168</p>
                    </div>
                    <a target="blank" href="https://github.com/CDRobinsonIII"><img alt="GitHub Logo" src={gitHubLogo} width="75" height="75"/></a>
                    <a href={resumePDF} target="blank"><img alt="Resume Button" src={resumeLogo} width="60" height="67"/></a>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Home;