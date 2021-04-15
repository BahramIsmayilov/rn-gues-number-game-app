import React from 'react'
import { View , StyleSheet,} from 'react-native'
import Colors from '../constant/colors';

const Card = (props) => {
    return (
        <View style={{...style.card, ...props.style}}>{props.children}</View>
    )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 10,
        // shadow for Android
        elevation: 8,
        // shadow for IOS
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity:0.26,
    }
})

export default Card
