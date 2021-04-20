import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
// import * as Font from 'expo-font';

// const fetchFonts = () =>Font.loadAsync({
// 		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
// 		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
// 	});

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);
	// const [dataLoaded, setDataLoaded] = useState(false);

	// fetchFonts();
	configureNewGameHandler = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(parseInt(selectedNumber));
	};

	const gameOverHandler = (numOfRounds) => {
		setGuessRounds(numOfRounds);
	};

	let content = <StartGameScreen onPressStartGame={startGameHandler} />;

	if (userNumber && guessRounds <= 0) {
		content = <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />;
	} else if (guessRounds > 0) {
		content = (
			<GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onNewGame={configureNewGameHandler} />
		);
	}

	return (
		<View style={styles.screen}>
			<Header title={'Guess a Number!'} />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
