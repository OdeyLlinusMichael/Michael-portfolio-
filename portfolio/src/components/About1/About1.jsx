import React, { useEffect } from 'react';
import './About1.css'; // Don't forget to create the corresponding CSS file for styling



const About1 = () => {
  
  useEffect(() => {
    const spanTexts = document.getElementsByTagName("span");
    for (let spanText of spanTexts) {
      spanText.classList.add("active");
      spanText.addEventListener("touchstart", () => {
        spanText.classList.toggle("touch-hover");
      });
    }
  }, []);

  return (
    <div id="About">
      <div className="deals">
        <h1>know Me More</h1>
        <div className="back-text">
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span className="targeted-span">T</span> {/* This span gets a different class */}
          <span>M</span>
          <span>E</span>
        </div>
      </div>
    </div>
  );
}

export default About1;