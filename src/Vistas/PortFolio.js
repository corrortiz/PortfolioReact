import React from "react";
import AboutText from '../Componets/LandingPage/AboutText';
import CompleteCard from '../Componets/PorfolioSamples/CompleCard';


export default class PortFolio extends React.Component {
    render() {
        return (
            <div className="container">
                <AboutText
                    title="Portfolio"
                    inerText="A small sample of our works"
                />
                <CompleteCard/>
            </div>
        );
    }
}