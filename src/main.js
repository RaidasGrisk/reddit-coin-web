import Vue from 'vue'
import App from './App.vue'
import store from '@/store/store'

Vue.config.productionTip = false

new Vue ({
    store,
    render: h => h(App),
    created() {
      store.dispatch('loadData', {'gran': 'daily'})
    }
}).$mount('#app')
