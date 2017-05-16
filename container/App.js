import React, {Component, ProTypes} from 'react';
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
import {Provider} from 'react-redux';
import TabNavigator from 'react-native-tab-navigator';
import sceneConfig from './sceneConfig.js';
import store from '../redux/store/store.js';

export default class App extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			selectedTab: 'index'
		};
	}

	renderContent(scene){
		let SceneContent = scene.scene;
        return (
            <SceneContent/>
        )
	}

	renderTabBarItem(scene){
		return ('ios' === Platform.OS) ? (
			<TabBarIOS.Item
				key={scene.id}
				icon={scene.icon}
				title={scene.title}
                selectedIcon={scene.selectedIcon}
                selected={this.state.selectedTab === scene.id}
                onPress={() => {
                    this.setState({
                        selectedTab: scene.id
                    })
                }}
			>
				{this.renderContent(scene)}
			</TabBarIOS.Item>
		) : (
			<TabNavigator.Item
                key={scene.id}
                title={scene.title}
                renderIcon={() => {
                    return(
                        <Image style={styles.tabIcon} resizeMode={'contain'} source={scene.icon}/>
                    )
                }}
                renderSelectedIcon={() => {
                    return (
                        <Image style={styles.tabIcon} resizeMode={'contain'} source={scene.selectedIcon}/>
                    )
                }}
                selected={this.state.selectedTab === scene.id}
                onPress={() => {
                    this.setState({
                        selectedTab: scene.id
                    });
                }}
                selectedTitleStyle={styles.selectedTitleStyle}
                titleStyle={styles.titleStyle}
            >
                {this.renderContent(scene)}
            </TabNavigator.Item>
		)
	}

	render(){
		return ('ios' === Platform.OS) ? (
			<TabBarIOS
                unselectedTintColor="#585858"
                tintColor="#39ac69"
                barTintColor="white"
            >
                {sceneConfig.map((scene, index, arr) => (
                    this.renderTabBarItem(scene)
                ))}
            </TabBarIOS>
		) : (
			<TabNavigator
                tabBarStyle={styles.tabNavigatorStyle}
            >
                {sceneConfig.map((scene, index, arr) => (
                    this.renderTabBarItem(scene)
                ))}
            </TabNavigator>
		)
	}
}

const styles = StyleSheet.create({
	tabIcon: {
		width: 20,
		height: 20
	},
	titleStyle: {
        color: '#585858'
    },
    selectedTitleStyle: {
        color: '#39ac69'
    }
})