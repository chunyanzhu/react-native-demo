import React, {Component} from 'react'
import {
	Navigator,
	StyleSheet,
	Platform,
	TabBarIOS,
	Dimensions,
	TouchableOpacity,
	View,
	Text,
	Image
} from 'react-native';

export default class WelfareScene extends Component{
	constructor(props, context){
		super(props, context);
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>WelfareScene</Text>
			</View>
		)
	}
}

import commonStyle from '../../components/commonStyle.js';
let styles = {
	...commonStyle,
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
}