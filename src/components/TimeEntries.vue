<template>
  <div class="container">
    <div class="col-sm-3">
      <Sidebar></Sidebar>
    </div>
    <div class="col-sm-9">
    <router-link
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time"
      class="btn btn-primary">
      创建
    </router-link>
    <hr>
    <router-view></router-view>
    <div class="time-entries">
      <p v-if="!plans.length"><strong>还没有任何计划</strong></p>
      <ul class="list-group">
        <li class="list-group-item" v-for="(plan,index) in plans">
          <div class="row">
            <div class="col-sm-2 user-details">
                <img :src="plan.avatar" class="img-circle img-responsive avatar">
                <p class="text-center"><strong>{{name}}</strong></p>
            </div>

            <div class="col-sm-2 text-center time-block">
                 <h3 class="list-group-item-text total-time">
                   <i class="glyphicon glyphicon-time"></i>
                     {{ plan.totalTime }}
                 </h3>
                 <p class="label label-primary text-center">
                    <i class="glyphicon glyphicon-calendar"></i>
                    {{ plan.date }}
                  </p>
            </div>

            <div class="col-sm-6 comment-section">
              <p>{{ plan.comment }}</p>
            </div>


            <div class="col-sm-1 comment-edit">
              <button class="btn btn-link" data-toggle="modal" data-target="#UpdateTimeModal"  @click="saveIndex(index)">
                编辑任务
              </button>
            </div>

            <div class="col-sm-1 ">
                  <button class="btn btn-xs btn-danger delete-button"
                    data-toggle="modal" data-target="#myModal"  @click="saveIndex(index)">
                  X
                  </button>
            </div>


          </div>


        </li>
      </ul>
    </div>
      <deleteModal></deleteModal>
      <UpdateTimeModal></UpdateTimeModal>
    </div>
  </div>

</template>

<script>
  import deleteModal from './deleteModal'
  import Sidebar from './Sidebar'
  import UpdateTimeModal from './update-time.vue'

  export default {
    components:{
      deleteModal,
      Sidebar,
      UpdateTimeModal
    },
    computed:{
      plans (){
        return this.$store.state.list
      },
      name(){
        return this.$store.state.userName
      },
    },

  methods:{
         saveIndex(index){
          this.$store.dispatch('saveIndex',index)
         },
         getPlan(index){
          this.$store.dispatch('saveIndex',index)
        }

     /*   deletePlan(index){
        this.$store.dispatch('decTotalTime',this.plans[index].totalTime);
        this.$store.dispatch('deletePlan',index)
      }*/
    },
     beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
    //  alert(Store.state.userName);

/*
       next(vm => {
         alert(vm.$store.state.userName)
       })
*/
       next(vm => {
         // 通过 `vm` 访问组件实例
             if(!vm.$store.state.userName){
                   return vm.$router.replace({ path: '/login', force: true })
            }
       })
    },
/*    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      alert(this.$store.state.userName);
      next();
    }*/

  }
</script>

<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
  .comment-edit{
    margin-top: 98px;
  }
  .delete-button{
    margin-left:22px;
  }

</style>
