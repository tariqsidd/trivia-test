import React, { Component } from 'react'
import {
    Text,
    View,
    ImageBackground
} from 'react-native'
class Home extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ImageBackground style={{flex: 1}} source={require('../images/backGround.jpg')}>
                <Text>Home</Text>
            </ImageBackground>
        );
    }
}
export default Home;