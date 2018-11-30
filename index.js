/** @format */
import React, { Component } from 'react'
import {AppRegistry} from 'react-native';
import {View} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

class Main extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <App/>
            </View>
        )
    }
}

AppRegistry.registerComponent(appName, () => Main);
