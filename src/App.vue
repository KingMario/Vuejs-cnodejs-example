<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid bg-success">
      <div class="navbar-header">
        <a v-link="{path: '/', exact: true}"><img class="logo" src="./assets/logo.svg" alt="CNodeJS"></a>

        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-items" aria-expanded="false">
          <span class="sr-only">切换导航栏</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbar-items">
        <ul class="nav navbar-nav">
          <li v-link-active><a href="javascript:void(0)" v-link="{name: 'list', params: {tab: 'good'}, activeClass: 'bg-info'}">精华</a></li>
          <li v-link-active><a href="javascript:void(0)" v-link="{name: 'list', params: {tab: 'share'}, activeClass: 'bg-info'}">分享</a></li>
          <li v-link-active><a href="javascript:void(0)" v-link="{name: 'list', params: {tab: 'ask'}, activeClass: 'bg-info'}">问答</a></li>
          <li v-link-active><a href="javascript:void(0)" v-link="{name: 'list', params: {tab: 'job'}, activeClass: 'bg-info'}">招聘</a></li>
        </ul>

        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="搜索">
          </div>
        </form>

      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
  <error></error>
</template>

<script type="text/ecmascript-6">
  import store from './vuex/store'
  import actions from './vuex/topicActions'
  import Error from './components/alerts/Error'

  export default {
    components: {
      Error
    },
    store,
    vuex: {
      actions
    }
  }
</script>

<style>
  #app {
    color: #2c3e50;
    max-width: 1000px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    height: 50px;
    width: 217px;
  }
</style>
