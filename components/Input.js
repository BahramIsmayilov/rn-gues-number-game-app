import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constant/colors';

const Input = (props) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
	input: {
        height: 30,
		borderBottomColor: Colors.primary,
		borderBottomWidth: 1,
		marginVertical: 10,
        textAlign: 'center'
	},
});
export default Input;
