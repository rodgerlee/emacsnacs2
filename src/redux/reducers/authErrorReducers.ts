const initialState = {};

interface actionInterface {
    type: string,
    payload: any
}

export default function(state = initialState , action:actionInterface) {
    switch (action.type) {
        case 'GET_ERRORS':
            return action.payload;
        default:
            return state;
    }
}