import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },


    buttonText: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    },
    buttonWrapper: {
        backgroundColor: '#D3D3D3',
        marginBottom: 10,
        width: 300
    },
    form: {
        width: 300,
        borderColor: '#ddd',

    },
    image: {
        margin: 10
    },
    title: {
        fontSize: 40,
        margin: 10,
        textAlign: 'center'
    },
    backgroundImageContainer: {
        flex: 1
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },

    section: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
    },
    buttonsWrapper: {
        marginTop: 60
    },

    text: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        paddingTop: 10,
        paddingBottom: 10,
    },
    button: {
        flex: 1,
        backgroundColor: 'rgb(203, 59, 81)',
        borderRadius: 25,
        marginTop: 5,
        marginBottom: 5,
        width: '100%'
    }
});
