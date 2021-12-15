import {
    RECEIVE_USER,
    RECEIVE_USER_ERROR
} from "../../actions/user_actions";

export default function usersErrorsReducer(prevState = [], action) {
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_USER_ERROR:
            return [action.error];
        case RECEIVE_USER:
            return [];
        default:
            return prevState;
    }
};