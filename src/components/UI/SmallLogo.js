import React, {Component} from 'react';
import {Image, StyleSheet}
    from 'react-native';

export default class SmallLogo extends Component {

    render() {
        return (
            <Image source={require('../../../assets/images/logo-small.png')} style={styles.logo}/>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        margin: 20
    },
});