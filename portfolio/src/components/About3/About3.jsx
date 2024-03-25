import React from 'react';
import './About3.css';


const About3 = () => {
    return (
        <section className="runa">
            <div className="brands-grid separator-border mt-5">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="featured-box text-center">
                            <i className="fa-solid fa-briefcase fa-2xl"></i>
                            <h4 className="text-12 text-muted mb-0"><span className="counter" data-from="0" data-to="10">6</span>+</h4>
                            <p className="mb-0">Years Experience</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="featured-box text-center">
                            <i className="fa-regular fa-handshake fa-2xl"></i>
                            <h4 className="text-12 text-muted mb-0"><span className="counter" data-from="0" data-to="250">350</span>+</h4>
                            <p className="mb-0">Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="featured-box2 text-center">
                            <i className="fa-regular fa-heart fa-2xl"></i>
                            <h4 className="text-12 text-muted mb-0"><span className="counter" data-from="0" data-to="650">300</span>+</h4>
                            <p className="mb-0">Projects Done</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About3;