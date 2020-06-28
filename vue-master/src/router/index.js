import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

window.addEventListener('routerChange', (e) => {
  console.log('sssssss')
})

window.routerChange = (e) => {
  console.log('sssssasdasd')
  console.log(e)
}

router.beforeEach((to, from, next) => {
  /* eslint-disable */
  routerChange(to)
  next()
})

Vue.use(VueRouter)


export default router
