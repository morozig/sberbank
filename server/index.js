const express = require('express');
const users = require('./users');
const comments = require('./comments');

const app = express();

app.get('/users', (req, res) => {
    return res.json(users);
});

app.get('/posts', (req, res) => {
    const resComments = comments
        .filter(comment => !comment.isDeleted)
        .map(comment => {
            const {id, userId, text, date} = {...comment};
            const timestamp = date.getTime();
            return {id, userId, text, timestamp};
        });
    return res.json(resComments);
});

app.delete('/posts/:commentId', (req, res) => {
    const commentId = +req.params.commentId;
    const comment = comments.find(comment => comment.id === commentId);
    if (comment) {
        comment.isDeleted = true;
        return res.json({status: 'OK'});
    } else {
        return res.status(500).json({error: 'Unknown id'});
    }
});

app.listen(3001);