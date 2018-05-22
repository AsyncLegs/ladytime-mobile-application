import React, {Component} from 'react';

import ApplicationRouter from './components/ApplicationRouter';
import {ApolloProvider} from "react-apollo";
import {ApolloClient, HttpLink, InMemoryCache} from "apollo-boost";

const client = new ApolloClient({
    link: new HttpLink({uri: 'http://localhost:4000'}),
    cache: new InMemoryCache()
});

type Props = {};

export default class App extends Component<Props> {

    constructor() {
        super();
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <ApplicationRouter/>
            </ApolloProvider>
        );

    }
}

