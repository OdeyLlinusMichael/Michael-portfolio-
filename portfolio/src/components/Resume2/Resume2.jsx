import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import './Resume2.css';

const Resume2 = () => {
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
        <div className="containerx">
            <main className="rowx">
                {/* ******* Education Section Starts ******* */}
                <section className="colx">
                    <header className="titlex">
                        <h2>EDUCATION</h2>
                    </header>
                    
                    <div className="contentsx">
                    <div className="box1">
                            <div className="boxx">
                               <h4>jun. 2024</h4>
                               <h3>Freecodecamp</h3>
                               <p className="t01"> responsive web design-Developers certification </p>
                               <p>I earned a Developer Certification in Responsive Web Design from freeCodeCamp, further expanding my skill set and expertise in creating responsive web applications.</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="boxx">
                               <h4>jun. 2024</h4>
                               <h3> European open university</h3>
                               <p className="t01"> Web Analytics SEO-Professional certification program </p>
                               <p> I earned a Web Analytics SEO-Developer Certification from European Open University, further expanding my skill set and expertise in search engine optimization and web analytics.</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="boxx">
                               <h4>Mar. 2024</h4>
                               <h3>Udemy.Inc</h3>
                               <p className="t01">certificate of completion-flutterFlow beginners, crash course</p>
                               <p>I completed the FlutterFlow Beginner Crash Course from Udemy, Inc., earning a Certificate of Completion and advancing my proficiency in nocode development.".</p>
                            </div>
                        </div> 
                        <div className="box1">
                            <div className="boxx">
                               <h4>Dec. 2023</h4>
                               <h3>Udemy.Inc</h3>
                               <p className="t01">certificate of completion-Figma UI/UX Design Advanced</p>
                               <p>I earned a certificate of completion in Figma UI/UX Design Advanced from Udemy, Inc., further expanding my skill set and expertise in user interface and experience design.</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="boxx">
                               <h4>2018 - 2023</h4>
                               <h3>Federal Polytechnic Auchi, Edo State</h3>
                               <p className="t01">Diploma in Banking and Finance</p>
                               <p>At Federal Polytechnic Auchi, Edo State, I pursued a Diploma in Banking and Finance, gaining valuable insights into financial principles and management practices.</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="boxx">
                                <h4>2016 - 2018</h4>
                                <h3>Global-Tech World Computer Institute</h3>
                                <p className="t01">Desktop Publishing and graphic designs</p>
                                <p>At Global-Tech World Computer Institute, I specialized in desktop publishing and graphic design, honing my skills and knowledge in these areas to prepare for a career in the creative industry.</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="boxx">
                               <h4>2010 - 2016</h4>
                               <h3>Hephzibah college secondary school</h3>
                               <p className="t01">Secondary School Leacing Certificate(SSCE)</p>
                               <p>My secondary school education provided me with a solid academic grounding and further fueled my passion for exploration and knowledge acquisition.</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="boxx">
                               <h4>2000 - 2010</h4>
                               <h3>First Gate Primary School</h3>
                               <p className="t01">Primary School Leaving Certificate</p>
                               <p>During my primary school years, I began cultivating a curiosity for learning and laying the foundation for my future endeavors.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ******* Education Section Ends ******* */}

                {/* ******* Experience Section Starts ******* */}
                <section className="colx">
                    <header className="titlex">
                        <h2>EXPERIENCE</h2>
                    </header>
                    <div className="contentsx">
                       <div className="box1">
                           <div className="boxx">
                               <h4>2021 - till date</h4>
                               <h3>Interior Product designer at Lyn’s Decor</h3>
                               <p>As an Interior Product Designer at Lyn’s Decor, I had the opportunity to merge my passion for design with the intricacies of interior spaces. Collaborating closely with clients and the design team, I conceptualized and developed innovative product designs that seamlessly integrated with diverse interior aesthetics. From conceptualization to execution, I contributed to creating unique and functional interior products that enhanced the ambiance and functionality of various spaces.</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="boxx">
                               <h4>2019 - 2020</h4>
                               <h3>Product designer at Debonairs Pizza Nigeria</h3>
                               <p>As a Product Designer at Debonairs Pizza Nigeria, I spearheaded the conceptualization and development of new menu items and packaging designs. Collaborating with cross-functional teams, I ensured that our products not only met but exceeded customer expectations, enhancing the overall dining experience.</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="boxx">
                               <h4>2018 - 2019</h4>
                              <h3>Graphics designer at Achievers LLc</h3>
                               <p>As a Graphics Designer at Achievers LLC, I was responsible for creating visually compelling designs for various marketing materials and digital platforms. My role involved conceptualizing and executing innovative design solutions that effectively communicated the company's brand identity and messaging to target audiences.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ******* Experience Section Ends ******* */}
            </main>
        </div>
    );
};

export default Resume2;
