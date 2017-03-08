import React from 'react';

const ServicesCard = ({name, inerText, icon}) =>(
    <div className="col s12 m4">
        <div className="card z-depth-3">
            <div className="card-content">
                <span dangerouslySetInnerHTML={{ __html: icon }} />
                <h4 className="text-darken-4 light-blue-text">{name}</h4>
                <p className="flow-text">{inerText}</p>
            </div>
        </div>
    </div>
); 

export default ServicesCard;