import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Index from '../views/index.vue'
import Product from '../views/product.vue'
import Detail from '../views/detail.vue'
import Cart from '../views/cart.vue'
import Order from '../views/order.vue'
import OrderConfirm from '../views/orderConfirm.vue'
import OrderList from '../views/orderList.vue'
import OrderPay from '../views/orderPay.vue'
import AliPay from '../views/aliPay.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'confirm',
        name: 'order-firm',
        component: OrderConfirm
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'alipay',
        name: 'order-alipay',
        component: AliPay
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
