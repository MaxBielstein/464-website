import React, { useState, useEffect } from 'react';
import '../css/skills.css';
import { Collapse } from 'react-collapse';

const SkillsPage = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLangOpen(true);
      setIsToolsOpen(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const languages = [
    { name: "Python", url: "https://python.org" },
    { name: "Java", url: "https://java.com" },
    { name: "C#", url: "https://dotnet.microsoft.com" },
    { name: "Javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Typescript", url: "https://www.typescriptlang.org" },
    { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Dafny", url: "https://dafny.org" },
    { name: "SQL", url: "https://www.mysql.com" },
    { name: "C", url: "https://www.iso.org/standard/74528.html" },
    { name: "C++", url: "https://isocpp.org" },
    { name: "Perl", url: "https://www.perl.org" }
  ];

  const tools = [
    { name: "Git", url: "https://git-scm.com" },
    { name: "React-Redux", url: "https://react-redux.js.org" },
    { name: "REST APIs", url: "https://en.wikipedia.org/wiki/REST" },
    { name: ".NET", url: "https://dotnet.microsoft.com" },
    { name: "Azure DevOps", url: "https://azure.microsoft.com/en-us/services/devops/" },
    { name: "Agile", url: "https://asana.com/resources/agile-methodology" },
    { name: "AWS", url: "https://aws.amazon.com" },
    { name: "GitHub Actions", url: "https://github.com/features/actions" },
    { name: "Jira", url: "https://www.atlassian.com/software/jira" },
    { name: "Docker", url: "https://www.docker.com" },
    { name: "Yarn", url: "https://yarnpkg.com" },
    { name: "PNPM", url: "https://pnpm.io" },
    { name: "Node.js", url: "https://nodejs.org" },
    { name: "TensorFlow", url: "https://www.tensorflow.org" }
  ];

  const handleSkillClick = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="container">
      <h1>My Skills</h1>
      <div>
        <button className="button" onClick={() => setIsLangOpen(!isLangOpen)}>Programming Languages</button>
        <Collapse isOpened={isLangOpen}>
          <div className="skillsList">
            {languages.map(lang => (
              <div key={lang.name} className="skillItem" onClick={() => handleSkillClick(lang.url)}>
                {lang.name}
              </div>
            ))}
          </div>
        </Collapse>
      </div>
      <div>
        <button className="button" onClick={() => setIsToolsOpen(!isToolsOpen)}>Tools and Frameworks</button>
        <Collapse isOpened={isToolsOpen}>
          <div className="skillsList">
            {tools.map(tool => (
              <div key={tool.name} className="skillItem" onClick={() => handleSkillClick(tool.url)}>
                {tool.name}
              </div>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default SkillsPage;
