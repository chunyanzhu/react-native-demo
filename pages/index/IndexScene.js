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
	Image,
	TextInput,
	ListView,
	ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class IndexScene extends Component{
	constructor(props, context){
		super(props, context);
	}

	render(){
		return (
			<ScrollView style={styles.container}>
				<View style={styles.fixedBar}>
					<View style={styles.location}>
						<Image source={require('./images/icon_locate.png')} resizeMode={'contain'} style={styles.locationIcon} />
						<Text style={styles.latText}>北京</Text>
						<View style={styles.downArrow}></View>
					</View>
					<View style={styles.search}>
						<View style={styles.searchInput}>
						</View>
						<View style={styles.searchCon}>
							<Image source={require('./images/search_icon.png')} style={styles.searchIcon} resizeMode={'contain'} />
							<Text style={styles.searchText}>附近商家商品</Text>
						</View>
					</View>
					<View style={styles.message}>
						<Image source={require('./images/message_icon.png')} resizeMode={'contain'} style={styles.messageImage} />
					</View>
				</View>
				<Swiper style={styles.wrapper} height={180} autoplay={true} autoplayTimeout={2}>
					<View style={styles.slide}>
						<Image style={styles.slideImage} resizeMode={'contain'} source={require('./images/slide1.jpg')} />
					</View>
					<View style={styles.slide}>
						<Image style={styles.slideImage} resizeMode={'contain'} source={require('./images/slide2.jpg')} />
					</View>
					<View style={styles.slide}>
						<Image style={styles.slideImage} resizeMode={'contain'} source={require('./images/slide3.jpg')} />
					</View>
				</Swiper>
				<View style={styles.seriesList}>
					<View style={styles.series}>
						<Image style={styles.seriesImage} source={require('./images/series1.png')} resizeMode={'contain'} />
						<Text style={styles.seriesText}>超市便利</Text>
					</View>
					<View style={styles.series}>
						<Image style={styles.seriesImage} source={require('./images/series2.png')} resizeMode={'contain'} />
						<Text style={styles.seriesText}>新鲜果蔬</Text>
					</View>
					<View style={styles.series}>
						<Image style={styles.seriesImage} source={require('./images/series3.png')} resizeMode={'contain'} />
						<Text style={styles.seriesText}>零食小吃</Text>
					</View>
					<View style={styles.series}>
						<Image style={styles.seriesImage} source={require('./images/series4.png')} resizeMode={'contain'} />
						<Text style={styles.seriesText}>鲜花烘焙</Text>
					</View>
					<View style={styles.series}>
						<Image style={styles.seriesImage} source={require('./images/series5.png')} resizeMode={'contain'} />
						<Text style={styles.seriesText}>医药健康</Text>
					</View>
				</View>
				<View style={styles.banner}>
					<Image style={styles.bannerImage} source={require('./images/slide3.jpg')} resizeMode={'contain'} />
				</View>
				<View style={styles.goodsView}>
					<View style={styles.goodsMiaosha}>
						<Image style={styles.miaoIcon} source={require('./images/icon_qiang.png')} resizeMode={'contain'} />
						<Image style={styles.miaosha} source={require('./images/icon_miaosha.png')} resizeMode={'contain'} />
						<Text stylle={styles.miaoshaText}>秒杀抢不停</Text>
						<Image style={styles.miaoshaProduct} source={require('./images/miaoshaProduct.png')} resizeMode={'contain'} />
					</View>
					<View style={styles.goodsCenter}>
						<View style={[styles.goods, styles.goods1]}>
							<Text style={styles.goodsTit}>免运大额</Text>
							<Text style={styles.greyTie}>领券减15</Text>
							<Image style={styles.goodsImage} source={require('./images/goods.png')} resizeMode={'contain'} />
							<View style={styles.goods1RightBor}></View>
							<View style={styles.goods1BottomBor}></View>
						</View>
						<View style={styles.goods}>
							<Text style={styles.goodsTit}>味多美</Text>
							<Text style={styles.greyTie}>领券减15</Text>
							<Image style={styles.goodsImage} source={require('./images/goods.png')} resizeMode={'contain'} />
						</View>
					</View>
					<View style={styles.goodsRight}>
						<View style={styles.goods}>
							<Text style={styles.goodsTit}>西葫芦</Text>
							<Text style={styles.greyTie}>1.9元</Text>
							<Image style={styles.goodsImage} source={require('./images/goods.png')} resizeMode={'contain'} />
						</View>
						<View style={[styles.goods, styles.goods4]}>
							<Text style={styles.goodsTit}>芒果节</Text>
							<Text style={styles.greyTie}>9.9元</Text>
							<Image style={styles.goodsImage} source={require('./images/goods.png')} resizeMode={'contain'} />
							<View style={styles.goods4LeftBor}></View>
							<View style={styles.goods4TopBor}></View>
						</View>
					</View>
				</View>
			</ScrollView>
		)
	}
}
const windowWidth = Dimensions.get('window').width;
const greyColor = '#999';
const borderColor = '#f4f4f4';

import commonStyle from '../../components/commonStyle.js';
let styles = StyleSheet.create({
	...commonStyle,
	fixedBar:{
		width: '100%',
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		height: 53,
		position: 'absolute',//没有fixed
		top: 0,
		left: 0,
		flexDirection: 'row',
		backgroundColor: '#000',
		opacity: .5,
		zIndex: 10
	},
	location: {
		width: 100,
		flexDirection: 'row',
		alignItems: 'center'
	},
	locationIcon: {
		width: 20,
		height: 20
	},
	latText: {
		fontSize: 14,
		color: '#fff',
	},
	downArrow: {
		width: 7,
		height: 7,
		borderLeftWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#fff',
		transform: [{rotateZ: '-45deg'}],
		marginLeft: 3,
	},
	search: {
		flex: 1,
		position: 'relative',
	},
	searchInput: {
		width: 180,
		height: 30,
		backgroundColor: '#fff',
		opacity: 0.8,
		borderRadius: 15,
		position: 'absolute',
		top: 0,
		right: 0,
	},
	searchCon: {
		width: 180,
		height: 30,
		position: 'absolute',
		top: 0,
		right: 0,
		flexDirection: 'row',
		alignItems: 'center'
	},
	searchIcon: {
		width: 16,
		height: 15,
		marginLeft: 7,
	},
	searchText: {
		color: '#fff',
		backgroundColor: 'transparent',
		marginLeft: 5,
	},
	message: {
		//flex: 1,
		width: 27,
		flexDirection: 'row-reverse',
		alignItems: 'center',
	},
	messageImage: {
		width: 22,
		height: 22,
	},
	wrapper: {
		height: 100,
	},
	slide:{
		backgroundColor: '#0f0',
		paddingTop: 0,
	},
	slideImage:{
		marginTop: 0,
		width: '100%',
		height: windowWidth*360/750,
	},

	seriesList: {
		flexDirection: 'row',
		height: 105,
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	series: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	seriesImage: {
		width: 45,
		height: 45,
	},
	seriesText: {
		marginTop: 5,
	},
	banner: {
		backgroundColor: '#0f0',
		marginTop: 10,
	},
	bannerImage: {
		width: '100%',
		height: windowWidth*360/750
	},
	goodsView: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		marginTop: 10,
	},
	goodsMiaosha: {
		flex: 161,
		position: 'relative',
		borderColor: '#f4f4f4',
		borderRightWidth: StyleSheet.hairlineWidth,
		flexDirection: 'column',
		alignItems: 'center',
	},
	miaoIcon: {
		position: 'absolute',
		top: 0,
		right: 0,
		width: 42,
		height: 43,
	},
	miaosha: {
		width: 90,
		height: 24,
		marginTop: 42,
	},
	miaoshaText: {
		color: greyColor,
	},
	miaoshaProduct: {
		width: 85,
		height: 85,
		marginTop: 20,
		marginBottom: 20,
	},
	goodsCenter: {
		flex: 107,
	},
	goodsRight: {
		flex: 107,
	},
	goods: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: windowWidth * 107/(107+107+161)
	},
	goods1: {
		position: 'relative',
	},
	goods4: {
		position: 'relative',
	},
	goods1RightBor: {
		position: 'absolute',
		width: 1,
		height: windowWidth * 107/((107+107+161)*2),
		right: 0,
		bottom: 0,
		backgroundColor: borderColor,
	},
	goods1BottomBor: {
		position: 'absolute',
		height: 1,
		width: windowWidth * 107/((107+107+161)*2),
		right: 0,
		bottom: 0,
		backgroundColor: borderColor,
	},
	goods4TopBor: {
		position: 'absolute',
		height: 1,
		width: windowWidth * 107/((107+107+161)*2),
		left: 0,
		top: 0,
		backgroundColor: borderColor,
	},
	goods4LeftBor: {
		position: 'absolute',
		width: 1,
		height: windowWidth * 107/((107+107+161)*2),
		left: 0,
		top: 0,
		backgroundColor: borderColor,
	},
	greyTie: {
		color: greyColor
	},
	goodsImage: {
		width: 55,
		height: 55,
	}
});
