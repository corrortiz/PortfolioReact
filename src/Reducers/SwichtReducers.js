export default function reducer(state={
    slideIndex:0
}, action){

    switch (action.type) {
        case "CHANGE_INDEX": {
            return {...state, slideIndex: action.payload};
        }
    }

    return state;
}