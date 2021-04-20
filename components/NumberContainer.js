import React from 'react'
import { View,StyleSheet, Text } from 'react-native'
import Colors  from '../constant/colors';

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth:2,
        borderColor: Colors.accent,
        padding: 10,
        marginVertical: 10,
        borderRadius: 10, 
    },
    number : {
        color: Colors.accent,
        fontSize: 23
    }
})

export default NumberContainer
