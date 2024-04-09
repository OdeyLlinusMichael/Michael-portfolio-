import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import './Services2.css';

const Services2 = () => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const handleScroll = () => {
          if (!isVisible && ref.current.getBoundingClientRect().top < window.innerHeight * 0.75) {
              setIsVisible(true);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="k1">
      <motion.div 
        initial={{ opacity: 0, y: 300 }} 
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 150 }} 
        transition={{ duration: 1 }}
        ref={ref}
      >
      <div className="k2">
        <div className="k3">
          <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path fill="#f23a3a" d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
          <h2>Graphic Designer</h2>
          <p>Graphic design services encompass a diverse range, including logo and branding, print and web design, advertising graphics, illustration, motion graphics, typography, UI/UX design, consultation, and more, catering to various visual communication needs.</p>
        </div>
        <div className="k3">
          <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 576 512"><path fill="#f23a3a" d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/></svg>
          <h2>UI/UX Designer</h2>
          <p>I provide services focused on creating intuitive digital experiences through user research, wireframing, UI design, usability testing, and collaboration with development teams.</p>
        </div>
        <div className="k3">
          <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path fill="#f23a3a" d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"/></svg>
          <h2>Product Designer</h2>
          <p>Product designers are not just artists; they're strategic partners who bridge the gap between your initial idea and a successful product. Their expertise spans the entire product lifecycle, from understanding your target audience to crafting a user-friendly experience and ensuring smooth development. </p>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Services2;