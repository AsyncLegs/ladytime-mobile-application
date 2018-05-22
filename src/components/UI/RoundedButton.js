import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class RoundedButton extends PureComponent {

    render() {
        const {onPress, title, disabled} = this.props;
        return (
            <View style={styles.sectionButton}>
                <TouchableOpacity
                    style={disabled ? styles.roundedButtonDisabled : styles.roundedButton}
                    onPress={onPress}
                    disabled={disabled}
                >
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    roundedButton: {
        flex: 1,
        backgroundColor: 'rgb(203, 59, 81)',
        borderRadius: 25,
        marginTop: 5,
        marginBottom: 5,
        width: '100%'
    },
    roundedButtonDisabled: {
        flex: 1,
        backgroundColor: 'lightgray',
        borderRadius: 25,
        marginTop: 5,
        marginBottom: 5,
        width: '100%'
    },
    sectionButton: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        paddingTop: 10,
        paddingBottom: 10,
    },
});