import React from 'react';
import './Contact2.css';




const Contact2 = () => {
    return (
        <section id="contact" className="section bg-primary">
            <div className="container5">
                <div className="row">
                    <div className="col-lg-q text-center text-lg-start">
                        <h2 className="text-10 fw-600 mb-5">Let's get in touch</h2>
                        <p className="text-5 mb-5">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
                        <h3 className="text-5 fw-600">Living In:</h3>
                        <address className="text-4">
                         11b Olatunji Moore Street by Lagos Nigeria
                        </address>
                        <h3 className="text-5 fw-600">Call:</h3>
                        <p className="text-4">(+234) 8105832126</p>
                        <h3 className="text-5 fw-600">WhatsApp:</h3>
                        <p className="text-4">(+234) 8096519670</p>
                        <ul className="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
                        </ul>
                    </div>
                    <div className="col-lg-6q ms-auto mt-5 mt-lg-0" data-wow-delay="0.3s">
                        <h2 className="text-10">Estimate your Project?</h2>
                        <form className="kk1">
                            <div className="input-bx">
                                <input type="text" required />
                                <span>What Is Your Name?</span>
                            </div>
                            <div className="input-bx">
                                <input type="text" required />
                                <span>Your Email Address</span>
                            </div>
                            <div className="input-bx">
                                <textarea required rows="6"></textarea>
                                <span>How Can I Help You?</span>
                            </div>
                            <button className="button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact2;