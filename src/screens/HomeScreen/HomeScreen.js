import React, {Component} from "react";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right
} from "native-base";

export default class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => console.log('open')}
                        >
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>ProLady Club</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>Chat App to talk some awesome people!</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button
                        full
                        rounded
                        dark
                        style={{marginTop: 10}}
                        onPress={() => console.log('open')}
                    >
                        <Text>Chat With People</Text>
                    </Button>
                    <Button
                        full
                        rounded
                        primary
                        style={{marginTop: 10}}
                        onPress={() => console.log('open')}
                    >
                        <Text>Goto Profiles</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}