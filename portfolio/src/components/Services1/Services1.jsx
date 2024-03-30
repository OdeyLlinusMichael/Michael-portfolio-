import React, { useEffect } from 'react';
import './Services1.css';

const Services1 = () => {
  
  
  
  useEffect(() => {
        const spanTexts = document.getElementsByTagName("span");
        for (let spanText of spanTexts) {
            spanText.classList.add("active");
        }
    }, []);

  return (
    <div id="serq2">
      <div className="deals">
        <h1>What I DO</h1>
        <div className="back-textr">
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </div>
      </div>
    </div>
  );
};

export default Services1;