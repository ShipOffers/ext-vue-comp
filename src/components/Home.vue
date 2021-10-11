<template>

  <ext-toolbar />



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
      :data="orders"
      height="600">

      <ext-column
        text="ID"
        flex="1"
        editable= "true"
        dataIndex="id"></ext-column>
      <ext-column
        text="Full Name"
        flex="1"
        editable= "true"
        dataIndex="full_name"></ext-column>
      <ext-column
        text="Order #"
        flex="1"
        editable= "true"
        dataIndex="order_number"></ext-column>
      <ext-column
        text="Status"
        flex="1"
        editable= "true"
        dataIndex="status"></ext-column>

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
    orders: [
      {
        id: 1,
        full_name: "Glen Danzig",
        order_number: "674K9P",
        status: "Shipped"
      },
      {
        id: 2,
        full_name: "Ru Paul",
        order_number: "JD782E",
        status: "Pending"
      },
      {
        id: 3,
        full_name: "Buckethead",
        order_number: "F93DV8",
        status: "Shipped"
      },
      {
        id: 4,
        full_name: "SpongeBob SquarePants",
        order_number: "IE682X",
        status: "On Hold"
      }
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