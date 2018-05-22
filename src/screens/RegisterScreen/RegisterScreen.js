import React from 'react';
import {Alert, View} from "react-native";
import PhoneInput from 'react-native-phone-input'
import AsyncStorageService from '../../services/AsyncStorageService';
import styles from '../../styles/Default';
import SmallLogo from "../../components/UI/SmallLogo";
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import BackgroundImage from "../../components/UI/BackgroundImage";
import {Form, Icon, Input, Item, Text} from "native-base";
import LoaderOverlay from "../../components/UI/LoaderOverlay";
import RoundedButton from "../../components/UI/RoundedButton";
import ErrorMessage from "../../components/UI/Form/ErrorMessage";

import {translate} from "../../locales/i18n";

class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isFormValid: false,
            fields: {
                phone: {
                    value: '',
                    valid: true,
                    error: null
                },
                firstName: {
                    value: '',
                    valid: true,
                    error: null
                },
                lastName: {
                    value: '',
                    valid: true,
                    error: null
                },
                password: {
                    value: '',
                    valid: true,
                    error: null
                }
            },
        }
    }

    register = async () => {
        let response;
        if (this.state.isLoading) {
            return;
        }
        try {
            this.setState({isLoading: true});
            response = await this.props.mutate({
                variables: {
                    phone: this.state.fields.phone.value,
                    firstName: this.state.fields.firstName.value,
                    lastName: this.state.fields.lastName.value,
                    password: this.state.fields.password.value,
                }
            });
            this.setState({isLoading: false});

        } catch (err) {
            this.setState({isLoading: false});
            if (err.toString().includes('A unique constraint')) {
                this.setState(state => ({
                    ...state,
                    fields: {
                        ...state.fields,
                        phone: {
                            ...state.fields.phone,
                            isValid: false,
                            error: translate('register.validation.phone.unique')
                        }
                    }
                }));

            } else {
                Alert.alert(translate('register.error.title'), err.toString());
            }
        }

    };

    onTextChange = (key, value, isValid) => {
        let isFormValid = Object.values(this.state.fields).every(item => item.isValid);
        this.setState(state => ({
            ...state,
            isFormValid: isFormValid,
            fields: {
                ...state.fields,
                [key]: {
                    value: value,
                    isValid: isValid,
                    error: isValid ? null : translate('register.validation.' + key + '.invalid')
                }
            }
        }));
        console.log(this.state);
    };

    render() {
        const {fields: {phone, firstName, lastName, password}} = this.state;

        return (
            <BackgroundImage>
                <SmallLogo/>
                <View style={styles.form}>
                    <Form>
                        <Item>
                            <Icon type='FontAwesome' name='phone'/>
                            <PhoneInput
                                ref={ref => {
                                    this.phone = ref;
                                }}
                                initialCountry={'ua'}
                                editable={true}
                                onChangePhoneNumber={text => this.onTextChange('phone', text, this.phone.isValidNumber())}
                                placeholder={translate('register.phone')}
                                autoCapitalize='none'
                                underlineColorAndroid='transparent'
                                returnKeyType='next'
                                keyboardType='phone-pad'
                                value={phone.value}
                            />
                        </Item>
                        {(this.state.fields.phone.error) &&
                        <ErrorMessage>
                            {this.state.fields.phone.error}
                        </ErrorMessage>
                        }

                        <Item>
                            <Icon type='FontAwesome' name='user-circle'/>
                            <Input
                                editable={true}
                                onChangeText={text => this.onTextChange('firstName', text, text.length > 0)}
                                placeholder={translate('register.firstName')}
                                autoCapitalize="none"
                                underlineColorAndroid="transparent"
                                ref='firstName'
                                returnKeyType='next'
                                value={firstName.value}
                            />
                        </Item>
                        {(this.state.fields.firstName.error) &&
                        <ErrorMessage>
                            {this.state.fields.firstName.error}
                        </ErrorMessage>
                        }
                        <Item>
                            <Icon type='FontAwesome' name='user-circle'/>
                            <Input
                                editable={true}
                                onChangeText={text => this.onTextChange('lastName', text, text.length > 0)}
                                placeholder={translate('register.lastName')}
                                autoCapitalize="none"
                                underlineColorAndroid="transparent"
                                ref='lastName'
                                returnKeyType='next'
                                value={lastName.value}
                            />
                        </Item>
                        {(this.state.fields.lastName.error) &&
                        <ErrorMessage>
                            {this.state.fields.lastName.error}
                        </ErrorMessage>
                        }
                        <Item>
                            <Icon type='FontAwesome' name='key'/>
                            <Input
                                editable={true}
                                onChangeText={text => this.onTextChange('password', text, text.length > 6)}
                                placeholder={translate('register.password')}
                                autoCapitalize="none"
                                underlineColorAndroid="transparent"
                                ref='password'
                                returnKeyType='send'
                                secureTextEntry={true}
                                value={password.value}
                            />
                        </Item>
                        {(this.state.fields.password.error) &&
                        <ErrorMessage>
                            {this.state.fields.password.error}
                        </ErrorMessage>
                        }
                    </Form>

                    <View style={styles.buttonsWrapper}>
                        <LoaderOverlay
                            isLoading={this.state.isLoading}
                            loadingText={translate('register.loadingText')}
                        />


                        <RoundedButton
                            disabled={!this.state.isFormValid}
                            onPress={this.register}
                            title={translate('login.register_button')}
                        />

                        <RoundedButton
                            onPress={() => {
                                console.log('1')
                            }}
                            title={translate('login.login_button')}
                        />
                    </View>
                </View>
            </BackgroundImage>
        );
    }
}

const registerMutation = gql`
    mutation($phone: String!, $firstName: String!,  $lastName: String!, $password: String!) {
        register(phone: $phone, firstName: $firstName, lastName: $lastName, password: $password) {
            token
        }
    }
`;
export default graphql(registerMutation)(RegisterScreen);