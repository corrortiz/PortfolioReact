import React from "react";
import Parrallax from '../Componets/LandingPage/Parrallax';
import AboutText from '../Componets/LandingPage/AboutText';

class About extends React.Component {
    render(){
        return(
        <div>
            <Parrallax/>
            <div className="container">
                <AboutText
                    title="About"
                    inerText="In AO HyS our goal is to create unique experiences for the users of our customers, to achieve this we investigate, plan and imagine beside our customers and then we select the option that is most suitable for implement, always looking for innovation and overcoming any obstacles that stand between us and the goal, after all we believe that with good music, effort and good communication the sky is the limit, by accomplish this our customers not only receive an application, they receive a global branch of his organization"
                />
            </div>
        </div>
        )
    }
}

export default About;
