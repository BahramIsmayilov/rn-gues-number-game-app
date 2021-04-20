import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MainButton from '../components/MainButton';
import Colors from '../constant/colors';
import DefaultStyle from '../constant/default-style';

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={DefaultStyle.title}>The Game is Over!</Text>
			<View style={styles.imageContainer}>
				<Image
					source={require('../assets/gameOver.jpg')}
					// source={{ uri: 'https://images.unsplash.com/photo-1593427002582-8c2eb5aa89d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80' }}
					style={styles.image}
				/>
			</View>
			<View style={styles.resultContainer}>
				<Text style={{ ...styles.resultText, ...DefaultStyle.titleSmall }}>
					Your phone needed <Text style={styles.resultNumber}>{props.roundsNumber}</Text> rounds to guess the
					number <Text style={styles.resultNumber}>{props.userNumber}.</Text>
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<MainButton color={Colors.accent} onPress={props.onNewGame}>
					New Game
				</MainButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		marginTop: 10,
		width: 160,
	},
	imageContainer: {
		width: 300,
		height: 300,
		marginVertical: 30,
		borderColor: Colors.accent,
		borderWidth: 5,
		borderRadius: 50,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	resultContainer: {
		width: '80%',
	},
	resultText: {
		textAlign: 'center',
		color: 'black',
	},
	resultNumber: {
		fontSize: 20,
		color: Colors.primary,
		fontWeight: '700',
	},
});

export default GameOverScreen;
