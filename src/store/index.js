/**
 * Created by user on 2017/1/7.
 */
// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  totalTime: 0,
  userLogo:"http://img.mukewang.com/5333a01a0001ee5302000200-200-200.jpg",
  userName:'',
  selectIndex:0,
  list: [/*{
    avatar : 'http://img.mukewang.com/5333a01a0001ee5302000200-200-200.jpg',
    date : '2016-12-25',
    totalTime : '6',
    comment : '12月25日完善，加班敲代码需要6个小时'
  }*/]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
