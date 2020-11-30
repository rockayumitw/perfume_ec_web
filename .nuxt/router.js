import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8bf35f6e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _7d78a770 = () => interopDefault(import('..\\pages\\member-center.vue' /* webpackChunkName: "pages_member-center" */))
const _46585234 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages_products" */))
const _1ca15552 = () => interopDefault(import('..\\pages\\products-info.vue' /* webpackChunkName: "pages_products-info" */))
const _1f42a59c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _8bf35f6e,
    name: "login"
  }, {
    path: "/member-center",
    component: _7d78a770,
    name: "member-center"
  }, {
    path: "/products",
    component: _46585234,
    name: "products"
  }, {
    path: "/products-info",
    component: _1ca15552,
    name: "products-info"
  }, {
    path: "/",
    component: _1f42a59c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
