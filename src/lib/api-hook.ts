import React, { useEffect } from 'react';
import AppState from "../interfaces/app-state";
import AppAction from '../interfaces/app-action';
import * as api from '../lib/api';
import AppComment from '../interfaces/app-comment';

const useApi = (state: AppState, dispatch: React.Dispatch<AppAction>) => {
    useEffect(() => {
        if (state.isSynced) return;
        (async () => {
            try {
                const selectedComments = state.comments.filter(
                    comment => comment.isSelected
                );
                if (selectedComments.length > 0) {
                    for (let comment of selectedComments) {
                        await api.deleteComment(comment.id);
                    }
                }
                const users = await api.getUsers();
                dispatch({
                    type: 'SET_USERS',
                    payload: users
                });
                const apiComments = await api.getComments();
                const appComments = apiComments.map(
                    apiComment => {
                    const {id, userId, text, timestamp} = {...apiComment};
                    const date = new Date(timestamp);
                    const appComment = {id, userId, text, date} as AppComment;
                    const user = users.find(user => user.id === apiComment.userId);
                    appComment.userName = user ? user.name : '';
                    appComment.isSelected = false;
                    return appComment;
                    }
                );
                dispatch({
                    type: 'SET_SYNCED',
                    payload: true
                });
                dispatch({
                    type: 'SET_COMMENTS',
                    payload: appComments
                });
                dispatch({
                    type: 'SET_ERROR',
                    payload: false
                });
            }
            catch (err) {
                console.log(err);
                dispatch({
                    type: 'SET_ERROR',
                    payload: true
                });
                dispatch({
                    type: 'SET_SYNCED',
                    payload: true
                });
            }
        })();
    }, [state.comments, state.isSynced, dispatch]);
};

export default useApi;