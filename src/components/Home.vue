<template>
  <div class="container">
    <div class="col-sm-3" >
      <Sidebar></Sidebar>
    </div>
    <div class="col-sm-9">
        <div class="jumbotron">
          <h1>我的工作台</h1>
          <p>
          <strong>
            <router-link to="/time-entries">创建一个任务</router-link>
          </strong>
          </p>
        </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar'
  export default {
    components: {
      Sidebar
    },
  }
</script>

<style>

</style>
