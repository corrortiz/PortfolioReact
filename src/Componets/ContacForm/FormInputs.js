import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
    floatingLabelStyle: {
        color: '#01579b',
    },
    floatingLabelFocusStyle: {
        color: '#01579b',
    },
    underlineStyle: {
        borderColor: '#01579b',
    }
};

const FormInputs = ({changeName, changeEmail, changeText, name, email, text}) => (
    <div className="row">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s12 m6 l6">
                    <TextField
                        hintText=""
                        floatingLabelText="Name"
                        fullWidth={true}
                        multiLine={true}
                        rows={1}
                        rowsMax={1}
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        onChange={(e)=>changeName(e)}
                        value={name}
                    />
                </div>
                <div className="input-field col s12 m6 l6">
                    <TextField
                        hintText=""
                        floatingLabelText="Email"
                        fullWidth={true}
                        multiLine={true}
                        rows={1}
                        rowsMax={1}
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        onChange={(e)=>changeEmail(e)}
                        value={email}
                    />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 m12 l12">
                    <TextField
                        hintText=""
                        floatingLabelText="Message"
                        fullWidth={true}
                        multiLine={true}
                        rows={6}
                        rowsMax={6}
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        onChange={(e)=>changeText(e)}
                        value={text}
                    />
                </div>
            </div>
        </form>
    </div>
);

export default FormInputs;


