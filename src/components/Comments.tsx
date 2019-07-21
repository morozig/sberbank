import React from 'react';
import AppComment from '../interfaces/app-comment';
import Comment from './Comment';
import './Comments.css';

interface CommentsProps {
    comments: AppComment[];
    selectedUserId: number;
    search: string;
}

const Comments: React.FC<CommentsProps> = 
    (props : CommentsProps) => {
    const comments = props.comments
        .filter(comment => props.selectedUserId === -1 ||
            comment.userId === props.selectedUserId)
        .filter(comment => props.search.length <= 0 ||
            comment.text.toLowerCase().includes(
                props.search.toLowerCase()
        ));
    
    return (
        <div>
            <div className='CommentsTitle'>
                {'Comments:'}
            </div>
            {comments.slice(0, -1).map(comment => (
                <React.Fragment key={comment.id}>
                    <Comment 
                        comment={comment}
                        search={props.search}
                    />
                    <hr/>
                </React.Fragment>
            ))}
            {comments.length > 1 && 
                <Comment 
                    comment={comments[comments.length - 1]}
                    search={props.search}
                />
            }
            
        </div>
    );
};

export default Comments;