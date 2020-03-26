import React, {  useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { FontAwesome5, Feather} from '@expo/vector-icons';

const AddButton = () => {
    const [buttonSize, setButtonSize] = useState(new Animated.Value(1));
    const[ mode, setMode] = useState(new Animated.Value(0))
    
    useEffect(() => {
        handlePress()
    })
    const handlePress = () => {
       Animated.sequence([
           Animated.timing(buttonSize,{
               toValue:0.95,
               duration:200
           }),
           Animated.timing(buttonSize,{
               toValue:1
           }),
           Animated.timing(mode,{
               toValue: mode._value === 0 ? 1:0
           }) 
       ]).start()
    }

    const sizeStyle = {
        transform:[{scale:buttonSize}]
    }

   const rotation = mode.interpolate({
       inputRange:[0,1],
       outputRange:["0deg", "45deg"]
})
    const thermometerX = mode.interpolate({
        inputRange:[0,1],
        outputRange:[-24,-100]
    })

    const thermometerY = mode.interpolate({
        inputRange:[0,1],
        outputRange:[-50,-100]
    })

    const timeX = mode.interpolate({
        inputRange:[0,1],
        outputRange:[-24,-24]
    })

    const timeY = mode.interpolate({
        inputRange:[0,1],
        outputRange:[-50,-150]
    })

    
    const pulseX = mode.interpolate({
        inputRange:[0,1],
        outputRange:[-24,50]
    })

    const pulseY = mode.interpolate({
        inputRange:[0,1],
        outputRange:[-50,-100]
    })

    return(
        <View style={{position:'absolute', alignItems:'center'}}>
            <Animated.View style={{position:'absolute', left:thermometerX, top:thermometerY}}>
                <View style={styles.secondaryBtn}>
                  <Feather name="thermometer" size={24} color="#fff" />
                </View>
            </Animated.View>
            <Animated.View style={{position:'absolute', left:timeX, top:timeY}}>
                <View style={styles.secondaryBtn}>
                  <Feather name="clock" size={24} color="#fff" />
                </View>
            </Animated.View>
            <Animated.View style={{position:'absolute', left:pulseX, top:pulseY}}>
                <View style={styles.secondaryBtn}>
                  <Feather name="activity" size={24} color="#fff" />
                </View>
            </Animated.View>
            <Animated.View style={[styles.button,sizeStyle]}>
                <TouchableHighlight onPress={ handlePress()} underlayColor="#7f58ff">
                    <Animated.View style={{transform: [{rotate: rotation}]}}>
                       <FontAwesome5 name="plus" size={24} color="#fff" />
                    </Animated.View> 
                </TouchableHighlight>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
      backgroundColor:"#7f58ff",
      alignItems:'center',
      justifyContent:'center',
      width:72,
      height:72,
      borderRadius:36,
      position:"absolute",
      top:-60,
      shadowColor:"#7f58ff",
      shadowRadius:5,
      shadowOffset:{height:10},
      shadowOpacity:0.3,
      borderWidth:3,
      borderColor:'#fff'
    },
    secondaryBtn:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        height:48,
        width:48,
        borderRadius:24,
        backgroundColor:"#7f58ff"
    }
})
export default AddButton;