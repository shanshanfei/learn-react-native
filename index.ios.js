
/*
 //新闻列表实现

import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';

import Header from "./header";
import News from "./news";

class ListNews extends Component {
    constructor(){
        super();
    }
    render(){
        let news = [
            '1、今日要闻哈哈哈哈哈',
            '2、今日要闻哈哈哈哈哈',
            '3、今日要闻哈哈哈哈哈今日要闻哈哈哈哈哈要闻哈哈哈哈哈要闻哈哈哈哈哈要闻哈哈哈哈哈今日要闻哈哈哈哈哈今日要闻哈哈哈哈哈今日要闻哈哈哈哈哈今日要闻哈哈哈哈哈今日要闻哈哈哈哈哈今日要闻哈哈哈哈哈露露',
            '4、今日要闻哈哈哈哈哈',
            '5、今日要闻哈哈哈哈哈',
            '6、今日要闻哈哈哈哈哈',
            '7、今日要闻哈哈哈哈哈今日要闻哈哈哈哈哈今日要闻哈哈哈哈哈今日要闻哈哈哈哈哈今日要闻哈哈哈哈哈琪琪',
        ];
        return (
            <View style={styles.flex}>
                <Header />
                <News news={news}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    }
});

AppRegistry.registerComponent('initReactNative', () => ListNews);
*/







/*
//实现Touchable*组件

import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, StyleSheet} from 'react-native';

class TouchableBtn extends Component {
    constructor(){
        super();
        this.state = {
            text: ''
        };
    }
    handlePress(e){
        //alert('搜索按钮被点击了');
        if(this.state.text){
            alert(this.state.text);
        }
    }
    render(){
        return (
            <View style={styles.wrap}>
                <View style={styles.container}>
                    <View style={styles.flex}>
                        <TextInput onChangeText={(text) => this.setState({text})} style={styles.input} placeholder="TouchableOpacity"></TextInput>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={this.handlePress.bind(this)}>
                        <Text style={styles.search}>搜索</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <View style={styles.flex}>
                        <TextInput style={styles.input} placeholder="TouchableHighlight"></TextInput>
                    </View>
                    <TouchableHighlight style={styles.btn} activeOpacity={0.1} underlayColor="blue">
                        <Text style={styles.search}>搜索</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.container}>
                    <View style={styles.flex}>
                        <TextInput style={styles.input} placeholder="TouchableWithoutFeedback"></TextInput>
                    </View>
                    <TouchableWithoutFeedback>
                        <View style={styles.btn}>
                            <Text style={styles.search}>搜索</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('initReactNative', () => TouchableBtn);

var styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    container: {
        flexDirection: 'row',
        marginTop: 50
    },
    flex: {
        flex: 1,
    },
    input: {
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 4,
        height: 50,
        padding: 5,
        backgroundColor: 'white'
    },
    btn: {
        width: 55,
        height: 50,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23beff',
    },
    search: {
        color: "white",
    }
});
*/





/*

//展示2张图片：1张网络图片，1张本地图片

import React, {Component} from 'react';
import {AppRegistry, View, Text, Image, StyleSheet} from 'react-native';


class ImageLists extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.flex}>
                <View style={styles.bg1}>
                    <Image style={styles.image} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}></Image>
                </View>
                <View style={styles.bg2}>
                    <Image source={require("image!react_white_logo")}></Image>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 10,
        alignItems: 'center'
    },
    bg1: {
        marginTop: 30,
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
    },
    bg2: {
        marginTop: 30,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
    },
    image: {
        width: 100,
        height: 100
    }
});

AppRegistry.registerComponent('initReactNative', () => ImageLists);
*/






/*
//ScrollView的2个练习

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

//1、导入ScrollView
//import MyScrollView from './myScrollView';

//2、电影列表
import MyScrollView from './movieList';

AppRegistry.registerComponent('initReactNative', () => MyScrollView);
*/








 //ListView的2个练习

 import React, {Component} from 'react';
 import {AppRegistry} from 'react-native';

 //1、ListView基础练习
 //import MyListView from './myListView';

 //2、电影列表
import MyListView from './moviesList';

 AppRegistry.registerComponent('initReactNative', () => MyListView);









