import React, { Component } from 'react';
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export default class index extends Component {
    render() {
        return (
            <>
                <Header />
                {this.props.children}
                <Footer />
            </>
        )
    }
}


