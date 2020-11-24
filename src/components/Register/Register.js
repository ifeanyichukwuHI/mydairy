import React from 'react';
import './Register.css';


class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            registerEmail: '',
            registerPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({
            registerEmail: event.target.value
        });
    }

    onPasswordChange = (event) => {
        this.setState({
            registerPassword: event.target.value
        });
    }

    onSubmitRegister = (event) => {
        event.preventDefault();
        fetch('http://localhost:3002/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.onLoadUser(user);
                    this.props.onRouteChange('home');
                }

            })
    }

    render() {
        return (
            <div>
                <div className="register-header center f1">Register</div>
                <section className="form-section-register">
                    <form className="register" >
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
                            type="submit"
                            onClick={this.onSubmitRegister}
                            value="Register" />
                    </form>

                </section>

            </div>
        )
    }

}

export default Register;