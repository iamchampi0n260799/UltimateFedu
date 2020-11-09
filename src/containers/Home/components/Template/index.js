import React, { Component } from 'react'
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import CourseCarousel from "../../components/CourseCarousel"



export default class index extends Component {
    render() {
        return (
            <>
                <Header />
                <CourseCarousel />
                <section>{this.props.children}</section>
                <Footer />
            </>
        )
    }
}
