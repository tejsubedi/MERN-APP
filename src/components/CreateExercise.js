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
    render() {
        return (
        <nav className="navbar navbar-dark bg-dark navbar-expand">
            <h1>This is a create exercises component</h1>
        </nav>
        );
    }
}