import React from 'react';
import { IndexLink, Link } from "react-router";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {openCloseDrawer} from '../../Actions/drawerActions';

class AppBarExampleIcon extends React.Component{
    handleOpenCloseDrawer() {
        this.props.openCloseDrawer();
    }

    render(){
        const styleCursor={
            cursor: 'pointer'
        };

        return(
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper light-blue darken-4">
                        <div className="container">
                            <a onClick={this.handleOpenCloseDrawer.bind(this)} className="brand-logo" style={styleCursor}>AO HyS</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a><IndexLink to="/" className="menuA">About</IndexLink></a></li>
                                <li><a><Link to="services" className="menuA">Services</Link></a></li>
                                <li><a><Link to="portfolio" className="menuA">Portfolio</Link></a></li>
                                <li><a><Link to="contact" className="menuA">Contact</Link></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        openCloseDrawer: openCloseDrawer,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AppBarExampleIcon);