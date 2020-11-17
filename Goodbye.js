import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Goodbye extends Component {
    render() {
        return (
            <View>
                <Text style={styles.defaultText}>Goodbye</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    defaultText: {
        fontSize: 30,
        color: 'red'
    }
});

export default Goodbye