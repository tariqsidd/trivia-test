import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Router, Scene } from "react-native-router-flux";
import Home from "./home/Home";

export default class App extends Component<Props> {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene initial key="Splash" component={Home} hideNavBar={true} type="replace" />
                </Scene>
            </Router>
        );
    }
}
