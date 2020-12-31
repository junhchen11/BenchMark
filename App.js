import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './Styles';

import LiftCard from './Containers/LiftCard';
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
			<LiftCard liftStats={liftStats} editable={true} />
		</View>
	);
}
