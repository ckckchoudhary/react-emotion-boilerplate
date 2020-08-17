/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
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
            <div css={LoginStyles.LoginPage}>
                <div css={LoginStyles.loginForm}>
                    {this.state.shouldShowSignup &&
                        <form >
                            <input type="text" placeholder="name" css={LoginStyles.formInput} />
                            <input type="password" placeholder="password" css={LoginStyles.formInput} />
                            <input type="text" placeholder="email address" css={LoginStyles.formInput} />
                            <button css={LoginStyles.formButton}>create</button>
                            <p css={LoginStyles.formMessage}>Already registered? 
                                <a href="#" css={LoginStyles.formMessageLinks} onClick={this.toggleSignup}> Sign In</a>
                            </p>
                        </form>
                    }
                    {!this.state.shouldShowSignup &&
                        <form >
                            <input type="text" placeholder="username" css={LoginStyles.formInput} />
                            <input type="password" placeholder="password" css={LoginStyles.formInput} />
                            <button css={LoginStyles.formButton}>login</button>
                            <p css={LoginStyles.formMessage}>Not registered?
                                <a css={LoginStyles.formMessageLinks} href="#" onClick={this.toggleSignup}> Create an account</a>
                            </p>
                        </form>
                    }
                </div>
            </div>
        );
    }
}
