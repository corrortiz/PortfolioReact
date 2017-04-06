import React from 'react';
import ImageTab from './ImageTab';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const CardUnion = ({imagenes, linkLive, nombre, subtema, paragraph, lenguajes}) => {
    const Lista = lenguajes.map((lenguajes, i) => <ImageTab key={i} nombreAdento={lenguajes}/>);

    const stylieMarg = {
        marginTop: '20px',
        marginBottom: '20px'
    };
    const stylieFontPeso = {fontWeight: '200'};

    const stylesWrapper = {
        display: 'flex',
        flexWrap: 'wrap',
    };

    return(
        <div className="row">
            <div className="col s12 m12 l12">
                <div className="card z-depth-3">
                    <div className="card-content">
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <h3 className="text-darken-4 light-blue-text">{nombre}</h3>
                            </div>
                            <div className="col s12 m12 l12">
                                <h5 style={stylieFontPeso}> {subtema}</h5>
                            </div>
                            <div className="col s12 m12 l12 center-align">
                                <img src={imagenes} className="responsive-img" alt={nombre}/>
                            </div>
                            <div className="col s12 m12 l12">
                                <RaisedButton
                                    href={linkLive}
                                    target="_blank"
                                    label="Live Page"
                                    fullWidth={true}
                                    style={stylieMarg}
                                    icon={<FontIcon className="material-icons">important_devices</FontIcon>}
                                    className="light-blue darken-4"
                                    backgroundColor="#01579b"
                                    labelColor="#fff"
                                />
                            </div>
                            <div className="col s12 m12 l12">
                                <p className="flow-text">{paragraph}</p>
                            </div>
                            <div className="col s12 m12 l12" style={stylieMarg}>
                                <div style={stylesWrapper}>
                                    {Lista}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardUnion;