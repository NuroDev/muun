<template>
    <!-- MacOS: Titlebar invisible  -->
    <div v-if='isDarwin' color='secondary' class='appTitleBar' />
</template>

<script>
    export default {
      data () {
        if (process.platform === 'darwin') {
          return {
            isDarwin: true
          }
        } else {
          return {
            isDarwin: false
          }
        }
      }
    }
</script>

<style>
    .appTitleBar {
        width: 100%;
        height: 24px;
        -webkit-app-region: drag;
        position: fixed;
    }
</style>
