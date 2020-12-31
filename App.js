import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressRing from './Components/ProgressRing';
import { styles } from './Styles';

liftStats = {
	sets: '3',
	reps: '8',
	weight: '315',
	lift: 'Bench',
	date: '10/30/20',
	curMax: '415',
};
export default function App() {
	return (
		<View style={styles.Container}>
			<ProgressRing></ProgressRing>
		</View>
	);
}
