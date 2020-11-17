import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Hello = () => {
    return (
        <View>
            <Text style={styles.helloText}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  helloText: {
    fontSize: 30,
    color: 'green'
  }
});

export default Hello