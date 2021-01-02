import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import SubmitIcon from './SubmitIcon';

export default class GoalCard extends Component {
	render() {
		return (
			<View style={GoalCardStyles.ViewStyle}>
				<View style={GoalCardStyles.GoalCardStyle}>
					<Text style={GoalCardStyles.GoalTextStyle}> Goals </Text>
					<Text style={GoalCardStyles.GoalValueStyle}> 315 </Text>
					<SubmitIcon></SubmitIcon>
				</View>
				<View style={GoalCardStyles.NoteCardStyle}>
					<Text> Notes</Text>
					<TextInput>
						"“Lorem ipsum dolor sit amet, consecteturorem ipsum
						dolor sit amet, consectetuorem ipsum dolor sit amet,
						consectetuorem ipsum dolor sit amet, consectetuorem
						ipsum dolor sit amet, consectetuorem ipsum dolor sit
						amet, consectetuorem ipsum dolor sit amet,
						consectetuorem ipsum dolor sit amet, consectetuorem
						ipsum dolor sit amet, consectetuorem ipsum dolor sit
						amet, consectetu"
					</TextInput>
					<SubmitIcon></SubmitIcon>
				</View>
			</View>
		);
	}
}

const GoalCardStyles = StyleSheet.create({
	ViewStyle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '91.66666%',
		height: 220,
	},
	GoalCardStyle: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1.5,
		padding: 17.5,
		//backgroundColor: 'cyan',
	},
	GoalTextStyle: {
		flex: 1.3,
		//backgroundColor: 'black',
		fontSize: 24,
		//color: 'white',
	},
	GoalValueStyle: {
		flex: 2,
		//backgroundColor: 'white',
		fontSize: 64,
	},
	NoteCardStyle: {
		flex: 1,
		padding: 17.5,
		//backgroundColor: 'pink',
	},
});
