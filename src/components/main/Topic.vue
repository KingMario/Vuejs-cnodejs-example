<template>
  <div v-if="topic.title">
    <div class="pull-left">
      <span class="glyphicon glyphicon-bookmark text-success" v-if="topic.top"></span>
      <span class="glyphicon glyphicon-thumbs-up text-success" v-if="topic.good"></span>
      <span class="alert alert-lightgray alert-no-padding" v-if="!topic.top && topic.tab === 'share'">分享</span>
      <span class="alert alert-lightgray alert-no-padding" v-if="!topic.top && topic.tab === 'job'">招聘</span>
      <span class="alert alert-lightgray alert-no-padding" v-if="!topic.top && topic.tab === 'ask'">问答</span>
    </div>
    <h1>
      {{topic.title}}
    </h1>
    <div>
      <span>
        {{topic.create_at | fromNow}} by {{topic.author.loginname}}
      </span>
      <span class="text-muted">
        <span class="glyphicon glyphicon-comment"></span>
        <span>{{topic.reply_count}}</span>
        <span class="glyphicon glyphicon-eye-open"></span>
        <span>{{topic.visit_count}}</span>
      </span>
    </div>
    <hr>
    <div>
      {{{topic.content | marked}}}
    </div>
    <div v-if="topic.replies.length">
      <h2>
        {{topic.replies.length}}回复
      </h2>
      <div v-for="reply in topic.replies | orderBy 'create_at' -1">
        <hr>
        <reply :reply="reply"></reply>
      </div>
    </div>
  </div>
  <alert v-else
         :show.sync="true"
         type="info"
         width="400px">
    加载中...
  </alert>
</template>

<script type="text/ecmascript-6">
  import {alert} from 'vue-strap/dist/vue-strap.min'
  import reply from '../widgets/reply'
  import actions from '../../vuex/topicActions'
  import filters from '../../filters'

  export default{
    route: {
      data ({to: {params}, next}) {
        this.getTopic(params.id)
        next()
      }
    },
    vuex: {
      getters: {
        topic: state => state.topic
      },
      actions
    },
    filters,
    components: {
      alert,
      reply
    }
  }
</script>

<style scoped>
  .alert-lightgray {
    background-color: lightgray;
  }

  .alert-no-padding {
    padding: 0;
  }
</style>
