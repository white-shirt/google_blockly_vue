import Vue from 'Vue'
import Index from './index.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index },
  render: h => h(Index)
})
