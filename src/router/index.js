import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import('../components/Home/Home')
const InputInfo = ()=>import('../components/InputCom/InputInfo')
const Detail = ()=>import('../components/detail/Detail')
Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/input',
    component: InputInfo
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new Router({
  routes,
})

export default router
