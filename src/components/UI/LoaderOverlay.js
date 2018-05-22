import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Spinner from "react-native-loading-spinner-overlay";


class LoaderOverlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: props.isLoading,
            loadingText: props.loadingText
        }
    }

    render() {
        return (
            <View style={styles.loaderOverlay}>
                <Spinner
                    size="large"
                    visible={this.state.isLoading}
                    textContent={this.state.loadingText}
                    textStyle={styles.loadingText}
                    overlayColor='rgba(203, 59, 81, 0.9)'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loaderOverlay: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        color: '#FFF'

    }

});

export default LoaderOverlay;
