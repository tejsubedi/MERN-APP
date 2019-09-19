import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    };
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    };
    onChangeDate(date) {
        this.setState({
            date: date
        })
    };

    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);
    }
    render() {
        return (
        <nav className="navbar navbar-dark bg-dark navbar-expand">
            <h1>This is a create exercises component</h1>
        </nav>
        );
    }
}