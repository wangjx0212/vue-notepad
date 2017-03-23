<template>
  <!-- 模态框（Modal） -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-mail">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            &times;
          </button>
         <div class="sa-icon sa-warning pulseWarning">

         </div>
        </div>
        <div class="modal-body">
            <P class="text-center"><strong>确认删除？</strong></P>
            <p class="text-center"><span>删除后不可恢复</span></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消
          </button>
          <button type="button" class="btn btn-danger" data-dismiss="modal"  @click="deletePlan(getIndex)">
            删除
          </button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal -->
  </div>
</template>

<script>
  export default {
    computed:{
      getIndex(){
        return this.$store.state.selectIndex;
      },
      plans (){
        return this.$store.state.list
      },
    },
    methods: {
      deletePlan(index){
        this.$store.dispatch('decTotalTime', this.plans[index].totalTime);
        this.$store.dispatch('deletePlan', index);
      }
    }
  }
</script>

<style>
  .modal-mail{
    z-index: 2000;
    width: 410px !important;
  }
</style>
