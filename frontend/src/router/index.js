import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bulletin',
    name: 'bulPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BulPage.vue'),
    // beforeEnter: function(to, from, next) {
    //   // 인증 값 검증 로직 추가
    //   console.log('라우팅 가드 테스트');
    //   let inputString = prompt('문자열을 입력하세요', '기본 값 문자열');
    //   if(inputString != '' && inputString == '들어가자')
    //   {
    //     console.log('라우팅 허용');
    //     next();
    //   }
    //   else{
    //     console.log('라우티 불허용');
    //     next(false);
    //   }

    // }
  },
  {
    path: '/bulletinDetail',
    name: 'bulDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BulDetail.vue')
  },
  {
    path: '/bulletinWrite',
    name: 'bulWrite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BulWrite.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
