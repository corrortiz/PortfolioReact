import React from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {openCloseDrawer} from '../../Actions/drawerActions';
import { IndexLink, Link } from "react-router";

class DrawerAO extends React.Component {

    handleOpenCloseDrawer(e) {
        this.props.openCloseDrawer();
    }

    render() {
        return (
            <div>
                <Drawer open={this.props.open.open}>
                    <AppBar title="AO HyS" className="light-blue darken-4"/>
                    <MenuItem onClick={this.handleOpenCloseDrawer.bind(this)}><IndexLink to="/" className="menuA">About</IndexLink></MenuItem>
                    <MenuItem onClick={this.handleOpenCloseDrawer.bind(this)}><Link to="services" className="menuA">Services</Link></MenuItem>
                    <MenuItem onClick={this.handleOpenCloseDrawer.bind(this)}><Link to="portfolio" className="menuA">Portfolio</Link></MenuItem>
                    <MenuItem onClick={this.handleOpenCloseDrawer.bind(this)}><Link to="contact" className="menuA">Contact</Link></MenuItem>
                </Drawer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        open: state.open
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        openCloseDrawer: openCloseDrawer,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerAO)