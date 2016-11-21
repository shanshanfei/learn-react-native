//数据源：https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json
//好用的json工具：http://www.runoob.com/jsontool

import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

//电影子组件
import Iterm from './iterm';
//暂时使用本地数据
import data from './movies.json';
export default class MovieList extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.view}>
                <ScrollView style={styles.scroll}>
                    {
                        data.movies.map(function(v, i, arr){
                            return (<Iterm key={i} data={v}/>);
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'cyan'
    },
    scroll: {
        marginTop: 20,
        backgroundColor: '#ccc'
    }
});