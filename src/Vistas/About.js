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
                    inerText="AO H&S is a programing boutique where our goal is to create unique experiences for our clients,
                    to achieve this we investigate, plan and imagine next to them and together we select the option that is most
                    suitable for implement, always looking for innovation, working to overcome any obstacle that stand between us
                    and the goal, after all we believe that with good music, effort and good communication the sky is the limit."
                />
            </div>
        </div>
        )
    }
}

export default About;
