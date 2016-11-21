import React, {Component} from 'react';
import {View, ScrollView, RefreshControl, StyleSheet} from 'react-native';

export default class MyScrollView extends Component {
    constructor(){
        super();
    }
    _onScrollBeginDrag(){
        console.log('开始拖拽');
    }
    _onScrollEndDrag(){
        console.log('结束拖拽');
    }
    _onMomentumScrollBegin(){
        console.log('开始滑动');
    }
    _onMomentumScrollEnd(){
        console.log('结束滑动');
    }
    _onRefresh(){
        console.log('触发刷新');
    }
    render(){
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll} onScrollBeginDrag={this._onScrollBeginDrag} onScrollEndDrag={this._onScrollEndDrag} onMomentumScrollBegin={this._onMomentumScrollBegin} onMomentumScrollEnd={this._onMomentumScrollEnd}
                    refreshControl={
                        <RefreshControl
                            title="正在刷新..."
                            titleColor="blue"
                            tintColor="red"
                            refreshing={false}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <View style={styles.view1}></View>
                    <View style={styles.view2}></View>
                    <View style={styles.view3}></View>
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'cyan',
        flex: 1
    },
    scroll: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#ccc'
    },
    view1: {
        height: 300,
        backgroundColor: 'yellow',
        flex: 1,
        marginTop: 30
    },
    view2: {
        height: 300,
        backgroundColor: 'blue',
        flex: 1,
        marginTop: 30
    },
    view3: {
        height: 300,
        backgroundColor: 'green',
        flex: 1,
        marginTop: 30
    },
});