import React from 'react';
import * as LoginStyles from './Login.style';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldShowSignup: false
        }
        this.toggleSignup = this.toggleSignup.bind(this);
    }
    toggleSignup(e) {
        e.preventDefault();
        this.setState({ shouldShowSignup: !(this.state.shouldShowSignup) });
    }
    render() {
        return (
            <div className={LoginStyles.LoginPage}>
                <div className={LoginStyles.loginForm}>
                    {this.state.shouldShowSignup &&
                        <form >
                            <input type="text" placeholder="name" className={LoginStyles.formInput} />
                            <input type="password" placeholder="password" className={LoginStyles.formInput} />
                            <input type="text" placeholder="email address" className={LoginStyles.formInput} />
                            <button className={LoginStyles.formButton}>create</button>
                            <p className={LoginStyles.formMessage}>Already registered? 
                                <a href="#" className={LoginStyles.formMessageLinks} onClick={this.toggleSignup}> Sign In</a>
                            </p>
                        </form>
                    }
                    {!this.state.shouldShowSignup &&
                        <form >
                            <input type="text" placeholder="username" className={LoginStyles.formInput} />
                            <input type="password" placeholder="password" className={LoginStyles.formInput} />
                            <button className={LoginStyles.formButton}>login</button>
                            <p className={LoginStyles.formMessage}>Not registered?
                                <a className={LoginStyles.formMessageLinks} href="#" onClick={this.toggleSignup}> Create an account</a>
                            </p>
                        </form>
                    }
                </div>
            </div>
        );
    }
}