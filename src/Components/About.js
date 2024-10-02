import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <>
      <div className="AboutPage">
      <h1 className='SkillsHeading' style={{ marginTop: "3%" }}>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Flutter' />
        <Skills skill='React.js' />
        <Skills skill='Node.js' />
        <Skills skill='ASP.NET' />

        <Skills skill='Java' />
        <Skills skill='JavaScript' />
        <Skills skill='Python' />
        <Skills skill='Go' />
        <Skills skill='C++' />

        <Skills skill='MySQL' />
        <Skills skill='PostgreSQL' />
        <Skills skill='MSSQL' />
        <Skills skill='MongoDB' />

        <Skills skill='Google Cloud Platform (GCP)' />
        <Skills skill='Amazon Web Services (AWS)' />

        <Skills skill='Git' />
        <Skills skill='GitHub' />
        <Skills skill='JIRA' />
        <Skills skill='Monday.com' />

      </div>
      </div>
    </>
  )
}

export default About