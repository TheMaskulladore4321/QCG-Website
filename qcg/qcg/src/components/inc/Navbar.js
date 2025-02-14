import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../images/logo.png';
import logo2 from '../images/logo2.png';
import "../inc/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-dark shadow ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">
                  <img src={scrolled ? logo2 : logo} alt="QCG Logo" className="navbar-logo d-inline-block align-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <ScrollLink to="about-us" smooth={true} duration={500} className="nav-link active text-white" style={{ cursor: 'pointer' }}>
                        About Us
                      </ScrollLink>
                    </li>
                    <li className="nav-item">
                      <ScrollLink to="contact-us" smooth={true} duration={500} className="nav-link active text-white" style={{ cursor: 'pointer' }}>
                        Contact Us
                      </ScrollLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;