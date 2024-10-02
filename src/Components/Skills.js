import React from 'react'; 
import { CgCPlusPlus, CgFigma, CgMonday } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaBootstrap, FaJava, FaAws } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiMsqlServer } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPostman, SiVercel, SiDotnet, SiFlutter, SiGoland, SiHtml5, SiCss3, SiPhp, SiGooglecloud, SiJira } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Skills = ({ skill }) => {
  const icon = {
    'C++': <CgCPlusPlus />,
    'Java': <FaJava />,
    'Python': <FaPython />,
    'C#': <SiDotnet />,
    'Go': <SiGoland />,
    'JavaScript': <DiJavascript1 />,
    'HTML': <SiHtml5 />,
    'CSS': <SiCss3 />,
    'PHP': <SiPhp />,
    'React.js': <FaReact />,
    'Flutter': <SiFlutter />,
    // 'Dropwizard': <CgJava />,
    'Node.js': <DiNodejs />,
    'ASP.NET': <SiDotnet />,
    
    'MySQL': <SiMysql />,
    'PostgreSQL': <SiPostgresql />,
    'MSSQL': <DiMsqlServer />,
    'MongoDB': <SiMongodb />,

    'Google Cloud Platform (GCP)': <SiGooglecloud />,
    'Amazon Web Services (AWS)': <FaAws />,

    'Git': <FaGitAlt />,
    'GitHub': <FaGithub />,
    'JIRA': <SiJira />, // Adjust if JIRA-specific icon is available.
    'Confluence': <FaGithub />, // Adjust if Confluence-specific icon is available.
    'Monday.com': <CgMonday />, // Adjust if Monday.com-specific icon is available.

    'Agile': <FaReact />, // Replace with a suitable icon if available.
    'Scrum': <FaReact />, // Replace with a suitable icon if available.
    'SDLC': <FaReact />, // Replace with a suitable icon if available.

    'Postman': <SiPostman />,
    'Express': <SiExpress />,
    'Bootstrap': <FaBootstrap />,
    'Vercel': <SiVercel />,
    'Figma': <CgFigma />,
    'Npm': <FaNpm />
  }

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill] || skill} {/* Display skill name if no icon is found */}
    </div>
  )
}

export default Skills;