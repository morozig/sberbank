import AppState from "../interfaces/app-state";
import AppAction from "../interfaces/app-action";
import ApiUser from "../interfaces/api-user";
import AppComment from "../interfaces/app-comment";

export const reducer = (state: AppState, action: AppAction) => {
    switch (action.type) {
        case 'SET_USERS': {
            const newState = {...state};
            newState.users = action.payload as ApiUser[];
            return newState as AppState;
        }
        case 'SET_COMMENTS': {
            const newState = {...state};
            newState.comments = action.payload as AppComment[];
            return newState as AppState;
        }
        case 'SELECT_USER': {
            const newState = {...state};
            newState.selectedUserId = action.payload as number;
            return newState as AppState;
        }
        case 'SET_SEARCH': {
            const newState = {...state};
            newState.search = action.payload as string;
            return newState as AppState;
        }
        case 'CHECK_COMMENT': {
            const newState = {...state};
            const comment = newState.comments.find(comment => 
                comment.id === action.payload
            )
            if (comment) {
                comment.isSelected = !comment.isSelected;
            }
            return newState as AppState;
        }
        case 'SET_SYNCED': {
            const newState = {...state};
            newState.isSynced = action.payload as boolean;
            return newState as AppState;
        }
        case 'SET_ERROR': {
            const newState = {...state};
            newState.isError = action.payload as boolean;
            return newState as AppState;
        }
        default:
            throw new Error('unknown action!');
    }
};