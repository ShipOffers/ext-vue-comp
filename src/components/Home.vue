<template>

  <div>

    <ext-grid
      title="EWC Grid"
      shadow="true"
      editable="true"
      height="300"
      columns='[
        {
          "text": "ID", "flex": "1", "dataIndex": "id"
        },
        {
          "text": "Full Name", "flex": "1", "dataIndex": "full_name"
        },
        {
          "text": "Order Number", "flex": "1", "dataIndex": "order_number"
        },
        {
          "text": "Status", "flex": "1", "dataIndex": "status"
        }
      ]'
      :data="json">
    </ext-grid>

    <ext-button
      text="EWC Button (See console)"
      :handle="test" />


    <div style="padding: 10px; margin-bottom: 25px;">
      <p>The below section is native Vue</p>
      <div v-for="item in json">
        ID: {{ item.id }}, Full Name: {{ item.full_name }}, Order Number: {{ item.order_number }}, Status: {{ item.status }}
      </div>
        <button @click="test">Vue Button (See console)</button>
    </div>

  </div>


</template>


<script>
import '@sencha/ext-web-components-modern/dist/ext-button.component'
import '@sencha/ext-web-components-modern/dist/ext-toolbar.component'
import '@sencha/ext-web-components-modern/dist/ext-container.component'
import '@sencha/ext-web-components-modern/dist/ext-grid.component'
import '@sencha/ext-web-components-modern/dist/ext-column.component'
import Orders from '@/services/ordersservice'
import { onBeforeMount, ref } from 'vue'
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
  setup() {
    const json = ref([])
    function fetchOrders () {
      return Orders.fetchOrders()
        .then(res => {
          console.log(res.data)
          json.value = res.data
        })
    }
    function test () {
      console.log('Test!')
    }
    onBeforeMount(() => {
      fetchOrders()
    })
    return {
      fetchOrders,
      json,
      test,
    }
  },

  /*
  data: function() {
    return {
      json: []
    }
  },
  mounted () {
    this.fetchOrders()
  },
  methods: {
    test () {
      console.log('test')
    },
    fetchOrders () {
      return Orders.fetchOrders()
        .then(res => {
          console.log(res)
          this.json = res.data
        })
    }
  },
  */
}

</script>