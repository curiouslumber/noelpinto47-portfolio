import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from 'react-avatar';
import { CiCoffeeCup } from "react-icons/ci";
import Skills from './Skills.js';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>NOEL PINTO</b></h1>
          <Typed />
          <div
            className="download-resume-btn"
            onClick={() => {
              const link = document.createElement('a');
              link.href = 'files/Resume.pdf';
              link.download = 'NoelPinto-Resume-SoftwareEngineer.pdf';
              link.click();
            }}
          >
            Download Resume
          </div>
        </div>

        <div>
          <Avatar
            src="https://raw.githubusercontent.com/curiouslumber/noelpinto47-portfolio/refs/heads/main/public/images/home-photo.jpg"
            name="Noel Pinto"
            size="400"
            round={true}
          />
        </div>

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            As a <b>Software Engineer</b>, I thrive on turning complex problems into innovative, scalable solutions. <br /><br />
            I’ve built dynamic websites and sleek mobile apps for both <b>Android</b> and <b>iOS</b>. I specialize in <b>MERN stack</b> development and have worked with technologies like <b>Node.js, GCP, and MongoDB</b>.<br /><br />
            I focus on delivering top-quality products on time ⏳ and have been sharpening my skills in <b>data structures</b> and <b>algorithms</b> 📊.<br /><br />
            I’m always eager to explore new ideas and build projects that make an impact!
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home