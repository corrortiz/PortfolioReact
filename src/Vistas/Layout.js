import React from "react";
import NavBar from '../Componets/Layout/NavBar';
import Foooter from '../Componets/Layout/Foooter';
import DrawerAO from '../Componets/Layout/DrawerAO';

class Layout extends React.Component {
    render(){
        return(
            <div>
                <NavBar/>
                 {this.props.children}
                <Foooter/>
                <DrawerAO/>
            </div>
        );
    }
}

export default Layout