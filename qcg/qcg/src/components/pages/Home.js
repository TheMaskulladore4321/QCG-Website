import React, { useContext, useEffect } from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import instagramIcon from '../images/insta.png';
import linkedinIcon from '../images/linkedin.png';
import mailIcon from '../images/mail.png';
import locationIcon from '../images/location.png';
import './Home.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import VisitCounter from '../inc/VisitCounter'; // Import the VisitCounter component

function Home() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Slider />
      <VisitCounter /> {/* Add the VisitCounter component */}
      <section id="about-us" className="section"> {/* Add ID to the section */}
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Quantum Computing Club, IITR</h3>
              <div className="underline mx-auto"></div>
              <p>
                Quantum Computing Group is a student-run group to inculcate and uplift the culture of quantum computing at IIT Roorkee. Founded in 2020, QCG is currently a part of ACM IIT Roorkee Student Chapter. Our members have varied interests and skills in different domains of quantum computing and attempt to elevate the technological standing of the campus populace in those specialisations. We do so by organising concept discussions, hands-on workshops, open projects and an annual quantum computing hackathon that gives the students exposure to the advancements in the quantum computing sphere.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="what-we-do" className="card-section">
        <div className="container">
          <div className="row card-container">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">What we do</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card custom-card">
                <div className="card-body">
                  <h5 className="card-title">Discussions</h5>
                  <p className="card-text">Engage in insightful discussions on quantum computing topics.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card custom-card">
                <div className="card-body">
                  <h5 className="card-title">Blogs</h5>
                  <p className="card-text">Read and contribute to our quantum computing blog.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card custom-card">
                <div className="card-body">
                  <h5 className="card-title">Workshops</h5>
                  <p className="card-text">Participate in hands-on workshops to learn quantum computing.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card custom-card">
                <div className="card-body">
                  <h5 className="card-title">Qbytes</h5>
                  <p className="card-text">Get quick insights and updates on quantum computing.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card custom-card">
                <div className="card-body">
                  <h5 className="card-title">Projects</h5>
                  <p className="card-text">Work on open projects to apply quantum computing concepts.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card custom-card">
                <div className="card-body">
                  <h5 className="card-title">Hackathons</h5>
                  <p className="card-text">Join our annual quantum computing hackathon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-us" className="contacts-section">
        <div className="container">
          <div className="row contacts-container">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Contact Us</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="contact-item">
              <img src={instagramIcon} alt="Instagram" width="24" height="24" />
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="contact-item">
              <img src={linkedinIcon} alt="LinkedIn" width="24" height="24" />
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
              <img src={mailIcon} alt="Mail" width="24" height="24" />
              <span>qcg[DOT]acm[AT]iitr.ac.in</span>
            </div>
            <div className="contact-item">
              <img src={locationIcon} alt="Location" width="24" height="24" />
              <span>Room No. 109, Students Activity Centre, IIT Roorkee, India</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;