import React, {Component} from 'react';
import {View, Text, Image, ListView, StyleSheet} from 'react-native';

import data from './movies.json';

export default class Movies extends Component {
    constructor(){
        super();
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(data.movies)
        };
    }
    _renderRow(movie){
        return (
            <View style={styles.row}>
                <Image style={styles.image} source={{uri: movie.posters.thumbnail}}/>
                <View style={styles.rightView}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }
    _renderHeader(){
        return (
            <View>
                <Text style={styles.header}>Movies List</Text>
                <View style={styles.headerBorder}></View>
            </View>
        );
    }
    _renderSeperator(sectionId, rowId){
        //分割线要加key
        return (
            <View style={styles.seperator} key={sectionId+rowId}></View>
        );
    }
    render(){
        return (
            <ListView initialListSize={10} style={styles.container} dataSource={this.state.dataSource} renderRow={this._renderRow} renderHeader={this._renderHeader} renderSeperator={this._renderSeperator}/>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 30,
    },
    headerBorder: {
        borderBottomWidth: 1
    },
    row: {
        flex: 1,
        padding: 5,
        flexDirection: 'row'
    },
    image: {
        height: 77,
        width: 53,
        marginRight: 10,
        backgroundColor: '#ddd'
    },
    rightView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
    },
    year: {
        textAlign: 'center'
    },
    seperator: {
        borderBottomWidth: 1,
        marginTop: 3,
        marginBottom: 3
    }
});
