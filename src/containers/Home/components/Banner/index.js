import React, { Component } from "react";
import "../../../../styles/sass/main.scss";
export default class index extends Component {
  render() {
    return (
      <section className="banner">
        <div className="banner-content-flex">
          <div className="banner-items">
            <i className="fa fa-star" />
          </div>
          <div className="banner-items">
            <i className="fa fa-adjust" />
          </div>
          <div className="banner-items">
            <i className="fa fa-star" />
          </div>
          <div className="banner-items">
            <i className="fa fa-adjust" />
          </div>
          <div className="banner-items">
            <i className="fa fa-star" />
          </div>
        </div>
        <div className="banner-content-flex">
          <div className="banner-items push-1">
            <i className="fa fa-star" />
          </div>
          <div className="banner-items info">
            <h4>Get personalized recommendations</h4>
            <p>Answer a few questions for your top picks</p>
            <button type="button" className="btn btn-primary">
              Get started
            </button>
          </div>
          <div className="banner-items push-2">
            <i className="fa fa-adjust" />
          </div>
        </div>
        <div className="banner-content-flex">
          <div className="banner-items">
            <i className="fa fa-star" />
          </div>
          <div className="banner-items">
            <i className="fa fa-adjust" />
          </div>
          <div className="banner-items">
            <i className="fa fa-star" />
          </div>
          <div className="banner-items">
            <i className="fa fa-adjust" />
          </div>
          <div className="banner-items">
            <i className="fa fa-star" />
          </div>
        </div>
      </section>
    );
  }
}
