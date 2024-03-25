import './Resume1.css';
import React, { useEffect } from 'react';


const Resume1 = () => {
    useEffect(() => {
        const spanTexts = document.querySelectorAll("#hero .back-text span");
        spanTexts.forEach(spanText => {
            spanText.classList.add("active");
        });
    }, []);

    return (
        <div id="hero">
            <div className="deals">
                <h1>Resume</h1>
                <div className="back-text">
                    <span>S</span>
                    <span>U</span>
                    <span>M</span>
                    <span>M</span>
                    <span>A</span>
                    <span>R</span>
                    <span>Y</span>
                </div>
            </div>
        </div>
    );
}

export default Resume1;