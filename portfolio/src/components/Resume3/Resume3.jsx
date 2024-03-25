import './Resume3.css';
import React from 'react';



const Skills = () => {
  return (
    <div>
      <h2 className="title additional-class">My Skills</h2>
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
            <p className="skill additional-class">Web Design <span className="skill-level additional-class">85%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-group additional-class">
            <p className="skill additional-class">Figma <span className="skill-level additional-class">90%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '90%' }}></div>
            </div>
          </div>
          {/* stop */}
        </div>
        <div className="right-skills">
          <div className="skill-group additional-class">
            <p className="skill additional-class">HTML/CSS <span className="skill-level additional-class">70%</span></p>
            <div className="progress-bar-container additional-class">
              <div className="progress-bar-background"></div>
              <div className="progress-bar-foreground" style={{ width: '70%' }}></div>
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
          {/* Add other right-aligned skills here */}
        </div>
      </div>
    </div>
  );
}

export default Skills;