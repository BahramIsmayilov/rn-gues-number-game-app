import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Colors from '../constant/colors';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20
    }
})

export default Header
