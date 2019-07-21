import React from 'react';
import AppAction from '../interfaces/app-action';

interface AppContext {
    dispatch: React.Dispatch<AppAction>;
}

const AppContext = React.createContext({} as AppContext);

export default AppContext;