import React, { useEffect, useRef, useState } from 'react';
import michaelcv from '../../assets/michaelcv.jpg'; // Corrected file path
import { motion } from "framer-motion";
import './About2.css';

const About2 = () => {
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
    }, [isVisible]);

    const handleDownloadClick = () => {
    window.location.href = michaelcv; // Use the imported PDF file
    };

    return (
        <section className="runa" ref={ref}>
            <div className="row-gy-5">
                <motion.div className="col-lg-7" initial={{ y: 1000 }} animate={{ y: isVisible ? 10 : 1000 }} transition={{ duration: 1 }} >
                    <h2 className="text-7">I'm <span className="text-primary">Odey Linus Michael</span></h2>
                    <p className="txt3">With six years of professional experience spanning across graphics, product, and UI/UX design, I approach every project with a blend of creativity and strategic insight. My journey in the design realm has equipped me with the expertise to craft visually stunning solutions that not only meet but exceed client expectations. From conceptualization to execution, I thrive on the challenge of bringing ideas to life through thoughtful design that resonates with users on a deep level.</p>
                    <p>Outside the design studio, I find solace in the world of cinema, where storytelling and visual aesthetics intertwine to create immersive experiences. Whether it’s a classic film or the latest blockbuster, I draw inspiration from the diverse narratives and visual styles, which in turn fuel my creativity and enrich my approach to design. Explore my portfolio to witness how my passion for design and love for movies converge, shaping unique and engaging user experiences.</p>
                </motion.div>

                <motion.div className="col-lg-5 col-xl-4" initial={{ y: 1000 }} animate={{ y: isVisible ? 10 : 1000 }} transition={{ duration: 1 }} >
                    <div className="ps-lg-4">
                        <ul className="list-style-2">
                            <li>Name:<span className="fw-600 me-2">Odey Linus Michael</span></li>
                            <li>Email:<span className="fw-600 me-2">linusodey55@gmail.com</span></li>
                            <li>Age:<span className="fw-600 me-2">24</span></li>
                            <li>From:<span className="fw-600 me-2">Lagos, Nigeria</span></li>
                        </ul>
                        <button className="btn btn-primary mb-3" onClick={handleDownloadClick}>Download CV</button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About2;
