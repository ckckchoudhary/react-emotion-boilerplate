import React, { Component } from 'react';
import * as HomeScreenStyles from './HomeScreen.style';
import LoginComponent from './../../components/Login/Login.component';
import LoginForm from './../../components/Login/Login.component';

export default class HomeScreen extends Component {
    render() {
        return (<div className={HomeScreenStyles.HomePageContainer}>
            <LoginComponent />
        </div>)
    }
}