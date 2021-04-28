import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  // eslint-disable-next-line no-unused-vars
  render: h => (
    <div>
      <p class='perigo'>linha2</p>
    </div>
  ),
}).$mount('#app')