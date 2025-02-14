import React from "react";
import slider1 from "../images/landing_cover_latest.jpg";
import slider2 from "../images/cool.png";
import slider3 from "../images/cool2.png";
import "../inc/Slider.css";

function Slider() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="blacc">
                            <h5>Sometimes we sit on lawns</h5>
                            <p>(Ignore the guy who didn't get a shirt)</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider2} className="d-block w-100" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="blacc">
                            <h5>Quantum Computa</h5>
                            <p>That do be a quantum computa</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="blacc">
                            <h5>Woman computing at computer</h5>
                            <p>She's Indian you racist, this is not a stock image (jk)</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;