import React, {useContext} from 'react';
import AppContext from '../lib/app-context';

interface SearchProps {
    search: string;
}

const Search: React.FC<SearchProps> = 
    (props : SearchProps) => {
    const { dispatch } = useContext(AppContext);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'SET_SEARCH',
            payload: event.target.value
        });        
    };

    return (
        <input
            id="Search"
            onChange={onChange}
            value={props.search}
        />
    );
};

export default Search;