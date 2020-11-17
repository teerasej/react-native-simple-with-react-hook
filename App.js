import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Goodbye from './Goodbye';
import Hello from './Hello';

export default function App() {

  const [isFirstTime, setFirstTime] = useState(true);
  const [isSignedIn, setSignIn] = useState(false);
  
  let popUpAlert = () => {
    Alert.alert('oops...', 'you do something');
  }

  let signIn = () => {
    setFirstTime(false);
    setSignIn(true);
  }

  let signOut = () => {
    setSignIn(false);
  }

 
    let username = 'พล';
    let website = 'nextflow.in.th'

    let buttonComponent;
    let wordComponent;


    if (isFirstTime) {
      buttonComponent = (
        <Button
          title="ลงชื่อเข้าใช้"
          onPress={signIn}
        />
      )
    } else {
      if (isSignedIn) {
        buttonComponent = (
          <Button
            title="ออกจากระบบ"
            onPress={signOut}
          />
        )
        wordComponent = (
          <Hello name="พล" website="nextflow.in.th" />
        )
      } else {
        buttonComponent = (
          <Button
            title="ลงชื่อเข้าใช้"
            onPress={signIn}
          />
        )
        wordComponent = (
          <Goodbye name="พล" website="nextflow.in.th" />
        )
      }
    }

    return (
      <View style={styles.container}>
        {wordComponent}
        {buttonComponent}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
