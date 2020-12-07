import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Template from './components/Template';

export default function Admin({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => {
                if (localStorage.getItem("user")) {
                    return (
                        <Template>
                            <Component {...propsComponent} />
                        </Template>
                    );
                }
                return <Redirect to="/admin" />;
            }}
        />
    )
}
