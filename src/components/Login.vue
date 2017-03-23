<template>
  <div class="login_main container">
    <div class="row">
          <form class="bs-example bs-example-form" role="form" @submit.prevent="onSubmit">
                <div class="login_box col-center-block">
                  <h3>请登录</h3>
                  <div class="input-group col-md-12">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input type="text"  class="form-control" placeholder="仅输入用户名即可登录" v-model="username">
                  </div>
                  <br>
                  <div class="input-group col-md-12">
                    <button type="submit" class="btn btn-block" :class="{ 'btn-success': username.length }" :disabled="!username.length"><i class="glyphicon glyphicon-log-in m-r-5"></i>登录</button>
                  </div>
                </div>
          </form>
    </div>
  </div>
</template>
<script>
  export default {

    data: () => ({ username: '' }),
     methods:{
       onSubmit(){
         this.$store.dispatch('saveLogin',this.username);

          if(this.$route.path == '/login'){
            this.$router.push({path:'/home'});

            return false;
          }
           () => {
                  let { referrer } = this.$route.query;
                  referrer = referrer ? decodeURIComponent(referrer) : '/';
                  this.$router.replace({ path: referrer, force: true })

           }
       },


    }
  }
</script>

<style>
  .login_main{
    margin-top:150px;
    z-index: 2000;

  }
  .login_box{
    width:300px;
    padding:8px 20px 20px;
    border: 1px solid #e7e7e7;
  }
  .col-center-block {
    float: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
