import React from 'react';
import { connect } from "react-redux";
import {setMessageName, setMessageEmail, setMessageText, sendEmail, activatedSendButton} from '../../Actions/messageActions';
import {bindActionCreators} from 'redux';
import FormInputs from './FormInputs';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Snackbar from 'material-ui/Snackbar';
import SendDialog from './SendDialog';


class FormLayout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.openDialog = this.openDialog.bind(this);
    }

    openDialog = () => {
        this.setState({
            open: true
        });
    };

    closeDialog(){
        this.setState({
            open: false
        });
    }

    handleChangeName(e) {
        const title = e.target.value;
        this.props.setMessageName(title);
        this.props.activatedSendButton()
    }

    handleChangeEmail(e) {
        const title = e.target.value;
        this.props.setMessageEmail(title);
        this.props.activatedSendButton()
    }

    handleChangeText(e) {
        const title = e.target.value;
        this.props.setMessageText(title);
        this.props.activatedSendButton()
    }

    sendMail(e) {
        e.preventDefault();
        this.props.sendEmail();
        this.props.activatedSendButton();
        this.openDialog()
    }

    render(){
        const stylieMarg = {
            marginTop: '20px',
            marginBottom: '20px'
        };

        const message = this.props;

        return(
            <div>
                <div className="col s12">
                    <div className="card z-depth-3">
                        <div className="card-content">
                            <h4 className="light-blue-text text-darken-4">Send a message</h4>
                            <FormInputs
                                changeName={this.handleChangeName.bind(this)}
                                changeEmail={this.handleChangeEmail.bind(this)}
                                changeText={this.handleChangeText.bind(this)}
                                name={message.message.message.name}
                                email={message.message.message.email}
                                text={message.message.message.messageText}
                            />
                            <RaisedButton
                                label="Send message"
                                style={stylieMarg}
                                labelPosition="before"
                                icon={<FontIcon className="material-icons">send</FontIcon>}
                                className="light-blue darken-4"
                                backgroundColor="#01579b"
                                labelColor="#fff"
                                onClick={this.sendMail.bind(this)}
                                disabled={message.message.send}
                            />

                            <SendDialog
                                open={this.state.open}
                                closeDialog={this.closeDialog.bind(this)}
                            />

                            <Snackbar
                                open={this.state.open}
                                message="Your message has been sent."
                                autoHideDuration={4000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        message: state.message,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setMessageName: setMessageName,
        setMessageEmail: setMessageEmail,
        setMessageText: setMessageText,
        sendEmail: sendEmail,
        activatedSendButton: activatedSendButton
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLayout);