import React, {Component} from "react";

class Signin extends Component {
    render() {
        return (
            <form>
                <label>
                    username:
                    <input type="text"/>
                </label>
                <br/>
                <label>
                    password:
                    <input type="password"/>
                </label>
                <input type= "submit" value="sign in"/>
            </form>
        );
    }
}

export default Signin;