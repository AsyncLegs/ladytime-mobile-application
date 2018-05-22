import React from 'react';
import {NativeRouter, Route, Switch, Link} from 'react-router-native'

import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";


export default class ApplicationRouter extends React.PureComponent {
    render() {
        return (
            <NativeRouter>
                <Switch>
                    <Route exact path="/" component={RegisterScreen}/>
                    <Route exact path="/register" component={RegisterScreen}/>
                    <Route exact path="/login" component={LoginScreen}/>
                </Switch>
            </NativeRouter>
        );
    }

}