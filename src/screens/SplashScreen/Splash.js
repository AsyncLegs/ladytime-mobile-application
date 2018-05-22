import React, {Component} from 'react';
import {NavigationActions} from "react-navigation";
import {AsyncStorage, Text} from "react-native";
import LoaderOverlay from "../../components/UI/LoaderOverlay";

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {hasToken: false, isLoaded: false}

    }

    componentDidMount() {
        AsyncStorage.getItem('token').then((token) => {
            this.setState({
                hasToken: token !== null,
                isLoaded: true
            });

        })
            .done(this.setState({isLoaded: true}));

        setTimeout(this.checkLoggedInt.bind(this), 1500);
    }

    checkLoggedInt() {
        const routeName = this.state.hasToken ? "HomePage" : "LoginScreen";

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: routeName})
            ]
        });

        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <LoaderOverlay isLoading={true}/>
        )
    }
}