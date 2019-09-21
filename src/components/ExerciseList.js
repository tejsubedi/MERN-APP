import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component {

    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        this.state ={
            exercises: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/exercises")
            .then(response => {
                this.setState({
                    exercises: response.data
                })
                
            })
            .catch(err => {
                console.log("Error " + err);
            })
    };

    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data));
            this.setState({
                exercises: this.state.exercises.filter(el => el._id !== id)
            })
            
    }

    render() {
        return (
        <nav className="navbar navbar-dark bg-dark navbar-expand">
        <h1>This is a  exercise List component</h1>
        </nav>
        );
    }
}