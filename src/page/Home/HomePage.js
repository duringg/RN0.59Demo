import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from "mobx-react/native";
@inject(stores => ({
    user: stores.user
}))
@observer
export default class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.props.user.userInfo.username}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});