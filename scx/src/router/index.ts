import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../layout/Index.vue';
import ProductDetail from '../views/home/productDetailPanel/ProductDetail.vue';
import ProductList from '../views/home/productListPanel/ProductList.vue';
import ProductSelection from '../views/home/productDetailPanel/ProductSelection.vue';
import OrderList from '../views/order/orderList/OrderList.vue';

const routes: RouteRecordRaw[] = [
	{
		path:'/',
		redirect:"/home"
	},
	{
		path: '/home',
		component: Layout,
		name: 'Layout',
		children: [
			{
				path: '',
				component: ProductList,
				name: 'ProductList',
			},

			{
				path: '/ProductDetail/:Id',
				component: ProductDetail,
				name: 'ProductDetail',
			},
		],
	},
	{
		path:"/OrderList",
		component: Layout,
		name:"OrderList",
		children:[
			{
				path: '',
				component: OrderList,
				name: 'OrderList',
			},
		]
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
export default router;
