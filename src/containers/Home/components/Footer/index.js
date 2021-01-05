import React from 'react';
import "../../../../styles/sass/main.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer_content container">
        <div className="footer__first">
          <div className="row">
            <div className="col-9 footer-links">
              <ul>
                <li><a href="#" className="bold">Cybersoft for Business</a></li>
                <li><a href="#" className="bold">Teach on Cybersoft</a></li>
                <li><a href="#">Cybersoft app</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help and Support</a></li>
                <li><a href="#">Affiliate</a></li>
                <li><a href="#">Site map</a></li>
                <li><a href="#">Featured courses</a></li>
              </ul>
            </div>
            <div className="col-3 language">
              <button type="button" className="language-btn">
                <i className="fa fa-globe" />
              Select language
              <i className="fa fa-arrow-up" />
              </button>
            </div>
          </div>
        </div>
        <div className="footer__second">
          <div className="row">
            <div className="col-6 second-footer-left">
              <span>Copyright © 2020 Cybersoft, Inc.</span>
            </div>
            <div className="col-6 second-footer-right">
              <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy Policy and Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

