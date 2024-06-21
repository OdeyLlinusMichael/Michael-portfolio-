import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import './Resume3.css';



const Skills = () => {
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
    <div>
      <motion.div 
       initial={{ opacity: 0, y: 300 }} 
       animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 150 }} 
       transition={{ duration: 1 }}
       ref={ref}
      >
      <h2 className="title additional-class"> My Skill </h2>
      <div className="skills-container additional-class">
        <div className="left-skills">
          <div className="skill-group additional-class">
            <p className="skill additional-class">Graphics design <span className="skill-level additional-class">95%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '95%' }}></div>
            </div>
          </div>
          {/* Add other left-aligned skills here */}
          <div className="skill-group additional-class">
            <p className="skill additional-class">Figma <span className="skill-level additional-class">90%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-group additional-class">
            <p className="skill additional-class">React <span className="skill-level additional-class">85%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-group additional-class">
            <p className="skill additional-class">flutterFlow <span className="skill-level additional-class">85%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '85%' }}></div>
            </div>
          </div>
          {/* stop */}
        </div>
        <div className="right-skills">    
          <div className="skill-group additional-class">
            <p className="skill additional-class">HTML/CSS <span className="skill-level additional-class">95%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '95%' }}></div>
            </div>
          </div>
          {/* Add other right-aligned skills here */}
          <div className="skill-group additional-class">
            <p className="skill additional-class">Adobe Photoshop <span className="skill-level additional-class">78%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '78%' }}></div>
            </div>
          </div>
          <div className="skill-group additional-class">
            <p className="skill additional-class">Adobe illustrator draw <span className="skill-level additional-class">95%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="skill-group additional-class">
            <p className="skill additional-class"> JavaScript <span className="skill-level additional-class">75%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '75%' }}></div>
            </div>
          </div>
          {/* Add other right-aligned skills here */}
        </div>
      </div>
      </motion.div>
    </div>
  );
}

export default Skills;