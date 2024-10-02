import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import Skills from './Skills';

const About = () => {
  return (
    <>
      <div className="AboutPage">
      <h1 className='SkillsHeading'>Professional Skillset</h1>
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