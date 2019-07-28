import React, {Component} from "react";
import '../../styles/parts/Header.css';
import Nav from "../elements/Nav";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>header</h1>
                <Nav/>
            </div>
        );
    }
}

export default Header;