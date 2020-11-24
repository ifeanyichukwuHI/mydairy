import React, { Component } from 'react';
import './SignIn.css';


class SignIn extends Component {
    constructor(props) {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: ''
        };

    }

    onEmailChange = (event) => {
        this.setState({
            signInEmail: event.target.value,
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            signInPassword: event.target.value,
        })
    }

    onSubmitSignIn = (event) => {
        event.preventDefault();
        // console.log(this.state);
        fetch('http://localhost:3002/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        }).then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.onLoadUser(user);
                }
            })
    }

    render() {
        return (
            <div>
                <h1 className="signin-header center ">SignIn</h1>
                <section className="form-section">
                    <form className="signin" >
                        <input
                            onChange={this.onEmailChange}
                            type="email"
                            placeholder="Email"
                        />

                        <input
                            onChange={this.onPasswordChange}
                            type="password"
                            placeholder="Password..."
                        />

                        <input
                            value="Signin"
                            type="submit"
                            onClick={this.onSubmitSignIn}
                        />

                    </form>

                </section>
                <div className="center">
                    <p className="or b">OR</p>
                    {/* <p style={{ fontFamily: 'Manrope', fontSize: '2em', cursor: 'pointer' }} onClick={() => onRouteChange('register')}>Register</p> */}
                    <div className="signin-register">
                        <a href="/register">Register</a>
                    </div>
                </div>
            </div >
        );
    }
}

export default SignIn;