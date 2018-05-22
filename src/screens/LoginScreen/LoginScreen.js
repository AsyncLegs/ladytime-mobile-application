import React from "react";
import {
    View,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
    Image,
} from "react-native";

import {Container, Header, Content, Form, Item, Input, Icon, Button} from 'native-base';


import LoaderOverlay from '../../components/UI/LoaderOverlay'
import BackgroundImage from "../../components/UI/BackgroundImage";
import styles from '../../styles/Default';


import {BACKEND_API_URL} from 'react-native-dotenv'
import {translate} from '../../locales/i18n';
import SmallLogo from "../../components/UI/SmallLogo";
import RoundedButton from "../../components/UI/RoundedButton";

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            submitting: false,
            errors: {},
            values: {},
            phone: null,
            firstName: null,
            lastName: null,
            password: null
        }
    }


    userLogin() {
        if (this.state.email || !this.state.password) {
            this.setState({loading: true});
            fetch(BACKEND_API_URL + '/api/v1/token/obtain/', {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                })
            })
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData.token) {
                        this.onValueChanged('token', responseData.token).done();
                        this.setState({loading: false});
                    } else {
                        Alert.alert(strings('login.failed'));
                        this.setState({loading: false});
                    }
                })
                .catch((error) => {
                    this.setState({loading: false});
                    Alert.alert(error);
                })
                .done();
        }
    }

    render() {
        return (
            <BackgroundImage>
                <SmallLogo/>
                <View style={styles.form}>
                    <Form>
                        <Item>
                            <Icon active name='contact'/>
                            <Input
                                editable={true}
                                onChangeText={(email) => this.setState({email})}
                                placeholder={translate('login.email')}
                                autoCapitalize="none"
                                underlineColorAndroid="transparent"
                                ref='email'
                                returnKeyType='next'
                                value={this.state.email}
                            />
                        </Item>
                        <LoaderOverlay isLoading={this.state.loading}/>
                        <Item>
                            <Icon active name='key'/>
                            <Input
                                editable={true}
                                onChangeText={(password) => this.setState({password})}
                                placeholder={translate('login.password')}
                                autoCapitalize="none"
                                underlineColorAndroid="transparent"
                                ref='password'
                                returnKeyType='next'
                                secureTextEntry={true}
                                value={this.state.password}
                            />
                        </Item>
                    </Form>

                    <View style={styles.buttonsWrapper}>
                        <RoundedButton
                            // onPress={this.userLogin}
                            title={translate('login.login_button')}
                        />

                        <RoundedButton
                            // onPress={this.props.navigation.navigate('RegisterScreen')}
                            title={translate('login.register_button')}
                        />
                    </View>
                </View>
            </BackgroundImage>
    );
    }
    }
