<template>

  <ext-toolbar />



  <ext-container
    padding="10"
    layout="fit"
    fitToParent="true"
    height="100%"
    width="100%">

    <ext-grid
      title="The Grid Title"
      shadow="true"
      :store="orderstore">

      <ext-column
        text="ID"
        flex="1"
        dataIndex="id"></ext-column>
      <ext-column
        text="Full Name"
        flex="1"
        dataIndex="full_name"></ext-column>
      <ext-column
        text="Order #"
        flex="1"
        dataIndex="order_number"></ext-column>
      <ext-column
        text="Status"
        flex="1"
        dataIndex="status"></ext-column>

    </ext-grid>

  </ext-container>
  

  <ext-button
    text="EWC Button"
    handler="'function test(){console.log('test')}'" />

</template>

<script>
const orderstore = [
{
"id": 1,
"full_name": "Glen Danzig",
"order_number": "674K9P",
"status": "Shipped"
},
{
"id": 2,
"full_name": "Ru Paul",
"order_number": "JD782E",
"status": "Pending"
},
{
"id": 3,
"full_name": "Buckethead",
"order_number": "F93DV8",
"status": "Shipped"
},
{
"id": 4,
"full_name": "SpongeBob SquarePants",
"order_number": "IE682X",
"status": "On Hold"
}
]
export default {
  name: 'Home',
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