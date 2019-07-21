import React, {useContext} from 'react';
import AppComment from '../interfaces/app-comment';
import AppContext from '../lib/app-context';
import './Comment.css';

interface CommentProps {
    comment: AppComment;
    search: string;
}

const Comment: React.FC<CommentProps> = 
    (props : CommentProps) => {
    const { dispatch } = useContext(AppContext);
    const checked = props.comment.isSelected;
    const parts = props.search.length > 0 ? 
        props.comment.text
            .split(new RegExp(`(${props.search})`, 'gi'))
            .filter(part => part.length > 0) : [props.comment.text];
    const onCheck = () => {
        dispatch({
            type: 'CHECK_COMMENT',
            payload: props.comment.id
        });        
    };
    return (
        <div className='CommentBlock'>
            <div className='CommentTopBar'>
                <div className='CommentTitle'>
                    <div className='CommentUser'>
                        {props.comment.userName}
                    </div>
                    <div className='CommentAdded'>
                        {'added a comment -'}
                    </div>
                    <div className='CommentDate'>
                        {props.comment.date.toLocaleString('ru-RU')}
                    </div>
                </div>
                <input type='checkbox' checked={checked} onChange={onCheck}/>
            </div>
            
            <div className='CommentText'>
                {parts.map((part, i) => (
                    <span key = {i} className={
                        part.toLowerCase() === props.search.toLowerCase() ? 
                            'CommentHighlight' : undefined
                        }
                    >
                        {part}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Comment;