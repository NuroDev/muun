<template>
  <v-list-tile-action>
    <v-tooltip right>
      <v-btn flat slot="activator" href='#' v-scroll-to='id' :icon='smallItemBtn'>
        <v-icon v-html="icon" :class='!$vuetify.dark ? "white--text" : ""' />
      </v-btn>
      <span v-html="title" />
    </v-tooltip>
  </v-list-tile-action>
</template>

<script>
  export default {
    props: ['id', 'title', 'icon', 'smallItemBtn']
  }
</script>
