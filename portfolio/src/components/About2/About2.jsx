import React from 'react';
import './About2.css';
import michaelcv from '../../assets/michaelcv.jpg'; // Corrected file path

const About2 = () => {
    const handleDownloadClick = () => {
    window.location.href = michaelcv; // Use the imported PDF file
    };

    return (
        <section className="runa">
            <div className="row-gy-5">
                <div className="col-lg-7">
                    <h2 className="text-7">I'm <span className="text-primary">Odey Linus Michael</span></h2>
                    <p className="txt3">With six years of professional experience spanning across graphics, product, and UI/UX design, I approach every project with a blend of creativity and strategic insight. My journey in the design realm has equipped me with the expertise to craft visually stunning solutions that not only meet but exceed client expectations. From conceptualization to execution, I thrive on the challenge of bringing ideas to life through thoughtful design that resonates with users on a deep level.</p>
                    <p>Outside the design studio, I find solace in the world of cinema, where storytelling and visual aesthetics intertwine to create immersive experiences. Whether it’s a classic film or the latest blockbuster, I draw inspiration from the diverse narratives and visual styles, which in turn fuel my creativity and enrich my approach to design. Explore my portfolio to witness how my passion for design and love for movies converge, shaping unique and engaging user experiences.</p>
                </div>
                <div className="col-lg-5 col-xl-4">
                    <div className="ps-lg-4">
                        <ul className="list-style-2">
                            <li>Name:<span className="fw-600 me-2">Odey Linus Michael</span></li>
                            <li>Email:<span className="fw-600 me-2">linusodey55@gmail.com</span></li>
                            <li>Age:<span className="fw-600 me-2">24</span></li>
                            <li>From:<span className="fw-600 me-2">Lagos, Nigeria</span></li>
                        </ul>
                        <button className="btn btn-primary mb-3" onClick={handleDownloadClick}>Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About2;