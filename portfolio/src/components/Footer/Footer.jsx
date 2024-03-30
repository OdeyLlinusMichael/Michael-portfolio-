import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer" className="section bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center text-lg-start wow fadeInUp">
                        <p className="mb-2 mb-lg-0">Copyright © 2024 <a className="fw-600" href="#"><span className="red-text">Michael</span></a>. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 wow fadeInUp">
                        <p className="mb-0 text-center text-lg-end">Designed by <a className="fw-600" href="https://www.instagram.com/michael_design21?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==/"><span className="red-text">Michael_Design22</span></a></p>
                    </div>
                </div>
            </div>
            <a href="#" className="back-to-top">
      <svg xmlns="http://www.w3.org/2000/svg" className="material-icons" height="20" width="12.5" viewBox="0 0 320 512">
        <path fill="#000000" d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z"/>
      </svg>
    </a>
        </footer>
    );
};

export default Footer;