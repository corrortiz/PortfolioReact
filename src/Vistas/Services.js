import React from "react";
import AboutText from '../Componets/LandingPage/AboutText';
import ServicesGrid from '../Componets/Services/ServicesGrid';

export default class Services extends React.Component {
    render() {
        return (
            <div className="container">
                <AboutText
                    title="Services"
                    inerText="We provide the followings services"
                />
                <ServicesGrid/>
            </div>
        );
    }
}