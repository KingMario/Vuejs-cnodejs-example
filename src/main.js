import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import List from './components/main/List'
import Topic from './components/main/Topic'

Vue.use(VueRouter)
Vue.config.devtools = true

/* eslint-disable no-new */
var router = new VueRouter({
  hashbang: false
})

router.map({
  '/': {
    component: List
  },
  '/:tab': {
    name: 'list',
    component: List
  },
  '/details/:id': {
    name: 'topic',
    component: Topic
  }
})

router.start(App, 'app')
