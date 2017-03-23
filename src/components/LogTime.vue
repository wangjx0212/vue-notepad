<template>
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

      <p class="mark" :class="{'hide':mark}">信息未填写完整。</p>

    <router-link to="/time-entries" class="btn btn-danger" >取消</router-link>
    <button class="btn btn-primary"  @click="save()">保存</button>
    <!-- 按钮触发模态框 -->
    <hr>
  </div>
</template>

<script>
  export default {
    name : 'LogTime',
    data() {
      return {
        date : '',
        totalTime : '',
        comment : '',
        mark:true
      }
    },
    methods:{
      save() {
        if(this.date&&this.totalTime&&this.comment){
        this.mark=true;
          const plan = {
            name : 'savill',
            avatar : 'http://img.mukewang.com/5333a01a0001ee5302000200-200-200.jpg',
            date : this.date,
            totalTime : this.totalTime,
            comment : this.comment
          };
          this.$store.dispatch('savePlan', plan)
          this.$store.dispatch('addTotalTime', this.totalTime)
          this.$router.go(-1)

        }else{
          this.mark=false;
          setTimeout(()=>{this.mark=true},3000);
        }


      }
    }
  }
</script>
