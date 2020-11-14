import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Template from '../Home/components/Template';

export default class index extends Component {
    render() {
        return (
            <Template>
                <Route
                    path={this.props.path}
                    component={this.props.component}
                    exact={this.props.exact}
                />
            </Template>
        )
    }
}
