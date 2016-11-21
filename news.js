import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class News extends Component {
    constructor(){
        super();
    }
    handlePress(title){
        alert(title);
    }
    render(){
        //只要是数组或者迭代对象内的组件，都要有一个key属性，这个属性不是给开发者用的，而是给react-native做虚拟dom时用的（diff算法）
        //numberOfLines：当文案很长时，指定显示几行，然后多余部分显示点点点...
        //Text组件有onPress事件
        var news = [];
        for(let index in this.props.news){
            let title = this.props.news[index];
            news.push((<Text key={index} numberOfLines={3} style={styles.news} onPress={this.handlePress.bind(this, title)}>{title}</Text>));
        }
        return (
            /* 此处的View不加flex的话  不会占据父元素的剩余全部空间 */
            <View style={styles.flex}>
                <Text style={styles.title}>今日要闻</Text>
                {news}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    title: {
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 15,
        marginLeft: 15
    },
    news: {
        fontSize:15,
        margin: 10
    }
});