<template>

  <ext-toolbar />

  <div>
    {{ orders }}
  </div>

  <ul v-for="item in orders">
    <li>{{ item.id }}</li>
  </ul>

  <ext-container
    padding="10"
    layout="fit"
    fitToParent="true"
    height="100%"
    width="100%">

<!--
  https://my-json-server.typicode.com/sageworksstudio/json-server/orders

  vue cookbook axios

-->

    <ext-grid
      title="The Grid Title"
      shadow="true"
      columns='[
        {"text": "Name", "width": "250", "dataIndex": "name", "cell": {"style": {"text-align": "left"}}},
        {"text": "Email Address", "flex": "1", "dataIndex": "email", "cell": {"style": {"text-align": "left"}}},
        {"text": "Phone Number", "width": "250", "dataIndex": "phone", "cell": {"style": {"text-align": "left"}}}
      ]'
      data="data"
      height="600">
    </ext-grid>

  </ext-container>
  

  <ext-button
    text="EWC Button"
    handle="'function sayHi(){console.log('hi')}'" />

</template>


<script>

import '@sencha/ext-web-components-modern/dist/ext-button.component'
import '@sencha/ext-web-components-modern/dist/ext-toolbar.component'
import '@sencha/ext-web-components-modern/dist/ext-container.component'
import '@sencha/ext-web-components-modern/dist/ext-grid.component'
import '@sencha/ext-web-components-modern/dist/ext-column.component'
/*
import { defineCustomElement } from 'vue'
const MyVueElement = defineCustomElement({
  props: {},
  emits: {},
  template: `...`,
  styles: [``] // inlined css
})
customElements.define('ext-button', MyVueElement)
*/


export default {
  name: 'Home',
  data: () => ({
    columns: [
        {"text": "Name", "width": "250", "dataIndex": "name", "cell": {"style": {"text-align": "left"}}},
        {"text": "Email Address", "flex": "1", "dataIndex": "email", "cell": {"style": {"text-align": "left"}}},
        {"text": "Phone Number", "width": "250", "dataIndex": "phone", "cell": {"style": {"text-align": "left"}}}
      ],
    data: [
        {"name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224"},
        {"name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234"},
        {"name": "Homer", "email": "homer@simpsons.com", "phone": "555-222-1244"},
        {"name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254"}
      ]
  }),
  setup() {
    function test () {
      console.log('test')
    }
    return {
      test,
    }
  },
}

</script>