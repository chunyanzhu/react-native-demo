import {
	Platform,
} from 'react-native';

let styles;

if(Platform.OS === 'ios'){
	styles = {
		container: {
			marginTop: -20,
			backgroundColor: '#f4f4f4',
		},
	}
}else{
	styles = {
		container: {
			backgroundColor: '#f4f4f4',
		},
	}
}
export default styles;