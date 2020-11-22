import React, { Component } from 'react'
import "../../../../styles/sass/main.scss";

export default class index extends Component {
    render() {
        return (
            <section className="companies">
  <div className="companies-content">
    <div className="partners-logos">
      <div className="logo-item">
        <img src="./images/booking-logo.svg" alt="booking" width={151} height={26} className="logo" />
      </div>
      <div className="logo-item">
        <img src="./images/volkswagen-logo.svg" alt="volkswagen" width={32} height={32} className="logo" />
      </div>
      <div className="logo-item">
        <img src="./images/mercedes-logo.svg" alt="mercedes" width={148} height={28} className="logo" />
      </div>
      <div className="logo-item">
        <img src="./images/pinterest-logo.svg" alt="pinterest" width={115} height={28} className="logo" />
      </div>
      <div className="logo-item">
        <img src="./images/adidas-logo.svg" alt="adidas" width={47} height={32} className="logo" />
      </div>
      <div className="logo-item">
        <img src="./images/eventbrite-logo.svg" alt="eventbrite" width={115} height={32} className="logo" />
      </div>
    </div>
    <div className="dontknow">
      <div className="dontknow-items active">
        <h4>Become an instructor</h4>
        <p className="dontknow-text">Top instructors from around the world teach millions of students on Udemy.
          We provide the tools and skills to teach what you love.</p>
        <button className="btn btn-danger">Start teaching today</button>
      </div>
      <div className="dontknow-items">
        <h4>Udemy for Business</h4>
        <p className="dontknow-text">Get unlimited access to 4,000+ of Udemy’s top courses for your team.</p>
        <button className="btn btn-danger">Get Udemy for Business</button>
      </div>
    </div>
    <hr />
  </div>
</section>

        )
    }
}
