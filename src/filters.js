import moment from 'moment'
import marked from 'marked'
moment.locale('zh-cn')

export default {
  marked,
  fromNow (t) {
    return moment(t).fromNow()
  }
}
