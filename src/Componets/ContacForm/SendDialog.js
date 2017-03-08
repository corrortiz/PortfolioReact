import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const SendDialog = ({open, closeDialog}) => {
        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                keyboardFocused={true}
                onClick={(e) => closeDialog()}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Your message has been sent"
                    actions={actions}
                    open={open}
                    modal={false}
                    onRequestClose={(e) => closeDialog()}
                >
                    Soon we will communicate with you and we begin to see the way in which help to grow your presence in the web of your organization.
                </Dialog>
            </div>
        );

};

export default SendDialog;