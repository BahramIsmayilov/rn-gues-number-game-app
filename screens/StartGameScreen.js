import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constant/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {
	const [enterdValue, setEnteredValue] = useState();
	const [selectedNumber, setSelectedNumber] = useState();
	const [confrimed, setConfrimed] = useState(false);

	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setConfrimed(false);
		setEnteredValue('');
	};

	const confirmInputHandler = () => {
		const choseNumber = parseInt(enterdValue);
		if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
			Alert.alert('Invalid Number', 'Number has to be a number between 1 and 99', [
				{ text: 'Okay', style: 'destructive', onPress: resetInputHandler },
			]);
			return;
		}
		setConfrimed(true);
		setSelectedNumber(enterdValue);
		setEnteredValue();
		Keyboard.dismiss();
	};
	let confrimedOutput;

	if (confrimed) {
		confrimedOutput = (
			<Card style={styles.summaryContainer}>
				<Text>Your Selected</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<MainButton
					color={Colors.primary}
					onPress={() => {
						props.onPressStartGame(selectedNumber);
					}}
				>Start Game</MainButton>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>The Game Screen!</Text>
				<Card style={styles.inputContainer}>
					<Text>Select a Number</Text>
					<Input
						style={styles.input}
						keyboardType='number-pad'
						maxLength={2}
						autoCorrect={false}
						autoCapitalize='none'
						blurOnSubmit
						value={enterdValue}
						onChangeText={numberInputHandler}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button title='Reset' onPress={resetInputHandler} color={Colors.accent} />
						</View>
						<View style={styles.button}>
							<Button title='Confirm' onPress={confirmInputHandler} color={Colors.primary} />
						</View>
					</View>
				</Card>
				{confrimedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
		// fontFamily: 'open-sans-bold'
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
	},
	button: {
		width: 90,
	},
	input: {
		width: 50,
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
});

export default StartGameScreen;
