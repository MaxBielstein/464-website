import React from 'react';
import '../css/projects.css';

function Projects() {
  return (
    <div className="projects main-contact">
      <Project title="Pizza Visualization Application" 
      description="Application for displaying pizzas within a pizza oven without the use of interior cameras." 
      goal="The goal of this application is to make it so that you don't have to use expensive heat resistant cameras to see inside of a pizza oven."
      languagesUsed="Java and JavaFX"
      toolsUsed="Maven">
      </Project>
      <Project title="Health Department Applications" 
      description="Multiple applications for tracking and managing vaccination records and vaccines." 
      goal="This application was made with the purpose of allowing a vaccination agency to keep track of vaccine records and the distribution of vaccines."
      languagesUsed="Python, SQL, and Kivy"
      toolsUsed="None">
      </Project>
      <Project title="Raikes Design Studio Project" 
      description="This is an application created for Farm Credit that enables farmers to easily apply for carbon credits on their farm land plots" 
      goal="This application was made with the purpose of making it easier for farmers to be able to obtain carbon credits."
      languagesUsed="Javascript, HTML, CSS, and C#"
      toolsUsed=".NET, React and, Node.js">
      </Project>
    </div>
    
  );
}

function Project({title, description, goal, languagesUsed, toolsUsed}) {
    return (
        <div className="project">
            <p className="project-title">{title}</p>
            <hr/>
            <p className="project-text">Description: {description}</p>
            <p className="project-text">Goal: {goal}</p>
            <p className="project-text">Languages Used: {languagesUsed}</p>
            <p className="project-text">Tools Used: {toolsUsed}</p>
        </div>
    );
}

export default Projects;
