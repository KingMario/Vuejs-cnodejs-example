import $ajax from '../helpers/ajax'
import {setError, showError} from './errorActions'

export default {
  getTopics ({dispatch}, tab, page = 1) {
    dispatch('SET_TOPICS', [])
    $ajax({
      method: 'GET',
      url: 'topics',
      data: {
        page,
        tab,
        limit: 10,
        mdrender: false
      }
    }).done((res) => {
      if (res.success) {
        dispatch('SET_PAGE', page)
        dispatch('SET_TOPICS', res.data)
      } else {
        setError({dispatch}, 'Unknow Error')
        showError({dispatch})
      }
    }).fail((error) => {
      setError({dispatch}, error)
      showError({dispatch})
    })
  },
  getTopic ({dispatch}, id) {
    dispatch('SET_TOPIC', {})
    $ajax({
      method: 'GET',
      url: `topic/${id}`,
      data: {
        mdrender: false
      }
    }).done((res) => {
      if (res.success) {
        dispatch('SET_TOPIC', res.data)
      } else {
        setError({dispatch}, 'Unknow Error')
        showError({dispatch})
      }
    }).fail((error) => {
      setError({dispatch}, error)
      showError({dispatch})
    })
  },
  setPage ({dispatch}, page) {
    dispatch('SET_PAGE', page)
  }
}
