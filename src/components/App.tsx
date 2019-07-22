import React, { useEffect, useReducer } from 'react';
import './App.css';
import * as api from '../lib/api';
import AppState from '../interfaces/app-state';
import AppContext from '../lib/app-context';
import { reducer } from '../lib/app-store';
import AppComment from '../interfaces/app-comment';
import UsersSelect from './UsersSelect';
import Search from './Search';
import Comments from './Comments';
import DeleteButton from './DeleteButton';

const initialState = {
  users: [],
  comments: [],
  selectedUserId: -1,
  search: '',
  isSynced: false
} as AppState;

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.isSynced) return;
    (async () => {
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
          const appComment = {...apiComment} as AppComment;
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
    })();
  }, [state.comments, state.isSynced]);

  const deleteEnabled = state.comments.some(comment => comment.isSelected);

  return (
    <AppContext.Provider value={({dispatch})}>
      <div className="App">
        <div className="AppTopBar">
          <UsersSelect 
            users={state.users}
            selectedUserId={state.selectedUserId}
          />
          <Search search = {state.search}/>
        </div>
        <Comments 
          comments={state.comments}
          selectedUserId={state.selectedUserId}
          search={state.search}
        />
        <div className="AppButtonsBar">
          <DeleteButton isEnabled={deleteEnabled}/>
        </div>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
