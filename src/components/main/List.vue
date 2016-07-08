<template>
  <template v-if="topics.length">
    <pagenation :page-count="20" :cur-page="pageNumber" :goto-page="gotoPage"></pagenation>
    <table class="table table-responsive table-striped table-hover">
      <tr v-for="topic in topics">
        <td><img class="img-rounded" :src="topic.author.avatar_url" :alt="topic.author.loginname"
                 :title="topic.author.logingname"></td>
        <td>
          <div>
            <span class="glyphicon glyphicon-bookmark text-success" v-if="topic.top"></span>
            <span class="glyphicon glyphicon-thumbs-up text-success" v-if="topic.good"></span>
            <span class="alert alert-lightgray alert-no-padding" v-if="!topic.top && topic.tab === 'share'">分享</span>
            <span class="alert alert-lightgray alert-no-padding" v-if="!topic.top && topic.tab === 'job'">招聘</span>
            <span class="alert alert-lightgray alert-no-padding" v-if="!topic.top && topic.tab === 'ask'">问答</span>
            <a href="javascript:void(0)" v-link="{name: 'topic', params: {id: topic.id}}">{{topic.title}}</a>

            <div class="pull-right">
              {{topic.last_reply_at | fromNow}}
            </div>

            <span class="text-muted">
              <span class="glyphicon glyphicon-comment"></span>
              <span>{{topic.reply_count}}</span>
              <span class="glyphicon glyphicon-eye-open"></span>
              <span>{{topic.visit_count}}</span>
            </span>
          </div>
        </td>
      </tr>
    </table>
  </template>
  <alert v-else
         :show.sync="true"
         type="info"
         width="400px">
    加载中...
  </alert>
</template>

<script type="text/ecmascript-6">
  import {alert} from 'vue-strap/dist/vue-strap.min'
  import actions from '../../vuex/topicActions'
  import filters from '../../filters'
  import pagenation from '../common/Pagination'

  export default {
    route: {
      data ({to: {params}, next}) {
        this.getTopics(params.tab)
        next()
      }
    },
    vuex: {
      getters: {
        page: state => state.page,
        topics: state => state.topics
      },
      actions
    },
    filters,
    components: {
      pagenation,
      alert
    },
    computed: {
      pageNumber: {
        get () {
          return this.page
        },
        set (val) {
          this.setPage(val)
        }
      }
    },
    methods: {
      gotoPage (page) {
        this.getTopics(this.$route.params.tab, page)
      }
    }
  }
</script>

<style scoped>
  img {
    width: 50px;
    height: 50px;
  }

  .alert-lightgray {
    background-color: lightgray;
  }

  .alert-no-padding {
    padding: 0;
  }
</style>
