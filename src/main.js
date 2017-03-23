// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an al

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


import App from './App';
import Home from './components/Home';
import store from './store';
import TimeEntries from './components/TimeEntries';
import Login from './components/Login';
import User from './components/user';




Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/login',
  component : Login
}, {
    path:'/user',
    component:User
  },{
    path:'/time-entries',
    component:TimeEntries,
    children:[{
      path:'log-time',
      component : resolve => require(['./components/LogTime.vue'],resolve),
    }],
  }
]

const router = new VueRouter({
  routes,
});


/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app');
/*
router.beforeEach((to, from, next) => {

  if(true){

}
  next();
});*/
