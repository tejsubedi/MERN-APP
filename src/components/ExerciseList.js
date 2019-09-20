import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component {

    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        

    }

    render() {
        return (
        <nav className="navbar navbar-dark bg-dark navbar-expand">
        <h1>This is a  exercise List component</h1>
        </nav>
        );
    }
}