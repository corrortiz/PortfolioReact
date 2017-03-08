import React from 'react';
import parax from '../../Assets/Images/ImagenFondo.jpg';

export default class Parrallax extends React.Component{
    render() {
        const styleBa ={
            backgroundImage: `url(${parax})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '300px'
        };

        const styPadding={
            paddingTop: '52px'
        };

        return (
            <div  className="parallax-container" style={styleBa}>
                <div className="container" style={styPadding}>
                    <div className="row">
                        <div className="col s12">
                            <h3 className="white-text">Your best option for web development</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <h5 className="white-text"><i>"The sky is the limit"</i></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
