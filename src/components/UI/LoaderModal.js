import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    Modal
} from 'react-native';


class LoaderModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: props.isLoading
        }
    }

    render() {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={this.state.isLoading}>
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator
                            animating={this.state.loading}
                            size="large"
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 300,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default LoaderModal;
