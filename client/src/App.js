import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    }
})

const customers = [
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
]
class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(App);