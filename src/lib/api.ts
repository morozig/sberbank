import ApiUser from "../interfaces/api-user";
import ApiComment from "../interfaces/api-comment";

const serverRoot = 'http://localhost:3000/';

const getUsers = async () => {
    const requestString = serverRoot + 'users';
    const response = await fetch(requestString);
    const users = await response.json() as ApiUser[];
    return users;
};

const getComments = async () => {
    const requestString = serverRoot + 'posts';
    const response = await fetch(requestString);
    const comments = await response.json() as ApiComment[];
    return comments;
};

const deleteComment = async (commentId: number) => {
    const requestString = serverRoot + `posts/${commentId}`;
    const response = await fetch(requestString, {
        method: 'DELETE'
    });
    const status = await response.json();
    return !!status;
};

export {
    getUsers,
    getComments,
    deleteComment
};