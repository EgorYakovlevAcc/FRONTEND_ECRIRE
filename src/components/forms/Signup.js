import React, {Component} from "react";

class Signup extends Component {
    render() {
        return (
            <form>
                <label>
                    username:
                    <input type="text"/>
                </label>
                <br/>
                <label>
                    email:
                    <input type="email"/>
                </label>
                <br/>
                <label>
                    password:
                    <input type="password"/>
                </label>
                <br/>
                <label>
                    confirm password:
                    <input type="password"/>
                </label>
                <input type= "submit" value="sign up"/>
            </form>
        );
    }
}

export default Signup;