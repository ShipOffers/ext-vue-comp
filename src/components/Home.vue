<template>

  <ext-toolbar
    items="[
      {
        xtype='button',
        text='Dashboard',
      }
    ]" />

  <ext-grid
    title="The Grid Title">
  </ext-grid>

  <ext-button
    text="EWC Button"
    handler="'function test(){console.log('test')}'" />

</template>

<script>
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