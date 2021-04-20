import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert, ScrollView, FlatList } from 'react-native';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constant/colors';
import { Ionicons } from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

const GameScreen = (props) => {
	const { userChoise, onGameOver } = props;
	const initialGuess = generateRandomBetween(1, 100, userChoise)
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [passGuess, setPassGuess] = useState([initialGuess.toString()]);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		if (currentGuess === userChoise) {
			onGameOver(passGuess.length);
		}
	}, [currentGuess, userChoise, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && currentGuess < userChoise) ||
			(direction === 'greater' && currentGuess > userChoise)
		) {
			Alert.alert('Don`t lie!', 'You know  that this is wrong...', [{ text: 'Sorry', style: 'cancel' }]);
			return;
		}
		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}
		const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
		setCurrentGuess(nextGuess);
		setPassGuess((curPassGuess) => [nextGuess.toString(), ...curPassGuess]);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent`s Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<MainButton
					onPress={() => {
						nextGuessHandler('lower'); 
					}}
					color={Colors.accent}
				>
					<Ionicons name='md-remove' color={Colors.white} size={24} />
				</MainButton>
				<MainButton
					onPress={() => {
						nextGuessHandler('greater');
					}}
					color={Colors.primary}
				>
					<Ionicons name='md-add' color={Colors.white} size={24} />
				</MainButton>
			</Card>
			<View style={styles.listContainer}>
				{/* <ScrollView contentContainerStyle={styles.list}>
				{passGuess.map((guess, index) => (
					<View key={index} style={styles.listItem}>
						<Text>#{passGuess.length - index}</Text>
						<Text>{guess}</Text>
					</View>
				))}
			</ScrollView> */}
				<FlatList
					data={passGuess}
					renderItem={(itemData) => (
						<View style={styles.listItem}>
							<Text>#{passGuess.length - itemData.index}</Text>
							<Text>{itemData.item}</Text>
						</View>
					)}
					keyExtractor={item => item + Math.random().toString()}
					contentContainerStyle={styles.list}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: 300,
		maxWidth: '80%',
		marginTop: 20,
	},
	listContainer: {
		flex: 1,
		width: '60%',
		marginVertical: 15,
	},
	list: {
		flexGrow: 1,
		justifyContent: 'flex-end',
	},
	listItem: {
		flexDirection: 'row',
		borderColor: '#ccc',
		borderWidth: 2,
		marginVertical: 10,
		paddingHorizontal: 25,
		paddingVertical: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: '100%',
	},
});

export default GameScreen;
