import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';

export default class MyListView extends Component {
    constructor(){
        super();
        var content = [
            '蓝欧科技JavaScript教程',
            '蓝欧科技PHP教程',
            '蓝欧科技Java教程',
            '蓝欧科技React教程',
            '蓝欧科技ReactNative教程',
            '蓝欧科技C#教程',
            '蓝欧科技Python教程',
            '蓝欧科技Ruby教程',
            '蓝欧科技C++教程',
            '蓝欧科技H5教程',
            '蓝欧科技Andriod教程',
            '蓝欧科技IOS教程',
            '蓝欧科技大数据教程',
            '蓝欧科技UI教程',
            '蓝欧科技产品经理教程',
        ];
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            dataSource: ds.cloneWithRows(content)
        };
    }
    _renderRow(rowData){
        return (
            <View style={styles.itermView}>
                <Text style={styles.title}>{rowData}</Text>
            </View>
        );
    }
    render(){
        return (
            <ListView style={styles.listView} dataSource={this.state.dataSource} renderRow={this._renderRow}/>
        );
    }
}

var styles = StyleSheet.create({
    listView: {
        flex: 1,
        marginTop: 20,
    },
    itermView: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        flex: 1
    },
    title: {
        fontSize: 18,
        lineHeight: 100,
        color: 'cyan'
    }
});