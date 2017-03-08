import React from 'react';
import ServicesCard from './ServicesCard';
import {connect} from 'react-redux';

class ServicesGrid extends React.Component{
    render() {
        const Lista = this.props.services.slice(0,3).map((objetos, i) => <ServicesCard key={i} name={objetos.name} icon={objetos.icon} inerText={objetos.content}/>);

        const ListaServicios = this.props.services.slice(3,6).map((objetos, i) => <ServicesCard key={i} name={objetos.name} icon={objetos.icon} inerText={objetos.content}/>);

        return(
            <div>
                <div className="row">
                    {ListaServicios}
                </div>
                <div className="row">
                    {Lista}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        services: state.services
    };
}

export default connect(mapStateToProps)(ServicesGrid);