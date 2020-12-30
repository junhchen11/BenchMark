import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class DropDown extends React.Component {
	constructor(props) {
		super(props);
	}
	state = { lift: null };
	render() {
		return (
			<View>
				<DropDownPicker
					items={[
						{ label: 'Bench', value: 'Bench' },
						{ label: 'Deadlift', value: 'Deadlift' },
						{ label: 'Pullup', value: 'Pullup' },
					]}
					placeholder="Lift"
					style={pickerStyles.style}
					itemStyle={pickerStyles.itemStyle}
					dropDownStyle={pickerStyles.dropDownStyle}
					containerStyle={pickerStyles.containerStyle}
					activeItemStyle={pickerStyles.activeItemStyles}
					labelStyle={pickerStyles.labelStyle}
					arrowSize={15}
					onChangeItem={(item) => this.setState({ lift: item.value })}
				></DropDownPicker>
			</View>
		);
	}
}
const pickerStyles = StyleSheet.create({
	style: {
		borderWidth: 2,
		borderBottomColor: '#000',
		borderTopColor: 'transparent',
		borderRightColor: 'transparent',
		borderLeftColor: 'transparent',
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomWidth: 2,
	},
	itemStyle: {
		justifyContent: 'flex-start',
		paddingLeft: '4%',
	},
	dropDownStyle: {
		elevation: 0,
		borderColor: 'transparent',
	},
	containerStyle: {
		height: '22%',
		width: 150,
	},
	activeItemStyle: {
		justifyContent: 'flex-start',
	},
	labelStyle: {
		fontWeight: 'bold',
		fontSize: 20,
	},
});
