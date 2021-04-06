import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push//解决VUE路由跳转出现Redirected when going from "/xxx" to "/yyy" via a navigation guard.报错
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Channel',
    name: 'Channel',
    component: () =>
      import('@/views/Channel.vue')
  }, {
    path: '/ChatBox',
    name: 'ChatBox',
    component: () =>
      import('@/views/ChatBox.vue')
  },
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
export default router