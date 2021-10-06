import { createApp } from 'vue'
import App from './App.vue'
import '@sencha/ext-web-components-modern/dist/ext-button.component'
import '@sencha/ext-web-components-modern/dist/ext-grid.component'
import '@sencha/ext-web-components-modern/dist/ext-toolbar.component'

Ext.onReady(function() {
  createApp(App).mount('#app')
})