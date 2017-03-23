<template>
  <div class="modal fade" id="UpdateTimeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-lg">
      <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <div class="sa-icon sa-warning pulseWarning">

            </div>
        </div>
        <div class="modal-body">
          {{getPlan}}
            <div class="form-horizontal">
              <div class="form-group">
                <div class="col-sm-6">
                  <label>日期</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="date"
                    placeholder="Date"
                  />
                </div>
                <div class="col-sm-6">
                  <label>时间</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="totalTime"
                    placeholder="Hours"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-12">
                  <label>备注</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="comment"
                    placeholder="Comment"
                  />
                </div>
              </div>
            </div>

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消
            </button>
            <button type="button" class="btn btn-danger" data-dismiss="modal"  @click="updatePlan()">
              保存
            </button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name : 'LogTime',
    data() {
      return {
        date : '',
        totalTime : '',
        comment : ''
      }
    },
    computed:{
      getPlan(){
        let dex=this.$store.state.selectIndex;
        if(this.$store.state.list.length){
          this.date=this.$store.state.list[dex].date;
          this.totalTime=this.$store.state.list[dex].totalTime;
          this.comment=this.$store.state.list[dex].comment;
        }
      },
      plans (){
        return this.$store.state.list
      },
    },
    methods:{
      updatePlan() {
        const plan = {
          name : 'savill',
          avatar : 'http://img.mukewang.com/5333a01a0001ee5302000200-200-200.jpg',
          date : this.date,
          totalTime : this.totalTime,
          comment : this.comment
        };

        this.$store.dispatch('updatePlan',plan)
        //this.$store.dispatch('addTotalTime', this.totalTime)

      }
    }
  }
</script>
<style>
  .modal-dialog{
    z-index: 2000;
  }
</style>
