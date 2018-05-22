import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default class ErrorMessage extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Text style={styles.errorMessage}>
                {this.props.children}
            </Text>
        );
    }
}
const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5

    }
});