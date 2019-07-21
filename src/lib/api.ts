import ApiUser from "../interfaces/api-user";
import ApiComment from "../interfaces/api-comment";

const users = [
    {
        id: 1,
        name: 'me'
    },
    {
        id: 2,
        name: 'Винни-Пух'
    },
    {
        id: 3,
        name: 'Пятачок'
    },
    {
        id: 4,
        name: 'Кролик'
    }
] as ApiUser[];

const comments = [
    {
        id: 1,
        userId: 2,
        text: 'Недаром солнце в гости к нам Всегда приходит по утрам! Тарам-тарам!',
        date: new Date('2019-07-21 07:45:01'),
        isDeleted: false
    },
    {
        id: 2,
        userId: 3,
        text: 'Тарам-парам!',
        date: new Date('2019-07-21 07:45:02'),
        isDeleted: false
    },
    {
        id: 3,
        userId: 2,
        text: 'Послушай, Пятачок, а не пойти ли нам в гости?',
        date: new Date('2019-07-21 07:45:03'),
        isDeleted: false
    },
    {
        id: 4,
        userId: 3,
        text: 'В гости?',
        date: new Date('2019-07-21 07:45:04'),
        isDeleted: false
    },
    {
        id: 5,
        userId: 2,
        text: 'Да, я вот тут подумал, а не пойти ли нам в гости? По-моему, пора чем-нибудь подкрепиться!',
        date: new Date('2019-07-21 07:45:05'),
        isDeleted: false
    },
    {
        id: 6,
        userId: 3,
        text: 'Давай!  А куда мы пойдем?',
        date: new Date('2019-07-21 07:45:06'),
        isDeleted: false
    },
    {
        id: 7,
        userId: 2,
        text: 'Я думаю, к тебе!',
        date: new Date('2019-07-21 07:45:07'),
        isDeleted: false
    },
    {
        id: 8,
        userId: 3,
        text: 'Пойдем!',
        date: new Date('2019-07-21 07:45:08'),
        isDeleted: false
    },
    {
        id: 9,
        userId: 2,
        text: 'Кто ходит в гости по утрам, Тот поступает мудро! Известно все, тарам-парам На то оно и утро!',
        date: new Date('2019-07-21 07:45:09'),
        isDeleted: false
    },
    {
        id: 10,
        userId: 3,
        text: 'На то оно и утро!',
        date: new Date('2019-07-21 07:45:10'),
        isDeleted: false
    },
    {
        id: 11,
        userId: 2,
        text: 'Послушай, Пятачок, а у тебя есть что-нибудь поесть?  Ну, например, мед?',
        date: new Date('2019-07-21 07:45:11'),
        isDeleted: false
    },
    {
        id: 12,
        userId: 3,
        text: 'Нет, меда у меня нет!',
        date: new Date('2019-07-21 07:45:12'),
        isDeleted: false
    },
    {
        id: 13,
        userId: 2,
        text: 'Нет?',
        date: new Date('2019-07-21 07:45:13'),
        isDeleted: false
    },
    {
        id: 14,
        userId: 2,
        text: 'Знаешь, Пятачок, пожалуй, мы к тебе не пойдем! А то, что же получается?  Я иду в гости, а ты не идешь!',
        date: new Date('2019-07-21 07:45:14'),
        isDeleted: false
    },
    {
        id: 15,
        userId: 3,
        text: 'Ладно!  Тогда пойдем к тебе!',
        date: new Date('2019-07-21 07:45:15'),
        isDeleted: false
    },
    {
        id: 16,
        userId: 2,
        text: 'Да, если гость пришел с утра, Ему спешить не надо! Кричат хозяева «Ура!» Ему ужасно рады!',
        date: new Date('2019-07-21 07:45:16'),
        isDeleted: false
    },
    {
        id: 17,
        userId: 3,
        text: 'Ему ужасно рады!',
        date: new Date('2019-07-21 07:45:17'),
        isDeleted: false
    },
    {
        id: 18,
        userId: 2,
        text: 'Постой, Пятачок! Это что же получается, что теперь я не иду в гости?',
        date: new Date('2019-07-21 07:45:18'),
        isDeleted: false
    },
    {
        id: 19,
        userId: 3,
        text: 'А что же делать?',
        date: new Date('2019-07-21 07:45:19'),
        isDeleted: false
    },
    {
        id: 20,
        userId: 3,
        text: 'Пух, я кажется, придумал! Давай пойдем к кому-нибудь другому!',
        date: new Date('2019-07-21 07:45:20'),
        isDeleted: false
    },
    {
        id: 21,
        userId: 2,
        text: 'Правильно!  А к кому?',
        date: new Date('2019-07-21 07:45:21'),
        isDeleted: false
    },
    {
        id: 22,
        userId: 3,
        text: 'Здесь, кажется, недалеко живет Кролик!',
        date: new Date('2019-07-21 07:45:22'),
        isDeleted: false
    },
    {
        id: 23,
        userId: 2,
        text: 'Правильно!  Молодец, Пятачок! Кролик – это вполне подходящая компания! А подходящая компания, это где нас могут чем-нибудь угостить!',
        date: new Date('2019-07-21 07:45:23'),
        isDeleted: false
    },
    {
        id: 24,
        userId: 2,
        text: 'Эй, есть кто-нибудь дома?',
        date: new Date('2019-07-21 07:45:24'),
        isDeleted: false
    },
    {
        id: 25,
        userId: 4,
        text: 'Нет!  И незачем так орать!?',
        date: new Date('2019-07-21 07:45:25'),
        isDeleted: false
    },
    {
        id: 26,
        userId: 2,
        text: 'Простите, а что совсем никого нет дома?',
        date: new Date('2019-07-21 07:45:26'),
        isDeleted: false
    },
    {
        id: 27,
        userId: 4,
        text: 'Совсем никого!',
        date: new Date('2019-07-21 07:45:27'),
        isDeleted: false
    }
];

const getUsers = async () => {
    return users;
};

const getComments = async () => {
    return comments 
        .filter(comment => !comment.isDeleted) as ApiComment[];
};

const deleteComment = async (commentId: number) => {
    const comment = comments.find(comment => comment.id === commentId);
    if (comment) {
        comment.isDeleted = true;
        return true;
    } else {
        return false;
    }
};

export {
    getUsers,
    getComments,
    deleteComment
};