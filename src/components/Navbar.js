import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-dark bg-dark navbar-expand">
            <Link to="'/" className="navbar-brand">ExerciseTracker</Link>
            <div className="collapse navbar-collapse">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Exercises</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Exercise</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/user" className="nav-link ">Create User</Link>
                </li>
            </div>
        </nav>
        
        );
    }
};

