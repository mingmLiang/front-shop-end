import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const Categorylist = resolve => require(['@/components/category/list.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'],resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
const Findpswd = resolve => require(['@/components/User/findpswd.vue'], resolve)
const Changepswd = resolve => require(['@/components/User/changepswd.vue'], resolve)
const Register = resolve => require(['@/components/User/register.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const Order = resolve => require(['@/views/order.vue'], resolve)
const Payment = resolve => require(['@/components/car/pay/payment.vue'], resolve)
const OrderDetail = resolve => require(['@/components/order/details.vue'], resolve)
const UserMenu = resolve => require(['@/components/User/menu.vue'], resolve)
const Performance = resolve => require(['@/components/User/performance.vue'], resolve)
const Subordinate = resolve => require(['@/components/User/subordinate.vue'], resolve)
const Customer = resolve => require(['@/components/User/customer.vue'], resolve)
const Merchants = resolve => require(['@/components/User/merchants.vue'], resolve)
const Addresslist = resolve => require(['@/components/User/addresslist.vue'], resolve)
const Helper = resolve => require(['@/components/User/helper.vue'], resolve)
const Brand = resolve => require(['@/views/brand.vue'], resolve)
const Coupons = resolve => require(['@/views/coupons.vue'], resolve)
const Mycoupons = resolve => require(['@/views/mycoupons.vue'], resolve)
const EditAddress = resolve => require(['@/components/User/editAddress.vue'], resolve)
const Afsaleslist = resolve => require(['@/components/order/afsaleslist.vue'], resolve)
const Afsalesdetail = resolve => require(['@/components/order/afsalesdetail.vue'], resolve)
const Applyafsales = resolve => require(['@/components/order/applyafsales.vue'], resolve)
const Activity = resolve => require(['@/views/activity.vue'], resolve)
const Activity1 = resolve => require(['@/components/activity/section1.vue'], resolve)
const Activity2 = resolve => require(['@/components/activity/section2.vue'], resolve)
const Activity3 = resolve => require(['@/components/activity/section3.vue'], resolve)
const OgisticsInfo = resolve => require(['@/components/order/ogisticsInfo.vue'], resolve)


export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: Index
    }
    , {
      path: '/category',
      name: '分类页',
      redirect: '/category/all',
      component: Category,
      children: [{
        path: '/category/:tab',
        component:Categorylist
      }],
       meta: {
          keepAlive: true
       }
    }
    , {
      path: '/car',
      name: '购物车页',
      component: Car,
       meta: {
           requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
           keepAlive: false
       }
    }, {
      path: '/car/pay',
      name: '支付页',
      component: Pay
    },
    {
      path: '/user',
      name: '用户页',
      component: User,
      meta: {
           requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
       }
    }, {
      path: '/findpswd',
      name: '找回密码页',
      component: Findpswd
    }, {
      path: '/changepswd',
      name: '修改密码页',
      component: Changepswd
    }, {
      path: '/Register',
      name: '注册页',
      component: Register
    }, {
      path: '/detail',
      name: '详情页',
      component: Detail
    }, {
      path: '/search',
      name: '搜索页',
      component: Search
    },{
      path: '/login',
      name: '登录页',
      component: Login
    },{
      path: '/order',
      name: '订单列表页',
      component: Order,
      // meta: {
      //      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      // }
    },{
      path: '/car/pay/payment',
      name: '支付方式页',
      component: Payment,
      // meta: {
      //      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      // }
    },{
      path: '/order/detail',
      name: '订单详情页',
      component: OrderDetail,
      // meta: {
      //      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      // }
    },{
      path: '/user/menu',
      name: '用户列表页',
      component: UserMenu,
      // meta: {
      //      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      // }
    },{
      path: '/user/performance',
      name: '业绩管理页',
      component: Performance,
      // meta: {
      //      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      // }
    },{
      path: '/user/subordinate',
      name: '我的客户信息列表页',
      component: Subordinate,
      // meta: {
      //      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      // }
    },{
      path: '/user/customer',
      name: '我的客户信息详情页',
      component: Customer,
      // meta: {
      //      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      // }
    },{
      path: '/user/merchants',
      name: '我的商户信息',
      component: Merchants,
      // meta: {
      //      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      // }
    },{
      path: '/user/addresslist',
      name: '我的地址列表页',
      component: Addresslist,
      // meta: {
      //      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      // }
    },{
      path: '/user/helper',
      name: '客服与帮助',
      component: Helper
    },{
      path: '/brand',
      name: '品牌授权页',
      component: Brand
    },{
      path: '/coupons',
      name: '领券中心',
      component: Coupons
    },{
      path: '/user/mycoupons',
      name: '我的优惠券',
      component: Mycoupons
    },{
      path: '/user/editAddress',
      name: '编辑地址页',
      component: EditAddress
    },{
      path: '/order/afsaleslist',
      name: '售后订单列表',
      component: Afsaleslist
    },{
      path: '/order/afsalesdetail',
      name: '售后详情',
      component: Afsalesdetail
    },{
      path: '/order/applyafsales',
      name: '申请售后页',
      component: Applyafsales
    },{
      path: '/activity',
      name: '优惠专区页',
      component: Activity,
      redirect: '/activity/section1',
      children: [{
        path: '/activity/section1',
        component:Activity1
      },{
        path: '/activity/section2',
        component:Activity2
      },{
        path: '/activity/section3',
        component:Activity3
      }],
    },{
      path: '/order/ogisticsInfo',
      name: '物流信息页',
      component: OgisticsInfo
    }
    
  ]
})

