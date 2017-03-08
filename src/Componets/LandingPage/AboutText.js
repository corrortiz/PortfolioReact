import React from 'react';

const styleMargin = {
    margin: '-6px'
};

const AboutText = ({title, inerText}) =>(
    <div>
        <div className="row">
            <div className="col s12 m12 l12">
                <div className="card z-depth-5">
                    <div className="card-content">
                        <h1 className="light-blue-text text-darken-4" style={styleMargin}>{title}</h1>
                    </div>
                    <div className="card-action">
                        <p className="flow-text">{inerText}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutText;