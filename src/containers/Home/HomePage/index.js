import React, { Component } from "react";
import CourseCarousel from "../components/CourseCarousel";
import Reasons from "../components/Reasons";
import Numbers from "../components/Numbers";
import Feedback from "../components/Feedback";
import Banner from "../components/Banner";
import Companies from "../components/Companies";
import CoursesList from "../../../components/CoursesList";

export default class HomePage extends Component {

  render() {
    return (
      <>
        <CourseCarousel />
        <Numbers />
        <Reasons />
        <CoursesList />
        <Banner />
        <Feedback />
        <Companies />
      </>
    );
  }
}