import React from 'react';
import './projects.css';
import { useState } from "react";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">What i developed</span>

        <div className="services__containerr container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-link services__icon"></i>
                    <h3 className="services__title">Project<br/>
                     Links</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Project Links</h3>
                        <p className="services__modal-description">
                            Here are a few of the projects I've crafted.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-link services__modal-icon"></i>
                                <a href="https://ahmed-abaad.github.io/MMM/" target="_blank" rel="noopener noreferrer" className="services__modal-info">Mombasa Maize Millers</a>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-link services__modal-icon"></i>
                                <a href="https://ahmed-abaad.github.io/Nike-vite-react/" target="_blank" rel="noopener noreferrer" className="services__modal-info">Nike Store</a>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-link services__modal-icon"></i>
                                <a href="https://ahmed-abaad.github.io/Zoo-Slider/" target="_blank" rel="noopener noreferrer" className="services__modal-info">Animal Slider</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}

export default Projects