import React, { Component } from 'react'
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import OptionComponent from "../optionComponent/OptionComponent";
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            goQuiz: false
        }
    }

    render() {
        let {goQuiz} = this.state;
        return (
            <ImageBackground style={{flex: 1, justifyContent: 'center', alignItems: 'center' }} source={require('../images/backGround.jpg')}>
                {goQuiz ?

                        <View style={{ backgroundColor: 'rgba(250,229,184,0.8)', marginHorizontal:40}}>
                            <View style={{paddingVertical: 30, paddingHorizontal: 30}}>
                                <Text style={{textAlign: 'center', fontSize:22}}>
                                    what is your name ?
                                </Text>
                            </View>
                            <View style={{marginVertical:34}}>
                                <OptionComponent option='A' ans='' />
                                <OptionComponent option='B' ans='' />
                                <OptionComponent option='C' ans='' />
                                <OptionComponent option='D' ans='' />
                            </View>
                        </View>
                     :
                    <TouchableOpacity onPress={()=>{this.setState({goQuiz: !goQuiz})}} style={{backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 50, paddingHorizontal: 100, paddingVertical: 10}}>
                    <Text style={{color:'#fff'}}>Start Quiz</Text>
                    </TouchableOpacity>
                }

            </ImageBackground>
        );
    }
}
export default Home;