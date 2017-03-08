import React from 'react';
import {connect} from 'react-redux';
import CardUnion from './CardUnion';

class CompleCard extends React.Component{
    render() {
        const Lista = this.props.projects.map(
            (lenguajes) => <CardUnion    key={lenguajes.id}
                                         imagenes={lenguajes.imgenes}
                                         nombre={lenguajes.nombre}
                                         subtema={lenguajes.subtema}
                                         paragraph={lenguajes.paragraph}
                                         linkLive={lenguajes.linkLive}
                                         lenguajes={lenguajes.lenguajes} />);

        return(
            <div>
                {Lista}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        projects: state.projects
    };
}

export default connect(mapStateToProps)(CompleCard);