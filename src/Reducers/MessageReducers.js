export default function reducer(state={
    message:{
        name: '',
        email: '',
        messageText: ''
    },
    send: true
}, action){
    switch (action.type) {
        case "SET_MESSAGE_NAME": {
            return {...state,
                message: {...state.message, name: action.payload},
            };
        }
        case "SET_MESSAGE_EMAIL": {
            return {...state,
                message: {...state.message, email: action.payload},
            };
        }
        case "SET_MESSAGE_MESSAGETEXT": {
            return {...state,
                message: {...state.message, messageText: action.payload},
            };
        }
        case 'SEND_EMAIL':{
            var unirest = require("unirest");
            var mensaje = `Name: ${state.message.name}, Email: ${state.message.email}, Message: ${state.message.messageText}`;

            var req = unirest("POST", "https://aomailserver.herokuapp.com/users/kiri");

            req.headers({
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded"
            });

            req.form({
                "dequien": "noreplay@aohys.com",
                "toEmail": "a.ortizcrr@gmail.com",
                "sujeto": "A message from AO HyS contact",
                "contenido": mensaje
            });

            req.end(function (res) {
                if (res.error) throw new Error(res.error);

                console.log(res.body);
            });

            return{
                ...state,
                message: {...state.message,
                    email: action.payload,
                    name: action.payload,
                    messageText: action.payload,
                }
            };
        }
        case 'ACTIVATE_SEND':{
            var check = (!!state.message.name.trim() && !!state.message.email.trim() && !!state.message.messageText.trim());
            if (check){
                return {...state, send:false}
            }else {
                return {...state, send:true}
            }
        }
    }

    return state;
}


