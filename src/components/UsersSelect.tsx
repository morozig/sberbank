import React, {useContext} from 'react';
import ApiUser from '../interfaces/api-user';
import AppContext from '../lib/app-context';

interface UsersSelecProps {
    users: ApiUser[];
    selectedUserId: number;
}

const UsersSelect: React.FC<UsersSelecProps> = 
    (props : UsersSelecProps) => {
    const { dispatch } = useContext(AppContext);
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: 'SELECT_USER',
            payload: +event.target.value
        });        
    };

    return (
        <select id="UsersSelect" onChange={onChange} value={props.selectedUserId}>
            <option value={-1}>
                {'Имя комментатора'}
            </option>
            {props.users.map(user => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </select>
    );
};

export default UsersSelect;