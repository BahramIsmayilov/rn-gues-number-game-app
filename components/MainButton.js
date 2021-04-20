import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constant/colors';

const MainButton = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
			<View style={styles.buttonContainer} backgroundColor={props.color}>
				<Text style={styles.buttonText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		paddingHorizontal: 30,
		paddingVertical: 12,
		borderRadius: 10,
	},
	buttonText: {
		color: Colors.white,
		fontWeight: '700',
        textAlign: 'center',
        fontSize: 18,
	},
});

export default MainButton;
