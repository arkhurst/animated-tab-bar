import React from 'react';
import {View, Text, StatusBar, StyleSheet,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const TreatmentScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
              <StatusBar barStyle="light-content" />
            <Text style={{color:'#fff'}}>hello for JournalScreen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#161924"
    }
})
export default TreatmentScreen 
