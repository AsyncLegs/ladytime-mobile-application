import {ImageBackground, StyleSheet} from "react-native";
import React, {Component} from 'react';


export default class BackgroundImage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../../assets/images/background.png')}
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'column'
    }
});