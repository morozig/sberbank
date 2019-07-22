import React, { useReducer } from 'react';
import './App.css';
import AppState from '../interfaces/app-state';
import AppContext from '../lib/app-context';
import { reducer } from '../lib/app-store';
import UsersSelect from './UsersSelect';
import Search from './Search';
import Comments from './Comments';
import DeleteButton from './DeleteButton';
import useApi from '../lib/api-hook';

const initialState = {
  users: [],
  comments: [],
  selectedUserId: -1,
  search: '',
  isSynced: false,
  isError: false
} as AppState;

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useApi(state, dispatch);
  const deleteEnabled = state.isSynced &&
    state.comments.some(comment => comment.isSelected);

  return (
    <AppContext.Provider value={({dispatch})}>
      <div className="App">
        {state.isError && 
          <div className="AppErorrsBar">
            {'Server error, please try again later'}
          </div>
        }
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
