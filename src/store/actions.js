/**
 * Created by user on 2017/1/7.
 */

import * as types from './mutation-types'

export default {
  addTotalTime({ commit }, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime({ commit }, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan({ commit }, plan) {
    commit(types.SAVE_PLAN, plan);
  },
  updatePlan({ commit },plan) {
    commit(types.UPDATE_PLAN,plan);
  },

  deletePlan({ commit }, plan) {
    commit(types.DELETE_PLAN, plan)
  },
  saveLogin({ commit }, name) {
    commit(types.SAVE_LOGIN, name)
  },
  quitLogin({ commit }) {
    commit(types.QUIT_LOGIN)
  },
  saveIndex({ commit },dex) {
    commit(types.SELECT_INDEX,dex)
  },
};
