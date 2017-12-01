<template>
  <div id='app'>
    <appTitlebar />
    <appModals />
    <appContent />
    <appSpeedDial />
  </div>
</template>

<script>
  import appTitlebar from './components/appTitlebar'
  import appModals from './components/modals/appModals'
  import appContent from './components/appContent'
  import appSpeedDial from './components/appSpeedDial'

  import i18n from './i18n'

  export default {
    components: {
      appTitlebar,
      appModals,
      appContent,
      appSpeedDial
    },
    i18n
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
