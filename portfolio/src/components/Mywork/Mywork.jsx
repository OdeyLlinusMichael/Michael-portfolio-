import React, { useEffect } from 'react';
import './Mywork.css';




const Mywork = () => {
    useEffect(() => {
        const spanTexts = document.getElementsByTagName("span");
        for (let spanText of spanTexts) {
            spanText.classList.add("active");
        }
    }, []);

    return (
        <div id="Apor">
            <div className="deals">
                <h1>My Work</h1>
                <div className="back-textr">
                    <span>P</span>
                    <span>O</span>
                    <span>R</span>
                    <span>T</span>
                    <span>F</span>
                    <span>O</span>
                    <span>L</span>
                    <span>I</span>
                    <span>O</span>
                </div>
            </div>
        </div>
    );
};

export default Mywork;