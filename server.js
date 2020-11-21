const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any/1',
            'name': '권동영',
            'birthday': '951215',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/any/2',
            'name': '권우영',
            'birthday': '901101',
            'gender': '남자',
            'job': '아저씨'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any/3',
            'name': '박상욱',
            'birthday': '951121',
            'gender': '남자',
            'job': '취준생'
        },
        {
            'id': 4,
            'image': 'https://placeimg.com/64/64/any/4',
            'name': '윤지훈',
            'birthday': '950707',
            'gender': '여자',
            'job': '대학생'
        },
        {
            'id': 5,
            'image': 'https://placeimg.com/64/64/any/5',
            'name': '이상경',
            'birthday': '951212',
            'gender': '남자',
            'job': '술꾼'
        },
        {
            'id': 6,
            'image': 'https://placeimg.com/64/64/any/6',
            'name': '이우제',
            'birthday': '950101',
            'gender': '남자',
            'job': '사랑꾼'
        },
        {
            'id': 7,
            'image': 'https://placeimg.com/64/64/any/7',
            'name': '정수민',
            'birthday': '950101',
            'gender': '남자',
            'job': '아저씨'
        }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));