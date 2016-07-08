<template>
  <alert
    :show.sync="thisVisible"
    :duration="3000"
    type="danger"
    width="400px"
    placement="top"
    dismissable>
    <strong>出错啦！</strong>{{{error.responseText}}}
  </alert>
</template>

<script type="text/ecmascript-6">
  import {alert} from 'vue-strap/dist/vue-strap.min'
  import {showError, hideError} from '../../vuex/errorActions'

  export default {
    components: {
      Alert: alert
    },
    vuex: {
      getters: {
        error: state => state.error,
        errorVisible: state => state.errorVisible
      },
      actions: {
        showError,
        hideError
      }
    },
    computed: {
      thisVisible: {
        get () {
          return this.errorVisible
        },
        set (val) {
          val ? this.showError() : this.hideError()
        }
      }
    }
  }
</script>
