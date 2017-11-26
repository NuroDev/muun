<template>
  <v-speed-dial v-model='speedDialOptions.fab' bottom right :direction='speedDialOptions.direction' :hover='speedDialOptions.hover' :transition='speedDialOptions.transition'>
    
    <!-- Initial speed dial button in bottom right of window -->
    <v-btn slot='activator' color='primary' :large='speedDialOptions.large' fab :hover='speedDialOptions.hover' v-model='speedDialOptions.fab'>
      <v-icon>add</v-icon>
      <v-icon>close</v-icon>
    </v-btn>

    <!-- Speed dial items(No tooltip) -->
    <v-tooltip left :key='i' v-for='(items, i) in speedDialOptions.items' :disabled='speedDialOptions.hideItemsTooltip'>
      <v-btn fab :large='speedDialOptions.large' :small='speedDialOptions.subItems' color='primary' slot='activator'>
        <v-icon v-html='items.icon'></v-icon>
      </v-btn>
      <span v-html="items.title"></span>
    </v-tooltip>

  </v-speed-dial>
</template>

<script>
  import settingsStore from '../store/modules/settings'

  export default {
    data () {
      return {
        speedDialOptions: settingsStore.state.speedDialOptions
      }
    }
  }
</script>

<style>
  .speed-dial--bottom:not(.speed-dial--absolute) {
    position: fixed;
    bottom: 30px;
    right: 30px;
  }
</style>
