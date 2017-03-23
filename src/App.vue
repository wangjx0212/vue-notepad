<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
        <div class="container">
          <a class="navbar-brand" href="#">
            <i class="glyphicon glyphicon-time"></i>
            计划板
          </a>
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/home" activeClass="active"  ><a>首页</a></router-link>
            <router-link tag="li" to="/time-entries"  activeClass="active" ><a>计划列表</a></router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right" role="tablist">
                <li  v-if="this.$store.state.userName" class="dropdown" ><a href="JavaScript:void(0)" class="dropdown-toggle" data-toggle="dropdown" ><i class="glyphicon glyphicon-user m-r-5"></i>
                  {{this.$store.state.userName}}<span class="caret"></span> </a>
                    <ul class="dropdown-menu" role="menu" >
                        <li><a href="javascript:void(0)" @click="goUser()"><i class="glyphicon glyphicon-user"></i>我的主页</a></li>
                        <li><a href="javascript:void(0)" @click="quitLogin()"><i class="glyphicon glyphicon-log-out"></i>注销登录</a></li>
                    </ul>
                </li>
                <router-link tag="li" to="/login"  activeClass="active" v-else><a><i class="glyphicon glyphicon-log-in m-r-5"></i>登录</a></router-link>
          </ul>
        </div>
    </nav>
    <router-view></router-view>
  <div id="shade"></div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'

export default {

  name: 'wrapper',

  components: {
    Sidebar
  },
 methods:{
    quitLogin(){
      this.$store.dispatch('quitLogin');
      this.$router.push({path:'/login'});
    },
    goUser(){

      this.$router.push({path:'/user'});
    }
  },

}
</script>

<style>
  li{
    list-style: none;
  }
  #shade{
    position: absolute;
    top:0;
    left: 0;
    height:100%;
    width: 100%;
    background-color:#000000;
    opacity:0.8;
    -moz-opacity:0.8;
    filter:alpha(opacity=80);
    z-index: 1000;
    display: none;
  }
  .m-r-5{
    margin-right: 5px;
  }

</style>
