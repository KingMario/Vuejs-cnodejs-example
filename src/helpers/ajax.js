import $ from 'jquery'
require('jquery-ajax-transport-xdomainrequest')

export default (options) => {
  options.url = '//cnodejs.org/api/v1/' + options.url
  return $.ajax(options)
}
