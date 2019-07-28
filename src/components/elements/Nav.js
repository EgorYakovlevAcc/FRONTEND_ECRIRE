import React, {Component} from "react";
import Signin from "../forms/Signin";
import Signup from "../forms/Signup";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../../styles/elements/Nav.css';

class Nav extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><a href ="/"> HOME </a></li>
                    <li><a href ="/signin"> SIGN IN </a></li>
                    <li><a href ="/signup"> SIGN UP </a></li>
                </ul>
                <Switch>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/signup" component={Signup}/>
                </Switch>
            </Router>
        );
    }
}

export default Nav;