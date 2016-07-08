import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/logger'

Vue.use(Vuex)

const state = {
  page: 1,
  topics: [],
  topic: {},
  error: '',
  errorVisible: false
}

const mutations = {
  SET_PAGE (state, page) {
    state.page = page
  },
  SET_TOPICS (state, topics) {
    state.topics = topics
  },
  SET_TOPIC (state, topic) {
    state.topic = topic
  },
  SET_ERROR (state, error) {
    state.error = error
  },
  SET_ERROR_VISIBLE (state, errorVisible) {
    state.errorVisible = errorVisible
  }
}

export default new Vuex.Store({
  state,
  mutations
})
