import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Noel Pinto</h4>
      <h4>Copyright &copy; 2024 </h4>
      <div className='footerLinks'>
        <a href="https://github.com/curiouslumber" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/noelpinto47/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:noelpinto47@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
        <a href="https://leetcode.com/noelpinto47/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer