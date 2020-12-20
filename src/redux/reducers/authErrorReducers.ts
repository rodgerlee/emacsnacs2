const initialState = {};

interface actionInterface {
    type: string,
    payload: any
}

export default function(action:actionInterface, state = initialState) {
    switch (action.type) {
        case 'GET_ERRORS':
            return action.payload;
        default:
            return state;
    }
}