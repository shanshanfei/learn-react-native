import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Iterm extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.view}>
                <Image style={styles.image} source={{'uri': this.props.data.posters.thumbnail}}/>
                <View style={styles.right_view}>
                    <Text style={styles.title}>{this.props.data.title}</Text>
                    <Text>{this.props.data.year}</Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    view: {
        margin: 10,
        flexDirection: 'row'
    },
    image: {
        width: 53,
        height: 77,
        marginRight: 10,
        backgroundColor: '#eee'
    },
    right_view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10
    }
});