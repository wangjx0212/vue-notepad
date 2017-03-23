/**
 * Created by user on 2017/1/7.
 */
// src/store/mutations.js
import * as types from './mutation-types'

export default {
  // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + time
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像

    state.list.push(
      Object.assign(plan)
    )
  },

  // 修改某计划
  [types.UPDATE_PLAN] (state,plan) {
    state.list[state.selectIndex].comment=plan.comment;
    state.list[state.selectIndex].date=plan.date;
    state.list[state.selectIndex].totalTime=plan.totalTime;
    var totalTime=0;
    for(var i=0;i<state.list.length;i++){
      totalTime+=state.list[i].totalTime;
    }
    state.totalTime=totalTime;
  },

  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  },
  //选择某计划
  [types.SELECT_INDEX] (state,dex) {
    state.selectIndex =dex;
  },
  // 登录
  [types.SAVE_LOGIN] (state, name) {
    state.userName=name;
  },
  // 注销登录
  [types.QUIT_LOGIN] (state) {
    state.userName='';
  }

};
