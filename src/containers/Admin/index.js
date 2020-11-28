import React from 'react';
import { Route, Redirect } from "react-router-dom";
import TemplateAdmin from './components/Template';

export default function Admin({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => {
                if (localStorage.getItem("user")) {
                    return (
                        <TemplateAdmin>
                            <Component {...propsComponent} />
                        </TemplateAdmin>
                    );
                }
                return <Redirect to="/admin" />;
            }}
        />
    )
}
