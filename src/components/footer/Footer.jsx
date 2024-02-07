import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Trench Kid</h1>
        
        <ul className="footer__list">
          <li>
              <a href="#about" className="footer__link">About</a>
          </li>

          <li>
              <a href="#services" className="footer__link">Services</a>
          </li>

          <li>
              <a href="#projects" className="footer__link">Projects</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/ahmed__abaad/" className="footer__social-link" target="_black">
          <i class="uil uil-instagram"></i>
          </a>

          <a href="https://www.youtube.com/@AhmedAbaad001" className="footer__social-link" target="_black">
          <i class="uil uil-youtube"></i>
          </a>

          <a href="https://github.com/ahmed-abaad" className="footer__social-link" target="_black">
          <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Ahmed Abaad. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer