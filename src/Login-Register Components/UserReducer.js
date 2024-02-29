export const SET_USER = "Set User";
export const CLEAR_USER = "Clear User";

export default function userReducer(state, action) {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        
        case CLEAR_USER:
            return null;

        default:
            return state;
    }
}