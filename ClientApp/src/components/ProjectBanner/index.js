import React from 'react';


import "./ProjectBanner.css"
const ProjectBanner = props => (
  <ul id="project_banner">
    <li>
      <div class="wrapper">
        <div class="box">
          <a id="projectOne"></a>
        </div>
        <a class="overlay" href="https://cageshopper.herokuapp.com/">
        </a>
      </div>
    </li>
    <li>
      <div class="wrapper">
          <div class="box">
            <a id="projectTwo"></a>
          </div>
          <a class="overlayTwo" href="https://dev-pandemic.firebaseapp.com/">
          </a>
      </div>
    </li>
  </ul>
);

export default ProjectBanner;
