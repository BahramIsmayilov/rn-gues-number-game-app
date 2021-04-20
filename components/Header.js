import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Colors from '../constant/colors';
import DefaultStyle from '../constant/default-style';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={{...styles.headerTitle, ...DefaultStyle.titleLarge}}>{props.title}</Text>
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
        // fontFamily: 'open-sans-bold'
    }
})

export default Header
