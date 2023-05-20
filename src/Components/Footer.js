import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col"> 
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href='https://github.com/' target={'_blank'} rel='noreferrer' aria-label='gitHub'><FaGithub/></a>
    <a href='https://facebook.com/' target={'_blank'} rel='noreferrer' aria-label='facebook'><FaFacebook/></a>
    <a href='https://linkedin.com/' target={'_blank'} rel='noreferrer' aria-label='linkedIn'><FaLinkedin/></a>
    
  </div>
</footer>
    );
};

export default Footer;