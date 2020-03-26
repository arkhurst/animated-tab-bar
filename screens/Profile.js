import React from 'react';
import { View, StatusBar, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProfileScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Text style={{color:'#fff'}}>Hello from ProfileScreen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#161924"
    }
})
export default ProfileScreen;