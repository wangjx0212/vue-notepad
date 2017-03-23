<template>
    <div class="container">
        <div class="user_info-box">
          <div class="user_logo"><img :src="userImg" ></div>
          <div class="user_name"><span>{{name}}</span></div>
          <div class="user_action">
            <button class="user-action_btn">创建</button>
          </div>
          <div class="user-meta mt-12">
            <span>创建{{plans.length}}个任务</span>
          </div>
    </div>
</template>

<script>
  export default {

    computed:{
      plans (){
        return this.$store.state.list
      },
      userImg(){
        return this.$store.state.userLogo
      },
      name(){
        return this.$store.state.userName
      }
    }
  }
</script>

<style>
  .user_info-box{
    text-align: center;
  }
  .user_logo{
    margin: 20px 0;
  }
  .user_logo img{
    width: 86px;
    height: 86px;
    border-radius: 50% 50%;
  }
  .user_name span{
    font-size: 28px;
    font-weight: 400;
  }
  .mt-12{
    margin-top: 12px;
  }
  .user-action_btn{
    font-size: 12px;
    padding: 8px 30px;
    color: #83c73a;
    border: 1px solid #83c73a;
    background-color:#ffffff
  }
  .user-meta{
    color:#585858;
  }

</style>
