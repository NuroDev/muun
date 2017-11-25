<template>
  <div id='app'>
    <appTitlebar></appTitlebar>
    <appContent></appContent>
    <appSpeedDial></appSpeedDial>
  </div>
</template>

<script>
  import appTitlebar from './components/appTitlebar'
  import appContent from './components/appContent'
  import appSpeedDial from './components/appSpeedDial'

  export default {
    components: {
      appTitlebar,
      appContent,
      appSpeedDial
    }
  }
</script>

<style lang='stylus'>
  @import './assets/stylus/main.styl'
</style>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');

  /**
  * Hide scroll bars
  **/
  ::-webkit-scrollbar { display: none; }

  /**
  * Body styling
  **/
  body {
    overflow-y: hidden;
    background-color: #303030;
  }
</style>
