

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView,
    PixelRatio,
    Platform
} from 'react-native';
import Common from '../Commom/constants';

export default class Home11 extends Component {
    constructor(props) {
        super(props);
        // console.log(props)

    }
    render() {
        let imageHeight = parseInt((Platform.OS === 'ios') ? this.props.module.moduleHeight / 2 : this.props.module.moduleHeight);
        // console.log('imageHeight====>' + imageHeight);
        return (

            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center',flexDirection: 'row', backgroundColor: 'rgb(240, 240, 240)', height: this.props.module.moduleTitle !== '' ? 30 : 0 }}>
                    <View style={{backgroundColor:'red',width:5,height: this.props.module.moduleTitle !== '' ? 20 : 0}}>
                    </View>
                    <Text style={{marginLeft:10,fontSize:15 }}>{this.props.module.moduleTitle}</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.75}
                    // onPress={alert('hello') }
                    style={{ alignItems: 'center' }}
                    >

                    <Image
                        source={{ uri: this.props.module.moduleDetail[0].image }}
                        style={{ width: Common.window.width - 10, height: imageHeight }}
                        />
                </TouchableOpacity>

            </View>

        );
    }
}















