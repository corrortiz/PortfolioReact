export default function reducer(state={
    open: false
}, action){

    switch (action.type) {
        case "OPEN_DRAWER": {
            return {...state, open: !state.open};
        }
    }

    return state;
}