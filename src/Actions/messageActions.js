export const setMessageName = (name) => {
    return {
        type: 'SET_MESSAGE_NAME',
        payload: name,
    }
};

export const setMessageEmail = (email) => {
    return {
        type: 'SET_MESSAGE_EMAIL',
        payload: email,
    }
};

export const setMessageText = (messageText) => {
    return{
        type: 'SET_MESSAGE_MESSAGETEXT',
        payload: messageText
    }
};

export const sendEmail = () => {
    return{
        type: 'SEND_EMAIL',
        payload: ''
    }
};

export const activatedSendButton = () => {
    return{
        type: 'ACTIVATE_SEND',
        payload: ''
    }
};