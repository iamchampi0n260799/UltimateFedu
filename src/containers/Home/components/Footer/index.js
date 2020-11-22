import React from 'react';
import "../../../../styles/sass/main.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
    return (
        <footer>
  <div className="row first-footer">
    <div className="footer-links col-9">
      <ul>
        <li><a className="bold">Cybersoft for Business</a></li>
        <li><a className="bold">Teach on Cybersoft</a></li>
        <li><a>Cybersoft app</a></li>
        <li><a>About us</a></li>
        <li><a>Contact us</a></li>
        <li><a>Career</a></li>
        <li><a>Blog</a></li>
        <li><a>Help and Support</a></li>
        <li><a>Affiliate</a></li>
        <li><a>Site map</a></li>
        <li><a>Featured courses</a></li>
      </ul>
    </div>
    <div className="language col-3">
      <button type="button" className="language-btn"><i className="fa fa-globe" /> Select language <i className="fa fa-arrow-up" /></button>
    </div>
  </div>
  <div className="row second-footer">
    <div className="col-6 second-footer-left">
      <span>Copyright © 2020 Cybersoft, Inc.</span>
    </div>
    <div className="col-6 second-footer-right">
      <ul>
        <li><a>Terms</a></li>
        <li><a>Privacy Policy and Cookie Policy</a></li>
      </ul>
    </div>
  </div>
  <div className="headerBorderTop" />
</footer>

    )
}

