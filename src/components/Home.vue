<template>
  <div>

    <!-- Native V3 code -->
    <div style="padding: 10px; margin-bottom: 25px;">
      <p>The below section is native Vue</p>
      <div v-for="item in json">
        ID: {{ item.id }}, Full Name: {{ item.full_name }}, Order Number: {{ item.order_number }}, Status: {{ item.status }}
      </div>
      <button @click="test">Vue Button (See console)</button>
      <div style="margin-top: 50px;">
        <button @click="addItem">Add object to data array</button>
      </div>
    </div>


    <!-- Ext Web Components -->
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
      .handle="test" />

  </div>
</template>


<script>
import '@sencha/ext-web-components-modern/dist/ext-button.component'
import '@sencha/ext-web-components-modern/dist/ext-grid.component'
import Orders from '@/services/ordersservice'
import { onBeforeMount, ref } from 'vue'

/*
 * https://v3.vuejs.org/guide/web-components.html
 *
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
    /**
     * This is where we store the JSON retrieved from the API
     */
    const json = ref([])

    /**
     * The Axios call to fetch and store the data
     */
    function fetchOrders () {
      return Orders.fetchOrders()
        .then(res => {
          console.log(res)
          json.value = res.data
        })
    }

    /**
     * This is just a 'test' function.
     */
    function test () {
      console.log('Test!')
    }

    /**
     * This adds an object to the JSON array
     */
    function addItem () {
      const obj = {
        "id": 5,
        "full_name": "Willy Wonka",
        "order_number": "123ABC",
        "status": "Pending"
      }
      json.value.push(obj)
    }

    /**
     * The call to do the actual fetching on page load.
     */
    onBeforeMount(() => {
      fetchOrders()
    })

    /**
     * Vue3 - make our data and functions available to the template.
     */
    return {
      addItem,
      fetchOrders,
      json,
      test,
    }
  },


  /**
   * Vue2  - should still work in Vue3 as V2 is backwards compatible.
   */

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
    },
    test () {
      console.log('Test!')
    },
  },
  */
}

</script>