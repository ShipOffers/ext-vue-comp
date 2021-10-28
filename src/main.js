// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
window.myTest = () => {
  console.log('test')
}
Ext.onReady(function() {
  createApp(App).mount('#app')
})