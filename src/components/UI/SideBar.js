import React from "react";
import {AppRegistry, Image, StatusBar} from "react-native";
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon
} from "native-base";
import SmallLogo from "./SmallLogo";

const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>

                   <SmallLogo/>
                    <List
                        dataArray={routes}
                        contentContainerStyle={{marginTop: 200}}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}
                                >
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
