import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font1}>网易</Text>
                    <Text style={styles.font2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );

    }
}

var styles = StyleSheet.create({
    flex: {
        marginTop: 30,
        marginBottom: 20,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "red",
        alignItems: 'center',
    },
    font: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    font1: {
        color: "red",
    },
    font2: {
        color: "white",
        backgroundColor: "red"
    }
});