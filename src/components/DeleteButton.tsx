import React, {useContext} from 'react';
import AppContext from '../lib/app-context';
import './DeleteButton.css';

interface DeleteButtonProps {
    isEnabled: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = 
    (props : DeleteButtonProps) => {
    const { dispatch } = useContext(AppContext);
    const onClick = () => {
        if (props.isEnabled) {
            dispatch({
                type: 'SET_SYNCED',
                payload: false
            });        
        }
    };
    return (
        <div className={props.isEnabled ? 'DeleteButtonEnabled' : 
                'DeleteButtonDisabled'
            }
            onClick={onClick}
        >
            {'Delete'}
        </div>
    );
};

export default DeleteButton;