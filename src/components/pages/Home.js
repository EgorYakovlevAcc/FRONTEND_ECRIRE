import React, {Component} from "react";
import Header from "../parts/Header";
import Content from "../parts/Content";
import Footer from "../parts/Footer";
import '../../styles/pages/Home.css';




class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header/>
                <Content/>
                <Footer/>
            </div>

        );
    }
}

export default Home;