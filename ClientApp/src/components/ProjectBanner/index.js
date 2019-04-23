import React from 'react';


import "./ProjectBanner.css"
const ProjectBanner = props => (
  <ul id="project_banner">
    <li>
      <div className="wrapper">
        <div className="box">
          <a id="projectOne"></a>
        </div>
        <a className="overlay" href="https://cageshopper.herokuapp.com/">
        </a>
      </div>
    </li>
    <li>
      <div className="wrapper">
          <div className="box">
            <a id="projectTwo"></a>
          </div>
          <a className="overlayTwo" href="https://dev-pandemic.firebaseapp.com/">
          </a>
      </div>
    </li>
  </ul>
);

export default ProjectBanner;
