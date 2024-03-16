import React from 'react';
import '../css/resume.css';

function ResumePage() {
    const goToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/maxbielstein');
    };

    return (
        <body>
            <h1 class="top-name">Max Bielstein</h1>
            <h3 class="email">mbielstein2@huskers.unl.edu</h3>
            <h3 class="phone">(402)-213-8842</h3>
            <div class="main-container">
                <div class="inner-container-left">
                    <div >
                        <ul>
                            <h3>Experience</h3>
                            <h5>SOFTWARE ENGINEERING INTERN</h5>
                            <h5>Principal Financial Group</h5>
                            <h5>May 2023-Current | Des Moines, IA (Remote)</h5>
                            <ul>
                                <li>Upgraded and maintained multiple Amazon Web Services (AWS)
                                    applications in collaboration with a team of developers
                                </li>
                                <li>Created and modified GitHub actions workflows to automate the
                                    testing and deployment of applications
                                </li>
                                <li>Used domain-driven design to create new features for applications
                                    within a CI/CD pipeline
                                </li>
                            </ul>
                            <h5>SOFTWARE ENGINEERING INTERN</h5>
                            <h5>Kiewit</h5>
                            <h5>May 2022-August 2022 | Omaha, NE (Hybrid)</h5>
                            <ul>
                                <li>Developed features to corporate applications while using scrum and
                                    agile development methodologies
                                </li>
                                <li>Worked with other interns on a scrum team to develop features on
                                    an existing application
                                </li>
                                <li>Added API calls and other functionality to a .NET application
                                </li>
                            </ul>
                            <h5>SOFTWARE ENGINEERING TEACHING ASSISTANT</h5>
                            <h5>University of Nebraska-Lincoln</h5>
                            <h5>August 2021-May 2023 | Lincoln, NE</h5>
                            <ul>
                                <li>Helped students in understanding and completing their coursework
                                </li>
                                <li>Assisted in directing and grading labs
                                </li>
                                <li>Explained difficult to understand concepts to first-time
                                    programmers
                                </li>
                            </ul>
                            <h3>Projects</h3>
                            <h5>PIZZA VISUALIZATION APPLICATION</h5>
                            <h5>Application for displaying
                                pizzas within a pizza oven without the use of interior cameras</h5>
                            <ul>
                                <li>Designed and created the user interface with JavaFX
                                </li>
                                <li>Coded the algorithm in Java for displaying pizzas within an oven
                                    with the use of exterior cameras
                                </li>
                                <li>Used webcam APIs to access, manipulate, and display images
                                </li>
                            </ul>
                            <h5>HEALTH DEPARTMENT APPS</h5>
                            <h5>Multiple applications for tracking and
                                managing vaccination records and vaccines</h5>
                            <ul>
                                <li>Developed desktop application to track the distribution and records
                                    of vaccines
                                </li>
                                <li>Programmed two mobile applications using Python and KivyMD
                                </li>
                                <li>Designed and implemented SQL database for storing vaccine records
                                </li>
                            </ul>
                            <h5>RAIKES DESIGN STUDIO PROJECT</h5>
                            <h5>An application created for Farm
                                Credit that shows the sustainability of farm land plots</h5>
                            <ul>
                                <li>Worked on a team to develop a react based front-end
                                </li>
                                <li>Built a .NET API from scratch to work in tandem with the web
                                    application
                                </li>
                                <li>Communicated with stakeholders to derive application requirements
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div class="inner-container-right">
                    <div class="group">
                        <ul>
                            <h3 class="small-header">EDUCATION</h3>
                            <h4 class="bold">UNIVERSITY OF NEBRASKA-LINCOLN</h4>
                            <h5>BACHELOR OF SCIENCE | SOFTWARE ENGINEERING</h5>
                            <h5>GPA: 3.97</h5>
                            <h5>Expected Graduation: May 2024</h5>
                            <h4 class="bold upperbreak">UNIVERSITY OF NEBRASKA AT OMAHA</h4>
                            <h5>GENERAL STUDIES</h5>
                            <h5>GPA: 3.97</h5>
                        </ul>
                    </div>
                    <div class="group">
                        <ul>
                            <h3 class="small-header">LINKS</h3>
                            <table class="resume-table">
                                <tr>
                                    <th>
                                    <h5>LinkedIn:</h5>
                                    </th>
                                    <th>
                                    <h5 class="clickable" onClick={goToLinkedIn}>www.linkedin.com/in/maxbielstein</h5>
                                    </th>
                                </tr>
                            </table>
                        </ul>
                    </div>
                    <div class="group">
                        <ul>
                            <h3 class="small-header">COURSEWORK</h3>
                            <h5>Database Design</h5>
                            <h5>Algorithms</h5>
                            <h5>UX/UI</h5>
                            <h5>Formal Verification</h5>
                            <h5>Machine Learning</h5>
                            <h5>Testing and Analysis</h5>
                        </ul>
                    </div>
                    <div class="group">
                        <ul>
                            <h3 class="small-header">SKILLS</h3>
                            <h4 class="underline bold">
                                Languages
                            </h4>
                            <table class="resume-table">
                                <tr>
                                    <th>
                                    <h5>Python</h5>
                                    </th>
                                    <th>
                                    <h5>Java</h5>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                    <h5>C#</h5>
                                    </th>
                                    <th>
                                    <h5>Javascript</h5>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                    <h5>Typescript</h5>
                                    </th>
                                    <th>
                                    <h5>HTML</h5>
                                    </th>
                                </tr>
                                </table>
                                <table class="resume-table">
                                <tr>
                                    <th>
                                    <h5>CSS</h5>
                                    </th>
                                    <th>
                                    <h5>Dafny</h5>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                    <h5>SQL</h5>
                                    </th>
                                    <th>
                                    <h5>C</h5>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                    <h5>C++</h5>
                                    </th>
                                    <th>
                                    <h5>Perl</h5>
                                    </th>
                                </tr>
                            </table>
                            <h4 class="underline bold">
                                Tools and Frameworks
                            </h4>
                            <table class="resume-table">
                                <tr>
                                    <th>
                                    <h5>Git</h5>
                                    </th>
                                    <th>
                                    <h5>React-Redux</h5>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                    <h5>REST APIs</h5>
                                    </th>
                                    <th>
                                    <h5>.NET</h5>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                    <h5>Azure DevOps</h5>
                                    </th>
                                    <th>
                                    <h5>Agile</h5>
                                    </th>
                                </tr>
                                </table>
                                <table class="resume-table">
                                <tr>
                                    <th>
                                    <h5>AWS</h5>
                                    </th>
                                    <th>
                                    <h5>Github Actions</h5>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                    <h5>Jira</h5>
                                    </th>
                                    <th>
                                    <h5>Docker</h5>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                    <h5>Yarn</h5>
                                    </th>
                                    <th>
                                    <h5>PNPM</h5>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                    <h5>Node.js</h5>
                                    </th>
                                    <th>
                                    <h5>Mocha</h5>
                                    </th>
                                </tr>
                            </table>
                        </ul>
                    </div>
                    <div class="group">
                        <ul>
                            <h3 class="small-header">INTERESTS</h3>
                            <h5>Deep Learning</h5>
                            <h5>Electric Bikes</h5>
                            <h5>Skiing</h5>
                            <h5>Investing</h5>
                            <h5>Traveling</h5>
                        </ul>
                    </div>
                </div>
            </div>
        </body>

    );
}

export default ResumePage;
