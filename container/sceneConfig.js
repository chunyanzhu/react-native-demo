import IndexScene from '../pages/index/IndexScene';
import WelfareScene from '../pages/welfare/WelfareScene';
import CartScene from '../pages/cart/CartScene';
import BillScene from '../pages/bill/BillScene';
import MyScene from '../pages/my/MyScene';

export default [
	{
		id: 'index',
		title: '首页',
		icon: require('./images/index@2x.png'),
		selectedIcon: require('./images/index_select@2x.png'),
		scene: IndexScene
	},
	{
		id: 'welfare',
		title: '福利',
		icon: require('./images/welfare@2x.png'),
		selectedIcon: require('./images/welfare_select@2x.png'),
		scene: WelfareScene
	},
	{
		id: 'cart',
		title: '购物车',
		icon: require('./images/cart@2x.png'),
		selectedIcon: require('./images/cart_select@2x.png'),
		scene: CartScene
	},
	{
		id: 'bill',
		title: '订单',
		icon: require('./images/bill@2x.png'),
		selectedIcon: require('./images/bill_select@2x.png'),
		scene: BillScene
	},
	{
		id: 'my',
		title: '我的',
		icon: require('./images/my@2x.png'),
		selectedIcon: require('./images/my_select@2x.png'),
		scene: MyScene
	}
]
