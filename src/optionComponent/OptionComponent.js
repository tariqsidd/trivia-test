import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
class OptionComponent extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        let {lockAns, selectedAns} = this.props;
        let option = selectedAns ? require('../images/selectAns.png') : require('../images/box.png');
        return(
                <View style={[{width:'100%'}]}>
                    <ImageBackground style={{height:65, width: '100%'}} source={option}>
                        <TouchableOpacity onPress={lockAns} style={{marginTop:15, height:35, marginHorizontal: 30, flexDirection: 'row'}}>
                            <View>
                                <Text style={{color:'#fff', fontSize:22}}> {this.props.option}. {this.props.ans}</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
        )
    }
}
export default OptionComponent;